const longestWordInAString = (s) => {
  s = s.split("");
  let holder = [];
  let word = "";
  let i = 0;

  while (i < s.length - 1) {
    if (!holder.includes(s[i])) {
      holder.push(s[i]);
      if (s[i] !== s[i + 1]) {
        word += s[i];
      }
    }

    i++;
  }

  //   for (let i = 0; i < s.length - 1; i++){
  //     if (!(holder.includes(s[i]))){
  //       holder.push(s[i])
  //       word += s[i]
  //     }
  //   }

  return { holder, word };
};

longestWordInAString("abcabcbb");
longestWordInAString("pwwkew");
