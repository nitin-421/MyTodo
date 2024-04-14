// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;

// const Connection = () => {
//   const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.omgzz0f.mongodb.net/?retryWrites=true&w=majority`;

//   mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

//   mongoose.connection.on("connected", () => {
//     console.log("Database connected Successfully");
//   });

//   mongoose.connection.on("disconnected", () => {
//     console.log("Database disconnected");
//   });

//   mongoose.connection.on("error", (error) => {
//     console.log("Error while connecting with the database ", error.message);
//   });
// };

// export default Connection;

//connect to mongodb database function es6 using import
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.omgzz0f.mongodb.net/?retryWrites=true&w=majority`;

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
