import mongoose from "mongoose";

export const Connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Connection sucessfull",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
