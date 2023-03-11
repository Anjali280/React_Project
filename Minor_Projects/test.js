function ArrayAddition(arr) {
  const max = Math.max(...arr);

  function isSumPossibleUsingArrayEl(num, list) {
    if (num == 0) {
      return true;
    }
    if (!list) {
      return false;
    }
    const temp = list.filter((e) => {
      return e < num;
    });
    const haveAlreadyUsed = {};
    for (let i of temp) {
      const diff = num - i;
      haveAlreadyUsed[i] = true;
      if (temp.findIndex((e) => e == diff) > -1) {
        return true;
      }
      const t = isSumPossibleUsingArrayEl(
        diff,
        temp.filter((e) => {
          return !(i.toString() in haveAlreadyUsed) && e != i;
        })
      );
      if (t) return true;
    }
    return false;
  }
  return isSumPossibleUsingArrayEl(
    max,
    arr.filter((e) => e != max)
  );
}

// keep this function call here
console.log(ArrayAddition([3, 12, 8, -1, 5]));
