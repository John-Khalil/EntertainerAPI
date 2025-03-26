import express, { json, response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World45!"));

app.post("*",(req,res)=>{

  console.log(req.body)

  // response envelope 
  
  return res.send(JSON.stringify(
    {
        "status": 0,
        "message": "success",
        "responseMap": null,
        "campaignBonus": [
            {
                "status": "failure",
                "customerIds": [
                    "1200009039",
                    "9999999",
                    "12121212"
                ],
                "message": "Customer doesn't exist"
            },
            {
                "status": "success",
                "customerIds": [
                    "444422322"
                ]
            }
        ]
    }
  ))


  // return res.send(JSON.stringify(
  //     {
  //         "errors": [
  //           {
  //             "message": "Request with the same reference number cannot be processed again"
  //           }
  //         ],
  //         "status": 1
  //     }
  // ))
  
  // return res.send(JSON.stringify(
  //     {
  //         "errors": [
  //           {
  //             "fieldName": "expiryValidity",
  //             "message": "Field cannot be empty."
  //           }
  //         ],
  //         "status": 1
  //     }
  // ))


})




export default app;