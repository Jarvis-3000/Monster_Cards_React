import React from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from "./components/searchBox/searchBox.component"
import "./App.css"


class Call extends React.Component {

  constructor(){
    super()
    this.state={
      persons:[],
      searchFieldValue:''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(users=>this.setState({persons:users}))
  }

  //to update the searchFieldValue 
  searchField=(e)=>{
    this.setState({searchFieldValue:e.target.value})
    // console.log("ok",this)
  }

  render(){
    //getting local persons
    const {persons,searchFieldValue}=this.state

    //filtering persons out
    const filteredPersons=persons.filter(person=>{
      return person.name.toLowerCase().includes(searchFieldValue.toLowerCase())
    })

    
    return(
      <div className="app">
        <h1 className="heading">Monster Cards</h1>  

        {/* don't use {this.searchField()} below because it will directly call the function  */}
        {/* without clicking on that */}
        <SearchBox placeholder="search monster..." handleChange={this.searchField}/>
        
        <CardList users={filteredPersons}/>
      </div>
    )
  }
}

export default Call
