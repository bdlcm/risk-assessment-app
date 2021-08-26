

export const vaccineComputation = (age, sex) => {
  if (sex == 'Male') {
    if (age >= 12) {
      return 'Astrazeneca';
    }
  }

  if (sex == 'Female') {
    if (age >= 12 && age <= 60) {
      return 'Pfizer/Biontech';
    }
    if (age < 60) {
      console.log('hit!');
      return 'Pfizer/Biontech or Astrazeneca';
    }
  } else {
    console.log('no hit!', age, sex);
  }
};
