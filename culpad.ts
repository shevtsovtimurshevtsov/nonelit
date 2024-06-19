const riyadIncome: { [key: string]: number } = {
  'salary': 1000,
  'bonus': 500,
  'others': 200
};

const key: keyof typeof riyadIncome = 'salary';
console.log(riyadIncome[key]);
