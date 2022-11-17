function doubleChar(str) {
  let s = [...str];
  s = s.map(v => v+v);
  return s.join('');
}