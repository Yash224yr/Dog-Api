import Express from "express";
import cors from "cors"
import axios from "axios"

const app = Express()

const corsOption = {
    origin: "http://localhost:5173"
}

app.use(cors(corsOption))

app.use(Express.json())


app.get("/random", (req, res) => {
    axios
        .get("http://dog.ceo/api/breeds/image/random")
        .then((result) => {
            res.status(200).json(result.data.message)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get("/list", (req, res) => {
    axios.get("https://dog.ceo/api/breeds/list/all")
        .then((result) => {
            res.status(200).json(result.data.message)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get("/breedimage/:breed", (req, res) => {
    const breed = req.params.breed
    axios.get(`http://dog.ceo/api/breed/${breed}/images/random`)
    .then((result)=>{
            res.status(200).json(result.data.message)
    })
    .catch((err)=>{
        console.log(err)
    })
})


app.listen(3000, () => {
    console.log("Server Connected : 3000")
})