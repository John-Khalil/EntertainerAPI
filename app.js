import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World45!"));

app.post("*",(req,res)=>{

  console.log(req.body)
  
  return res.send(JSON.stringify([
    {
      status:"success",
      customerId:[
        120000456,
        120000457,
        120000458,
        120000459,
        120000460
      ]
    },
    {
      status:"failure",
      customerId:[
        120000456,
        120000457,
        120000458,
        120000459,
        120000460
      ]
    }
  ]))
})

export default app;