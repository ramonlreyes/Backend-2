import {v4} from "uuid";

import express from "express";
import "dotenv/config";

const app = express()
const PORT = process.env.PORT || 3000;

app.get("/product",(req, res)=> {
  res.send (`Send products here...`);
});
app.post("/product",(req, res)=> {
  res.send (`Create products here...`,
    `I already have a unique UUID wich is ${v4()}`
  );
});
app.put("/product/:id",(req, res)=> {
  console.log(req.params);
  res.send (`Update products here...`);
});
app.delete("/product/:id",(req, res)=> {
  res.status(404).send(`Sorry this function does not exist Yet`);
});
app.listen(PORT, ()=> {
  console.log(`Unser backend ist nun gestartet auf Port ${PORT}`);
});

console.log(`Mein Backend`);

