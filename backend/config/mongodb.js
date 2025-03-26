const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connected to database successfully");
  });

  await mongoose.connect(`${process.env.MONGO_URI}/Merndb`);
};

module.exports = connectDB;
