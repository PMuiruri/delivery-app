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
      address:[],
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
   /* getAddress = (e) =>{
    let item = e;
    console.log(item);
      fetch(`https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${item[1]}%2C${item[0]}%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=EgJds5TXQk9olqJ7xETeBjSrMGltutSn-CfdATn4-QQ`)
      .then(response => response.json())
      .then(result => {
        this.setState({address:result.Response.View[0].Result[0].Location.Address.Label})
        console.log(this.state.address)
      })
      .catch(error => console.log(error)); 
  }  */
 /*  componentDidMount(){
    this.state.data.map((item,i) =>{
      return this.getAddress(item.location)
    })} */

  render(){
    const { data, searchField, isAsc } = this.state;
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(searchField.toLowerCase()) || item.tags.some(tag => {
       return tag.toLowerCase().includes(searchField.toLowerCase())})
    );
 
   /*  const address = data.map(item =>{
      fetch(`https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${item.location[1]}%2C${item.location[0]}%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=EgJds5TXQk9olqJ7xETeBjSrMGltutSn-CfdATn4-QQ`)
      .then(response => response.json())
      .then(result => {
        address.push(result.Response.View[0].Result[0].Location.Address.Label)
        //JSON.stringify(result.Response.View[0].Result[0].Location.Address.Label)
        //console.log(result.Response.View[0].Result[0].Location.Address.Label)
        //JSON.stringify(result.Response.View[0].Result[0].Location.Address.Label);
         //return result;
      })
    }); */
    
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
        placeholder='Search' 
        handleChange = {this.handleChange}
      />
      <Button name="Ascending" handleClick={this.handleClick} value={'asc'} />
      <Button name="Descending" handleClick={this.handleClick} value={'des'} />
      </div>
      {this.state.isSorted ? (<CardList data={sortedData}/>) 
      : (<CardList 
          data={filteredData} 
          address={this.state.address} 
          handleChange={(e) => this.getAddress(e)}/>)}
      </div>
    );
  }
}

export default App;
