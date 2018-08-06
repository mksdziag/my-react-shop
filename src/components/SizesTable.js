import React from 'react';

import './SizesTable.css';

const SizesTable = props => {
  const { sizes } = props;
  return (
    <div>
      <table className="table is-striped is-hoverable sizes-table">
        <thead>
          <tr className="is-uppercase">
            <th>size</th>
            <th>total</th>
            <th>bust</th>
            <th>hips</th>
            <th>sleeve</th>
            <th>waist</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map(size => {
            return (
              <tr key={size}>
                <td>{size}</td>
                <td>144</td>
                <td>92</td>
                <td>96</td>
                <td>58</td>
                <td>62</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SizesTable;
