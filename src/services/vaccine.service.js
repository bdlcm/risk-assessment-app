export const vaccineComputation = (age, sex) => {
  if (sex == 'Male') {
    if (age > 50) {
      return [
        {
          vaccine: 'Johnson & Johnson',
          case: [
            { risk: '7.8', se: 'Cerebral Thrombosis' },
            { risk: '1.3', se: 'General Thrombosis' },
            { risk: '13.6', se: 'Guillain Barre' },
          ],
        },

        {
          vaccine: 'Pfizer/Biontech',
          case: [{ risk: '9.7', se: 'Guillain Barre' }],
        },

        {
          vaccine: 'Moderna',
          case: [{ risk: '2', se: 'Guillain Barre' }],
        },
      ];
    }

    if (age <= 50) {
      return [
        {
          vaccine: 'Johnson & Johnson',
          case: [
            { risk: '7.8', se: 'Cerebral Thrombosis' },
            { risk: '1.3', se: 'General Thrombosis' },
            { risk: '9.7', se: 'Guillain Barre' },
          ],
        },

        {
          vaccine: 'Pfizer/Biontech',
          case: [{ risk: '1.3', se: 'Guillain Barre' }],
        },
        { vaccine: 'Moderna', case: [{ risk: '1.4', se: 'Guillain Barre' }] },
      ];
    }
  }

  if (sex == 'Female') {
    if (age <= 50) {
      return [
        {
          vaccine: 'Johnson & Johnson',
          case: [
            { risk: '16.5', se: 'Cerebral Thrombosis' },
            { risk: '1.9', se: 'General Thrombosis' },
            { risk: '6.8', se: 'Guillain Barre' },
          ],
        },

        {
          vaccine: 'Pfizer/Biontech',
          case: [{ risk: '1.8', se: 'Guillain Barre' }],
        },

        {
          vaccine: 'Moderna',
          case: [{ risk: '2.1', se: 'Guillain Barre' }],
        },
      ];
    }

    if (age > 50) {
      console.log('hit!');
      return [
        {
          vaccine: 'Johnson & Johnson',
          case: [
            { risk: '14.6', se: 'Cerebral Thrombosis' },
            { risk: '2', se: 'General Thrombosis' },
            { risk: '9.3', se: 'Guillain Barre' },
          ],
        },

        {
          vaccine: 'Pfizer/Biontech',
          case: [{ risk: '1.6', se: 'Guillain Barre' }],
        },

        {
          vaccine: 'Moderna',
          case: [{ risk: '2.5', se: 'Guillain Barre' }],
        },
      ];
    }
  } else {
    console.log('no hit!', age, sex);
  }
};
