import mongoose from "mongoose";
import Review from "./reviews.schema.js";

const Livro = new mongoose.Schema(
    {
        livroId: Number,
        descricao: String,
        paginas: Number,
        editora: String,
        avaliacoes: [Review]
    }, { collection: "livroInfo" }
);

export default Livro;