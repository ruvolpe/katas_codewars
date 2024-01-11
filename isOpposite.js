function isOpposite(s1, s2) {
  let isTrue = true;
  if (s1.length === s2.length && s1.length > 0) {
    for (let i = 0; i < s1.length; i++) {
      if (s1[i].toLowerCase === s2[i].toLowerCase) {
        if (s1[i] === s2[i]) {
          return false;
        }
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return isTrue;
}
