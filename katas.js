function digitize(n) {
  let s = n.toString();
  s.split('').join(',');
  let result = s.split('').reverse();
  let r = result.map(v => Number(v));
  return r;
}