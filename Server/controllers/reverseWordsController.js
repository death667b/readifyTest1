const reverseWords = require('../utils/reverseWords');

exports.index = (req, res, next) => {
  const sentence = req.query.sentence || '';
  console.log(`Reverse Words(sentence) = ${sentence}`);
  
  const newSentence = reverseWords(sentence);

  res.json(newSentence);
}
