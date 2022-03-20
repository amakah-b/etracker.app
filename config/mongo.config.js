const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = async () => {
  try {
    mongoose.connect(process.env.DB_URL, options);
    console.log(`Connected to ${process.env.DB_URL}`);
  } catch (error) {
    throw new Error(error.message);
  }
};
