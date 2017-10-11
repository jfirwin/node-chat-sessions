var badWords = ['vacation', 'mark', 'the command tab']

module.exports = function(req, res, next) {
  while (badWords.find(word => req.body.text.includes(word))) {
    const badWord = badWords.find(word => req.body.text.includes(word));
    req.body.text = req.body.text.replace(badWord, "*".repeat(badWord.length));
  }
  next();
}
