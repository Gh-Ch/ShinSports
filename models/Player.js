const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PlayerSchema = new Schema({
name: {
        type: String,
        required: true
},
age: {
    type: Number,
    required: true
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
    default: 'public\\players\\default.png',
    required: true,
},
careerStart: {
    type: Date,
},
birthDate: {
    type: Date,
},
category: {
    type: Schema.Types.ObjectId,
    ref: "categories"
  },
});
module.exports = Player = mongoose.model('players',PlayerSchema);

