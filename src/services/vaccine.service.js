export const vaccineComputation = (age, sex) => {
  if (sex == 'Male') {
    if (age >= 12) {
      return [
        { vaccine: 'Johnson & Johnson', risk: '7.8' },
        { vaccine: 'Pfizer', risk: '0.6' },
        { vaccine: 'Moderna', risk: '0.85' },
      ];
    }
  }

  if (sex == 'Female') {
    if (age <= 50) {
      return [
        { vaccine: 'Johnson & Johnson', risk: '16.5' },
        { vaccine: 'Pfizer', risk: '0.6' },
        { vaccine: 'Moderna', risk: '0.95' },
      ];
    }
    if (age > 50) {
      console.log('hit!');
      return [
        { vaccine: 'Johnson & Johnson', risk: '14.6' },
        { vaccine: 'Pfizer', risk: '0.96' },
        { vaccine: 'Moderna', risk: '0.8' },
      ];
    }
  } else {
    console.log('no hit!', age, sex);
  }
};
