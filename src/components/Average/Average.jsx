import React from 'react';

export default function Average(props) {
  const { data, seconds } = props;

  const trimedData = [...data].splice(0, data.length - 2);
  const trimedSeconds = [...seconds].splice(0, seconds.length - 2);

  const avgArray = [];
  let average = <div>داده کافی وجود ندارد</div>;

  const getAverage = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

  if (trimedData.length) {
    let avg = 0;
    let newData = [];

    trimedData.forEach(element => {
      newData = [...newData, element.replace('#', '')];
    });

    trimedSeconds.forEach((element, index) => {
      if (seconds[0] - element <= 60) {
        avgArray.push(parseFloat(newData[index]));
      }
    });

    avg = getAverage(avgArray).toFixed(1);
    average = <div>{avg}#</div>;
  }

  return (
    <div>
      <h1> : میانگین دقیقه اول</h1>
      <h1>{average}</h1>
    </div>
  );
}
