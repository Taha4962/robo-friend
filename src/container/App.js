import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import './../container/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots : [],
      searchField: '',
    }

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}))
  }

  onSearchChange = (event) =>{
    console.log(event.target.value);
    this.setState({searchField: event.target.value})
  }


  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())  
    })
    if(this.state.robots.length === 0) {
      return <h1>LOADING</h1>
    }
    else {
      return (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={this.state.onSearchChange} />
          <Scroll>
            <CardList robots ={filteredRobots}/>
          </Scroll>
        </div>
      )
    }
     
  }
    
}


export default App;
