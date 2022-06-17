// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
let pAeq = mockUpStrand();
function pAeqourFactory(specimenNum, dna) {
  return {spiecimenNum: specimenNum, dna: dna,
  mutate() {
    for (let i = 0; i < this.dna.length; i++) {
      if (this.dna[i] !== returnRandBase()) {
        this.dna[i] = returnRandBase()
    }
    }
      return this.dna
  },
 compareDNA(pAeqour){
  let similarCount = 0;
  for (let i =0; i < pAeqour.dna.length; i++){
      if (pAeqour.dna[i] === this.dna[i]) {
        similarCount += 1
      }
  }
  let similarity = ((similarCount / 15 )  * 100).toFixed(2);
  return `specimen #1 and specimen #2 have 
  ${similarity}% DNA in common `
}, willLikelySurvive() {
  let survival = this.dna.reduce((total,x) => x === "G" || x === "C"? total++: total, 0)

  if (((survival / 15) * 100).toFixed() >= 60) {
    return true
  } else {
    return false
  }
  }
}
}
let pAeq1 = mockUpStrand()
let specie = pAeqourFactory(55, pAeq);
let specie1 = pAeqourFactory(56, pAeq1);
console.log(specie.dna)
console.log(specie1.dna)
console.log(specie1.compareDNA(specie))
console.log(specie.willLikelySurvive())






