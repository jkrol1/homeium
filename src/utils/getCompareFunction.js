const getCompareFunction = (property, order) => {
  if (order === 'ascending') {
    const compare = (a, b) => {

      let comparison = 0;
      a[property] > b[property] ? comparison = 1 : comparison = -1;
      return comparison;
    }
    return compare;
  }
  const compare = (a, b) => {

    let comparison = 0;
    a[property] < b[property] ? comparison = 1 : comparison = -1;
    return comparison;
  }
  return compare;
};

export default getCompareFunction;