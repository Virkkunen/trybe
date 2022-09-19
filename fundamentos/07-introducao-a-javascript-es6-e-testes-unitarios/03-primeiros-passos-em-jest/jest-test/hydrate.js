function hydrate(str) {
  // direto do playground functions
  const arr = str.replace(/\D/gi, ' ').split(' ').filter(Number).map(Number);
  let drinks = 0;
  
  for (let i of arr) {
    drinks += i;
  }

  return drinks === 1 ? `${drinks} copo de água` : `${drinks} copos de água`
}

module.exports = hydrate;