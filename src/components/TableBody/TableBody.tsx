import React from 'react';
import TableRow from "../TableRow/TableRow";

export interface TableBodyProps {
    searchValue: string
    filteredResults: Person[]
    people: Person[]
}

function TableBody({searchValue, filteredResults, people}: TableBodyProps) {
    const peopleToRender = searchValue.length ? filteredResults : people;

    return (
        <tbody>
        {peopleToRender.map((person: Person) => {
            const {id, name, address, work} = person;
            return <TableRow key={id} id={id} name={name} address={address} work={work}/>
        })}
        </tbody>
    );
}

export default TableBody;
