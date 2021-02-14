const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [
            2,
            "Name must contain at least 2 characters"
        ]
    },
    preferredPosition: String,
    game1Status: String,
    game2Status: String,
    game3Status: String

}, {timestamps: true});

module.exports.Player = mongoose.model("Player", PlayerSchema)