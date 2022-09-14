import React from 'react';

function TableRow({ id, work, name, address }: Person) {
  return (
    <tr id='row-data'>
      <td id='id-column'>{id}</td>
      <td>{name}</td>
      <td>
        <table id='inner-table'>
          <tbody>
            <tr>
              <td>{address.city}</td>
              <td>{address.street}</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table id='inner-table'>
          <tbody>
            <tr>
              <td>{work.name}</td>
              <td>{work.city}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

export default TableRow;
