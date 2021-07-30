function createCSV(object: Object[]) {
  const csvHeader = Object.keys(object[0]).join(',');
  const csvBody = object
    .map((item) => {
      return Object.values(item)
        .map((value) => {
          return JSON.stringify(value);
        })
        .join(',');
    })
    .join('\n');

  console.log({ csvBody });

  return `${csvHeader}\n${csvBody}`;
}

export default createCSV;
