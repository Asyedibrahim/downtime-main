import mongoose from "mongoose";

const websiteSchema = new mongoose.Schema({
    url: {
        type: String,
        unique: true,
    },
}, { timestamps: true });

const Website = mongoose.model('Website', websiteSchema);

export default Website;