const lastWordLength = str => {
  if (str.length == 0) return 0;

  let lenOfLastWord = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str.charAt(i) != " ") lenOfLastWord++;
    else if (lenOfLastWord == 0) continue;
    else break;
  }
  return lenOfLastWord;
};
