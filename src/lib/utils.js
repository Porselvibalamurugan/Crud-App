import mongoose from "mongoose";
const isconnected = {};
export async function ConnectToDb() {
  try {
    if (isconnected.flag) {
      console.log("using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI);
    isconnected.flag = db.connections[0].readyState;
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("error connecting to MongoDb", error);
  }
}
