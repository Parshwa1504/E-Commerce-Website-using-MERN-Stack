const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("I am in connect");
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Items",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // mongoose.set({ `useCreateIndex`: true });
    console.log("Mongo DB Connected: ", conn.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
