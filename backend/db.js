import mongoose from "mongoose";

const URL =
  "mongodb+srv://yharsh579:3QDESiFDZzeGJv4G@cluster.yyexp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

async function db() {
  try {
    await mongoose.connect(URL);
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
}

export default db;
