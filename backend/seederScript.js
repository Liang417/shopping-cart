require('dotenv').config();

const productsDate = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const importDate = async () =>{
    try {
        await Product.deleteMany({});

        await Product.insertMany(productsDate);

        console.log("Date Import Success");

        process.exit();
    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
    }
};

importDate();