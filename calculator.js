import express from 'express';
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){

   var weight = parseFloat(req.body.weight);
   var height = parseFloat(req.body.height);
   var bmi = weight/(height^2);

    res.send("Your BMI is " + bmi);
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});