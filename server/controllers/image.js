// controllers/image.js

import AWS from "aws-sdk";
import { nanoid } from "nanoid";
import slugify from "slugify";

import { findAllPublishedImagesQuery, checkEnrollmentStatusQuery, enrollImageQuery, getUserImagesQuery } from '../controllers/queries.js';
import {sequelize ,User, Image } from '../models/pgsql.js';
import { QueryTypes } from 'sequelize';

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    apiVersion: process.env.AWS_API_VERSION,
};

const s3 = new AWS.S3(awsConfig);

export const uploadImage = async (req, res) => {
    try {
        // console.log("reached upload image n controllers")
        const { image } = req.body;
        if (!image) return res.status(400).send("No image");

        const base64Data = Buffer.from(image.replace(/^data:image\/\w+;base64,/, ""), "base64");
        const type = image.split(",")[0].split("/")[1];

        const params = {
            Bucket: "edemy-bucket-siddhant",
            Key: `${nanoid()}.${type}`,
            Body: base64Data,
            ACL: "public-read",
            ContentEncoding: "base64",
            ContentType: `image/${type}`,
        };

        s3.upload(params, (err, data) => {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }
            console.log(data);
            return res.send(data);
        });
    } catch (err) {
        console.log(err);
        console.log("error occured in this block")
        return res.status(500).send("Internal Server Error");
    }
};

export const create = async (req, res) => {
    try {
        console.log("i reached create")
        const { name, email, phone, expectedSalary, description, currentStatus, nodejsExperience,reactjsExperience, category, score, image} = req.body;
        const slug = slugify(name.toLowerCase());
        console.log("ok so here is the error")
        console.log(req.body)
        console.log(req.user)
        const imagei = await Image.create({
            name: req.body.name, email: req.body.email, phone: req.body.phone, expectedSalary: req.body.expectedSalary, description: req.body.description, currentStatus: req.body.currentStatus, nodejsExperience: req.body.nodejsExperience,reactjsExperience: req.body.reactjsExperience, category: req.body.category,  score:req.body.score,
            image: req.body.image, slug,
            creatorId: req.user.id,
        });
        console.log("yes this error is fixed")
        return res.json(imagei);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

export const read = async (req, res) => {
    try {
        const { slug } = req.params;
        const image = await Image.findOne({ where: { slug } });
        if (!image) return res.status(404).json({ message: "Image not found" });
        return res.json(image);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

export const update = async (req, res) => {
    try {
        const { slug } = req.params;
        const { name, description, category } = req.body;
        const updatedImage = await Image.update(
            { name, description, category },
            { where: { slug }, returning: true }
        );
        return res.json(updatedImage[1][0]);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

export const publish = async (req, res) => {
    try {
        const { imageId } = req.params;
        const image = await Image.findByPk(imageId);
        if (!image) return res.status(404).json({ message: "Image not found" });
        if (image.creatorId !== req.user.id) return res.status(403).json({ message: "Unauthorized" });

        const updatedImage = await Image.update({ published: true }, { where: { id: imageId }, returning: true });
        return res.json(updatedImage[1][0]);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

export const unpublish = async (req, res) => {
    try {
        const { imageId } = req.params;
        const image = await Image.findByPk(imageId);
        if (!image) return res.status(404).json({ message: "Image not found" });
        if (image.creatorId !== req.user.id) return res.status(403).json({ message: "Unauthorized" });

        const updatedImage = await Image.update({ published: false }, { where: { id: imageId }, returning: true });
        return res.json(updatedImage[1][0]);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

export const images = async (req, res) => {
    try {
        const allImages = await findAllPublishedImagesQuery();
        return res.json(allImages);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

export const checkEnrollment = async (req, res) => {
    try {
        const { imageId } = req.params;
        const isEnrolled = await checkEnrollmentStatusQuery(req.user.id, imageId);
        return res.json({ status: isEnrolled });
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

export const freeEnrollment = async (req, res) => {
    try {
        const { imageId } = req.params;

        // Find the image by ID
        const image = await Image.findByPk(imageId);

        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }

        // Add the enrolled image to the user's saved images
        const user = await User.findByPk(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Ensure that user.savedImages is an array before using map
        user.savedImages = user.savedImages || [];

        // Check if the image already exists in saved images to avoid duplication
        const savedImagesIds = user.savedImages.map(savedImage => savedImage.id);

        if (!savedImagesIds.includes(image.id)) {
            // Extract the ID from the Sequelize instance before adding it to saved images array
            const imageIdToAdd = image.id;
            
            // Add the image ID to saved images array
            await user.update({ savedImages: [...user.savedImages, imageIdToAdd] });

            return res.json({ message: "Enrollment successful" });
        } else {
            return res.json({ message: "Image already enrolled" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};


export const userImages = async (req, res) => {
    try {
        // Find the user by ID
        const user = await User.findByPk(req.user.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Retrieve the saved images array from the user's record
        const savedImages = user.savedImages || [];

       
        // Find all corresponding images using the Image model
        const imageIds = savedImages
        console.log(imageIds);
        // Find all corresponding images using the Image model
        const correspondingImages = await Image.findAll({
            where: { id: imageIds }
        });

        console.log(correspondingImages);
        return res.json(correspondingImages);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};
