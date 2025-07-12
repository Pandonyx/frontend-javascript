interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

function makeMajorCredits(credits: number): MajorCredits {
  return { credits, brand: 'major' };
}
function makeMinorCredits(credits: number): MinorCredits {
  return { credits, brand: 'minor' };
}

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return makeMajorCredits(subject1.credits + subject2.credits);
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return makeMinorCredits(subject1.credits + subject2.credits);
}

const major1 = makeMajorCredits(3);
const major2 = makeMajorCredits(4);
console.log(sumMajorCredits(major1, major2));

const minor1 = makeMinorCredits(2);
const minor2 = makeMinorCredits(1);
console.log(sumMinorCredits(minor1, minor2));
