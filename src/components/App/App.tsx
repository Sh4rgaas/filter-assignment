import { useState, useEffect } from 'react';

import './App.css';
import { data } from '../../data';
import TableBody from "../TableBody/TableBody";
import Input from "../Input/Input";
import TableHead from "../TableHead/TableHead";

function App() {
  const [people, setPeople] = useState<Person[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredResults, setFilteredResults] = useState<Person[]>([]);

  const fetchPeople = (): void => {
    setPeople(data);
  };

  useEffect(() => {
    fetchPeople();
  }, []);


  return (
    <div className='App'>
      <div className='title'>
        <h1>People Searcher</h1>
      </div>
      <Input setSearchValue={setSearchValue} setFilteredResults={setFilteredResults} people={people}/>
      <div className='results-container'>
        <table id="main-table">
          <TableHead/>
          <TableBody searchValue={searchValue} filteredResults={filteredResults} people={people}/>
        </table>
      </div>
    </div>
  );
}

export default App;
