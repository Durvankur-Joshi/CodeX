import mongoose from 'mongoose';


const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    visibility: {
      type: String,
      enum: ['public', 'private'],
      default: 'public',
    },
    creationDate: {
      type: Date,
      default: Date.now,
    },
    htmlCode: {
      type: String,
      default: '', // Default empty string
    },
    cssCode: {
      type: String,
      default: '', // Default empty string
    },
    jsCode: {
      type: String,
      default: '', // Default empty string
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt`
  }
);

const Project = mongoose.model("project" , projectSchema )

export default Project
