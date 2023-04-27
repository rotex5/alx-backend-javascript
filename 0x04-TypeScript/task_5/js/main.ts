interface MajorCredits {
  credits: number;
  brand?: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
  return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  return subject1.credits + subject2.credits;
}

/*
const Maths = { credits: 5 } as MajorCredits;
const English = { credits: 1 } as MinorCredits;
const Geography = { credits: 5 } as MajorCredits;
const TD = { credits: 1 } as MinorCredits; 

console.log(sumMajorCredits(Maths, Geography));
console.log(sumMinorCredits(English, TD));
*/
