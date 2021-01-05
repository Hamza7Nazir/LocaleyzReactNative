export function TrimDescription(desc) {
  let second = [];
  let sub = desc.substr(0, 3);
  console.log(sub);

  if (sub === '<p>') {
    for (let i = 0; i < desc.length - 7; i++) {
      second[i] = desc[i + 3];
    }
    return second;
  }
  return desc;
}
