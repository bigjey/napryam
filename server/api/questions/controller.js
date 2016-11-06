const Question = require('mongoose').model('Question');

module.exports.add = (req, res) => {
  Question.create(req.body)
    .then(question => res.json({success: true, question}))
    .catch(err => console.log(err));
}

module.exports.getAll = (req, res) => {
  Question.find({}).exec()
    .then(questions => res.json({success: true, questions}))
    .catch(err => console.log(err));
}

module.exports.removeOne = (req, res) => {
  Question.findByIdAndRemove(req.params.id).exec()
    .then(() => res.json({success: true}))
    .catch(err => console.log(err));
}
