import React from 'react';
import classes from './Table.module.css';

export default function Table(props) {
  const { data, time } = props;
  const trimedData = [...data].splice(0, data.length - 2);
  const trimedTime = [...time].splice(0, time.length - 2);

  if (trimedData.length > 30) {
    trimedData.splice(30, trimedData.length);
  }

  const rows = trimedData.map((data, index) => {
    return (
      <thead key={Math.random()}>
        <tr>
          <td>{data}</td>
          <td>{trimedTime[index]}</td>
          <td>{index + 1}</td>
        </tr>
      </thead>
    );
  });

  return (
    <div>
      <table className={classes.customers}>
        <thead>
          <tr>
            <th>قیمت</th>
            <th>زمان</th>
            <th>ردیف</th>
          </tr>
        </thead>
        {rows}
      </table>
    </div>
  );
}
