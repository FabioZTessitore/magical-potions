const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    playerId: { type: String, required: true },
    money: { type: Number, required: true, default: 50. },
});

module.exports = mongoose.model('Game', gameSchema);