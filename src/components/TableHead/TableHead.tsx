import React from 'react';

function TableHead() {

    return (
        <thead className='table-header'>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>
                Address
                <table id='table2'>
                    <tbody>
                    <tr>
                        <th>City</th>
                        <th>Street</th>
                    </tr>
                    </tbody>
                </table>
            </th>
            <th>
                Work
                <table id='table2'>
                    <tbody>
                    <tr>
                        <th>Title</th>
                        <th>City</th>
                    </tr>
                    </tbody>
                </table>
            </th>
        </tr>
        </thead>
    );
}

export default TableHead;
