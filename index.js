import express from "express";
import proprietarioRouter from "./routes/proprietario.route.js";
import animalRouter from "./routes/animal.route.js";
import servicoRouter from "./routes/servico.route.js";
import postRouter from "./routes/post.route.js";
import comentarioRouter from "./routes/comentario.route.js";
import cors from "cors";

//winston config
const { combine, timestamp, label, printf} = winston.format;
const myFormat = printf(( { level, message, label, timestamp })=> {
    return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "12tg-labour.log"})
    ],
    format: combine(
        label({ label: "12tg-labour" }),
        timestamp(),
        myFormat
    )
});
//winston config (end)

const app = express();
app.use(express.json());
app.use(cors());
app.use("/proprietario", proprietarioRouter);
app.use("/animal", animalRouter);
app.use("/servico", servicoRouter);
app.use("/post", postRouter);
app.use("/comentario", comentarioRouter);


app.use((err, req, res, next)=>{
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
})

app.listen(8000, ()=> console.log("server online"));