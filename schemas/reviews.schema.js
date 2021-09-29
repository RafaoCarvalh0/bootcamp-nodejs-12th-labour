import mongoose from "mongoose";

const Review = new mongoose.Schema(
    {
        nome: String,
        nota: Number,
        avaliacao: String
    }, { collection: "livroInfo" }
);

export default Review;