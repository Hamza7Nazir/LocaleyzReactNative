export function getImage(obj, id) {
  console.log('inside func', obj);
  console.log('query id in func', id);
  console.log('Obj length', obj.length);

  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id === id) {
      return obj[i].squareImage;
    }
  }

  let str = '../assets/images/imgNot.jpg';
  return str;
}
