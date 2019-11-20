const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PlayerSchema = new Schema({
age: {
    type: Number,
    require: true
},
weight: {
    type: Number,
    required: true,
},
height: {
    type: Number,
    required: true,
},
photo: {
    type: String,
    default: 'public\\players\\default.png'
},
careerStart: {
    type: Date,
    default: Date.now
},
birthDate: {
    type: Date,
    default: Date.now
},
category: {
    type: Schema.Types.ObjectId,
    ref: "categories"
  },
});
module.exports = Player = mongoose.model('players',PlayerSchema);

