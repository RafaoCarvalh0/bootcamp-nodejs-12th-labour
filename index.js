import express from "express";
import clienteRouter from "./routes/clientes.route.js";
import autorRouter from "./routes/autor.route.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/cliente", clienteRouter);
app.use("/autor", autorRouter);

app.use((err, req, res, next)=>{
    res.status(400).send({ error: err.message });
})

app.listen(8000, async  () => {
    try {
        console.log("server online");
    } catch (err) {
        throw new Error;
    }
});