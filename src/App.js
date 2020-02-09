import React, { Component } from 'react';
import restaurants from './restaurants.json';

import { CardList }  from './components/list/list';
import { SearchBox } from './components/search/search';
import { Button } from './components/search/button';


import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      data: restaurants.restaurants,
      searchField:'',
      sortType:'',
      isSorted: false,
      isAsc: true
    }
  }

  handleChange = (e) =>{
    this.setState({ searchField: e.target.value, isSorted:false});
  }

  handleClick = (e) =>{
    e.preventDefault();
    if(e.target.value === 'asc'){
      this.setState({ isAsc: true, isSorted:true});
    } else if(e.target.value === 'des'){
      this.setState({ isAsc: false, isSorted:true});
    } else{
      this.setState({isSorted:false})
    }
  }

  render(){
    const { data, searchField, isAsc, } = this.state;
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(searchField.toLowerCase()) || item.tags.some(tag => {
       return tag.toLowerCase().includes(searchField.toLowerCase())})
    );

    const sortedData = data.sort((a, b) => {
     return (isAsc === true) ? ( 
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())) 
         : (
        b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
      });

  return (
    <div className="App">
      <div className="search-box">
      <SearchBox 
        placeholder='Search by name ' 
        handleChange = {this.handleChange}
      />
      <SearchBox 
        placeholder='Search by keyword e.g Pizza' 
        handleChange = {this.handleChange}
      />
      <Button name="fa fa-sort-up" handleClick={this.handleClick} value={'asc'} />
      <Button name="fa fa-sort-down" handleClick={this.handleClick} value={'des'} />
      </div>
      {this.state.isSorted ? (<CardList data={sortedData}/>) 
      : (<CardList 
          data={filteredData } 
          />)}
      </div>
    );
  }
}

export default App;
