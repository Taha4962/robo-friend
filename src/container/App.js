import React, { useState, useEffect } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import './../container/App.css';


const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots : [],
  //     searchField: '',
  //   }

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  // }
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({robots: users}))
  // }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users))
  }, [])

  const onSearchChange = (event) =>{
    setSearchField(event.target.value);
  }



  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())  
  })
  if(!robots.length) {
    return <h1 className='tc'>LOADING</h1>
  }
  else {
    return (
      <div className='tc'>
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots ={filteredRobots}/>
        </Scroll>
      </div>
    )
  }
  
}


export default App;
