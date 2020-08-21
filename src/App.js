import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person=['Amit Sadh','Irrfan','Manoz'];
  var movie=['Breath','Hindi Medium','1971'];
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <Person name={person[0]} bestFilm={movie[0]}></Person>
        <Person name={person[1]} bestFilm={movie[1]}></Person>
        <Person name={person[2]} bestFilm={movie[2]}></Person>
      </header>
    </div>
  );
}

function Person(props){
  var personStyle={
    border:'2px solid gold',
    width:'400px',
    margin:'20px'
  }
  return(
    <div style={personStyle}>
      <h1>{props.name}</h1>
      <h3>{props.bestFilm}</h3>
    </div>
  );
}

function Counter(){

  const [count,setCount] =useState(10);

  // const handleCount=()=>{
  //   const newCount=count+1;
  //   setCount(newCount);
  // }

  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  );
}

function Users(){
  const[users,setUsers]=useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])

  return(
    <div>
      <h3>Dynamic User:{users.length} </h3>
      <ul>
        {
          users.map(user=><li>{user.name}{user.phone}</li>)
        }
      </ul>
    </div>
  );

}


export default App;
