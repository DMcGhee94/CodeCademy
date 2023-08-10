// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, dnaBase) => {
  return {
    specimenNum: num,
    dna: dnaBase,
    mutate() {
      let randBase = Math.floor(Math.random() * 15);
      let remainingDNA = dnaBase.filter(x => x !== this.dna[randBase])
      this.dna[randBase] = remainingDNA[Math.floor(Math.random() * remainingDNA.length)]
    },
    compareDNA(comparison) {
      let countSame = 0;

      for (let i = 0; i < comparison.dna.length; i++) {
        if (this.dna[i] === comparison.dna[i]) {
          countSame += 1;
        }
      }

      return `specimen #1 and specimen #2 have ${countSame / 15 * 100}% DNA in common.`
    },
    willLikelySurvive() {
      let survivalCount = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'C') {
          survivalCount += 1;
        }
      }

      return survivalCount / 15 * 100 ? true : false;
    }
  }
};

console.log(pAequorFactory(1, mockUpStrand()));
ex1 = pAequorFactory(1, mockUpStrand());
ex1.mutate();
console.log(ex1);

ex2 = pAequorFactory(2, mockUpStrand());
console.log(ex1.compareDNA(ex2));

console.log(ex1.willLikelySurvive());
console.log(ex2.willLikelySurvive());

let pAequorArray = [];
for (let i = 0; i < 30; i++) {
  pAequorArray.push(pAequorFactory(i, mockUpStrand()));
}

console.log(pAequorArray);