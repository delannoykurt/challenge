class SmallestIntegerFinder {
  findSmallestInt(args) {
    let t = [];
    t = args.sort((a, b) => a - b);
    return t[0];
  }
}