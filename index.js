const express = require("express"),
    app = express(),
    port = process.env.PORT || 80

const tools = require("./tools.json")

app.set("view engine", "pug")
app.use("/", express.static("./public"))

app.get("/", (req,res) => {
    res.render("index", {tools})
})

app.get("/generate", (req,res) => {
    const tool = tools[Math.floor(Math.random() * tools.length)]
    res.json(tool)
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})