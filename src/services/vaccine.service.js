export const vaccineComputation = (age, sex) => {
  if (sex == 'Male') {
    if (age >= 12) {
      return [
        { vaccine: 'Johnson & Johnson', risk: '0.0003%' },
        { vaccine: 'Pfizer', risk: '0.01%' },
        { vaccine: 'Moderna', risk: '0.01%' },
      ];
    }
  }

  if (sex == 'Female') {
    if (age >= 12 && age <= 60) {
      return [
        { vaccine: 'Johnson & Johnson', risk: '0.3%' },
        { vaccine: 'Pfizer', risk: '0.0001%' },
        { vaccine: 'Moderna', risk: '0.00001%' },
      ];
    }
    if (age < 60) {
      console.log('hit!');
      return [
        { vaccine: 'Johnson & Johnson', risk: '0.00003%' },
        { vaccine: 'Pfizer', risk: '0.0001%' },
        { vaccine: 'Moderna', risk: '0.00001%' },
      ];
    }
  } else {
    console.log('no hit!', age, sex);
  }
};
