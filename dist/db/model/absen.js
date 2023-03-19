import mongoose from "mongoose";
export const model = mongoose.model("AbsenQR", new mongoose.Schema({
    nama: {
        type: String,
        required: false,
    },
    kelas: {
        type: String,
        required: true,
    },
    absenId: {
        type: String,
        require: true,
    },
    absen: {
        type: [Date],
        required: false,
        default: [],
    }
}));
