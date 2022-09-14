import React from 'react';

export interface InputProps {
    setSearchValue: (search: string) => void
    setFilteredResults: (filter:Person[]) => void
    people: Person[]
}

function Input({setSearchValue, setFilteredResults, people}: InputProps ) {
    const filterInput = (value: string) => {
        setSearchValue(value);
        if (value !== '') {
            const filteredData = people.filter((person) => {
                return flattenObjectValues(person)
                    .join('')
                    .toLowerCase()
                    .includes(value.toLowerCase());
            });
            setFilteredResults(value.length ? filteredData : people);
        }
    };

    const flattenObjectValues = (data: Person, values = []): string[] => {
        if (typeof data !== 'object') {
            return [...values, data];
        }
        return Object.values(data).flatMap((v) => flattenObjectValues(v, values));
    };

    return (
        <div className='form-container'>
            <form>
                <div className='label'>
                    <label htmlFor='search'>
                        Enter input to filter your desired data
                    </label>
                </div>
                <div className='input-container'>
                    <input
                        type='text'
                        id='search'
                        placeholder='Search People..'
                        title='Enter input to filter'
                        onChange={(e) => filterInput(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Input;
