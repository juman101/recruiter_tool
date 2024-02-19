import Link from "next/link";
import Gravatar from 'react-gravatar';
import { Typography, Chip } from "@mui/material";

const ImageCard = ({ image }) => {
  const { name, nodejsExperience, reactjsExperience, expectedSalary, currentStatus, category } = image;

  const calculateScore = (experience) => {
    switch (experience) {
      case "Less than 1 year":
        return 1;
      case "1-2 years":
        return 2;
      case "Over 2 years":
        return 3;
      default:
        return 0;
    }
  };

  const nodejsScore = calculateScore(nodejsExperience);
  const reactjsScore = calculateScore(reactjsExperience);

  const totalScore = nodejsScore + reactjsScore;

  return (
    <div className="card mb-3" style={{ backgroundColor: "black", color: "#fff", marginRight: "4px" }}>
       <Typography variant="h6" className="font-weight-bold" style={{ backgroundColor: "#f0000", color: "#fff", marginRight: "4px" }}>
             {name}
            </Typography>
      <Link href="/image/[slug]" as={`/image/${image.slug}`} legacyBehavior>
        
        <a className="text-decoration-none">
          {image.image.Location ? (
          <img
          src={image.image.Location}
          alt={name}
          className="card-img-top mx-auto d-block"
          style={{ width: "100px", height: "100px" }}
        />
        
          ) : (
            <Gravatar
              email="dummy@example.com" // Use a dummy email address or any user's email address
              size={300}
              style={{ maxWidth: "100%", maxHeight: "160px" }}
            />
          )}
          <div className="card-body">
           
            <Typography variant="h7" className="font-weight-bold">
              Score - {totalScore}
            </Typography>
            <br />
            <Typography variant="h8" className="font-weight-bold">
              Expected Salary - Rs. {expectedSalary}
            </Typography>
            <br />
            <br />
            <Chip label={currentStatus} style={{ backgroundColor: "#ffffff", color: "#000000", marginRight: "4px" }} className="mr-10" />
            <Chip label={category} style={{ backgroundColor: "#ffffff", color: "#000000", marginRight: "4px" }} className="mr-10" />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ImageCard;
