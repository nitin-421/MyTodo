import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;

// const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.omgzz0f.mongodb.net/?retryWrites=true&w=majority`;

const MONGODB_URI = process.env.MONGO_URI;

/**
 * This function connects to a MongoDB database using the provided URI and logs a message indicating
 * successful connection.
 */
const Connection = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(MONGODB_URI, {
      //options
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default Connection;
