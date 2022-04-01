// This was a coding test by amazon

describe('process date', () => {
  it('converts date string to YYYY-MM-DD format', () => {
    expect(processDates([
        '1st Apr 2022', '4th Aug 2001',
        '1st Mar 1974', '22nd Jan 2013',
        '7th Apr 1904'
      ]))
      .toEqual([
        '2022-04-01', '2001-08-04',
        '1974-03-01', '2013-01-22',
        '1904-04-07'
      ]);
  });
});

const months = [
  'Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec'
];

const processDates = (dates) => {
  let processedDate = [];
  let month, day, year;

  for (let date of dates) {
    date = date.split(' ');

    for (d of date) {
      day = processDay(date[0]);
      month = processMonth(date[1]);
      year = date[2];
    }
    processedDate.push(year + '-' + month + '-' + day);
  }
  return processedDate;
};

const addZero = (value) => {
  value = value.toString().split('');
  if (value.length < 2) return '0' + value;
  else return value.join('');
};

const processMonth = (month) => {
  month = months.indexOf(month) + 1;
  return addZero(month);
};

const processDay = (day) => {
  let value = [];
  for (let d of day) {
    d = parseInt(d);
    if (d) value += d;
  }
  return addZero(value);
};