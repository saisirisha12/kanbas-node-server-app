import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
 {
   name: String,
   number: String,
   credits: Number,
   description: String,
   image: {
    type: String,
    default: "/images/defaultcourseimg.jpg",
  },
 },
 { collection: "courses" }
);
export default courseSchema;