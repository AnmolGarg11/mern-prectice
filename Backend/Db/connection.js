const mongoose = require("mongoose");

const URL =
  "mongodb+srv://Anmol:MernPractice@cluster0.auyr9fg.mongodb.net/PracticeMern?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
mongoose
  .connect(URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("hello from mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
