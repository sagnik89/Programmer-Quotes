import express from "express";
import axios from "axios";

const app = express();
const port = 3000;




app.get("/", async (req, res) => {

    const response = await axios.get("https://programming-quotesapi.vercel.app/api/random");
    const data = response.data;

    //
    res.status(200).render(`index.ejs`, {
        authorName: data.author, 
        quote: data.quote
    });
})



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})