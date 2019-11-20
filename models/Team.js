const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const TeamSchema = new Schema({
coach: {
    type: String,
    require: true
},
president: {
    type: String,
    required: true,
},
foundationDate: {
    type: Date,
    default: Date.now
},
logo: {
    type: String,
    default: 'public\\teams\\default.png'
},
category: {
    type: Schema.Types.ObjectId,
    ref: "categories"
  },
});
module.exports = Team = mongoose.model('teams',TeamSchema);

