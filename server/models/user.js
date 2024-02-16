import mongoose from "mongoose";

const {Schema}=mongoose;
const { ObjectId } = mongoose.Schema;
const userSchema =new Schema(
    {
        name:{
            type: String,
            trim:true,
            required:true,
        },
        email:{
            type: String,
            trim:true,
            required:true,
            unique:true
        },
        password:{
            type: String,
            required:true,
            min:6,
            max:64
        },
        picture:{
            type: String,
             default:'/avatar.png',
        },

        role:{
            type : [String],
            default: "Creator",
        },
      passwordResetCode :{
          type: String,
          default: "",
      },
      images: [{ type: ObjectId, ref:"Image"}],

    },
   
    {timestamps:true}
);

const User = mongoose.model("User", userSchema);
export default User;