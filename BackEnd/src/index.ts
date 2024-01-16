import express from "express";
const app = express();
import corse from "cors";
import dotenv from "dotenv";
import productModel from "./Modules/productModel";
import UserModel from "./Modules/UserModel";
dotenv.config();
import mongoose from "mongoose";
import process from "process";
import { Request, Response } from "express";
import OrderModelSchema from "./Modules/OrderModule";
import { get } from "http";
app.use(express.json({ limit: '50mb' }));
app.use(corse())
const PORT = process.env.PORT || 8080;

//mongo db connection

console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL as string)
const db = mongoose.connection;

db.on("open", () => {
    console.log("Mongo db is connected");
})
db.on("err", (err) => {
    console.log(err);
})

app.get("/", (req: Request, res: Response) => {
    console.log(" Server is Running 🍑....... 🍔");


});


app.post("/order", async (req: Request, res: Response) => {
    console.log(req.body);
    //use mongoos save method
    const { totalQty, totalPrice, productCartItem } = req.body;
    const productItems: Array<{
        // Replace with the actual type
        name: string;
        category: string;
        image: string;
        price: number; // Replace with the actual type

        qty: number; // Replace with the actual type
    }> = productCartItem.map((item: any) => ({

        name: item.name,
        category: item.category,
        image: item.image,
        price: item.price,

        qty: item.qty,
    }));
    const orderObject = new OrderModelSchema({
        totalQty,
        totalPrice,
        productCartItem: productItems,
    });
    const data = await orderObject.save();

    if (data) {
        res.status(200).json({ message: "Product Data Received Successfully" })
    }
    else {
        res.status(404).json({ message: "Product Data Not Received Successfully" })
    }
    try {

    } catch (err) {
        res.status(500).json({ message: "Product Server Error" })
    }

});

 
app.get("/getAllOrders", async (req: Request, res: Response) => {
    try {
        const data = await OrderModelSchema.find({})
        res.send(JSON.stringify(data));
    } catch (err: any) {
        console.log(err);
    }
})


// app.post("/signin", async (req: Request, res: Response) => {
//     console.log(req.body);
//     const { email } = req.body;

//     UserModel.findOne({ email: email }, (err: any, result: any) => {
//         console.log(result);
//         console.log(err);

//         if (result) {
//             res.send({ message: "email id is Already registered", alert: false });
//         } else {
//             const data = new UserModel(req.body);
//             const save = data.save();
//             res.send({
//                 message: "User Registered Successfully", status: "success",
//                 alert: true,
//             });
//         }
//     });
// })



// // login in api
// app.post("/login", (req: Request, res: Response) => {
//     try {
//         console.log(req.body);
//         const { email } = req.body;
//         UserModel.findOne({ email: email }, (er: any, result: any) => {
//             if (result) {
//                 const dataSend = {
//                     _id: result._id,
//                     firstName: result.firstName,
//                     lastName: result.lastName,
//                     email: result.email,
//                     image: result.image,
//                 }
//                 //get back end data from mongo db and send to front end set to front end
//                 console.log(dataSend);
//                 res.send({ message: "Login Successfully", status: "success", alert: true, data: dataSend })
//             } else {
//                 res.send({ message: "This Email is not Available pleace Sign In....", status: "success", alert: false })
//             }
//         })
//     } catch (err) {
//         console.log(err);
//     }
// });

app.post("/login", async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { email } = req.body;

        const user = await UserModel.findOne({ email: email }).exec();

        if (user) {
            const dataSend = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                image: user.image,
            };

            // Log the data to console
            console.log(dataSend);

            res.send({ message: "Login Successfully", status: "success", alert: true, data: dataSend });
        } else {
            res.send({ message: "This Email is not Available please Sign Up...", status: "success", alert: false });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal Server Error", alert: false });
    }
});

// app.post("/uploadProduct", async (req: Request, res: Response) => {
//     try {
//         console.log(req.body);
//         let reQ = req.body;
//         let data = new productModel({
//             name: reQ.name,
//             category: reQ.category,
//             image: reQ.image,
//             price: reQ.price,
//             description: reQ.description
//         });
//         const dataSave = await data.save();
//         if (dataSave) {
//             res.status(200).json({ message: "Product Data Received Successfully" })
//         } else {
//             res.status(404).json({ message: "Product Data Not Received Successfully" })
//         }
//         res.send({ message: "Product Data Received Successfully" })
//     } catch (err) {
//         console.log(err);
//     }


// })
app.post("/uploadProduct", async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        let reQ = req.body;
        let data = new productModel({
            name: reQ.name,
            category: reQ.category,
            image: reQ.image,
            price: reQ.price,
            description: reQ.description
        });
        const dataSave = await data.save();
        if (dataSave) {
            res.status(200).json({ message: "Product Data Received Successfully" });
        } else {
            res.status(404).json({ message: "Product Data Not Received Successfully" });
        }
        // Remove the following line since you have already sent a response above
        // res.send({ message: "Product Data Received Successfully" });
    } catch (err) {
        console.log(err);
        // Handle the error and send an appropriate response
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// //get the product from mongoose

app.get("/product", async (req: Request, res: Response) => {
    try {
        const data = await productModel.find({})
        res.send(JSON.stringify(data));
    } catch (err: any) {
        console.log(err);
    }
})


//server runningn port
app.listen(PORT, () => console.log("Server is running on port : " + PORT));



