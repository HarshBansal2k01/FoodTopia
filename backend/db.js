// connecting mongoose
const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://harsh:harsh123@cluster0.8zewixo.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, (err, result) => {
    if (err) {
      console.log("---", err);
    } else {
      console.log("Connected Successfully");
    }
  });
};

module.exports = mongoDB;
