const express =require("express");

const app =express();

app.use("/test", (req,res) => {
  res.send("Hello World to the New member");

});

app.use("/hello",(req,res) => {
  res.send ("Hello Tine I hate u");
})

app.listen(7777, () => {
 console.log("successfully respond to the server on 7777");
});