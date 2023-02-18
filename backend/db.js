// connecting mongoose
const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://harsh:harsh123@cluster0.8zewixo.mongodb.net/FoodTopia?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, async (err, result) => {
    if (err) {
      console.log("---", err);
    } else {
      console.log("Connected Successfully");
      const fetched_data = await mongoose.connection.db.collection(
        "food_items"
      );
      fetched_data.find({}).toArray(function (err, data) {
        if (err) console.log(err);
        else console.log();
      });
    }
  });
};

module.exports = mongoDB;
