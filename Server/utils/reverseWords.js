module.exports = reverseWords = sentence => {
  const reversedSentenceArray = sentence.split(' ').map(word => {
    let newWord = '';

    // Reverse each word
    for (let len = word.length-1; len >= 0; len--) {
      newWord = newWord + word[len];
    }

    return newWord;
  });

  return reversedSentenceArray.join(' ');
}