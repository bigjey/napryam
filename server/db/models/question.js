const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionStatuses = ['New', 'Accepted', 'Rejected'];

const questionSchema = new Schema({
  text: {type: String, required: true},
  meaning: {type: String},
  status: {type: String, enum: questionStatuses, default: 'New'},
  deleted: {type: Boolean, default: true},
  notes: String
}, {
  collection: 'questions'
});

mongoose.model('Question', questionSchema);
