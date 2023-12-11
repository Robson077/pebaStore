import express from "express";
import cors from "cors"
import db from "./database/db.js"

const app = express()

app.use(express.json())
app.use(cors())


app.get("/content", (req, res) => {
    res.json(db)
})

app.listen(3000, () => {
    console.log("Servidor iniciado")
})