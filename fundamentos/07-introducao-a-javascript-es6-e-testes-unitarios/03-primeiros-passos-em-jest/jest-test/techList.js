function techList(arr, name) {
  if (arr.length === 0) return 'Vazio!';

  const orderedArr = arr.sort();
  const techs = [];

  for (let i of orderedArr) {
    techs.push({
      tech: i,
      name: name
    });
  }

  return techs;
}

module.exports = techList;