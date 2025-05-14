const express    = require("express")
const app = express();

const dotenv = require("dotenv");
const products = require("./src/data/Products.cjs");
dotenv.config()

const PORT = process.env.PORT;

//api product test route
//app.get("/src/data/products", (req, res) => {
    
//    res.json(products);
//})
//app.get("/src/data/products/:id", (req, res) => {
//    const product = products.find((product) => product.id == req.params.id)
//    res.json(product);
//})

//conect wuçith mangodb
const mongoose = require("mongoose")

//connect db
mongoose.connect(process.env.MONGOOSEDB_RUL).then(() => console.log("db connected")).then((err)=>{
    err;
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})

//sergio635
//Aei9IMoxy8Dnq7q6
//mongodb+srv://sergio635:Aei9IMoxy8Dnq7q6@cluster0.bz9baxr.mongodb.net/REACT-NODE-APP