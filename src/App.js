import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';

function App() {
  const nayoks = ['Anwar','bappi','Jafor', 'Alomgir','Salman Shah'];
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premier Elemenst', price: '$249.99'}
  ]
  // const productNames = products.map(product => product.name);
  // console.log(productNames);
  // const nayokNames = nayoks.map(nayok => nayok);
  // console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
        </ul>
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        
        {
          products.map(product =><Product product={product}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person></Person>
        {/* <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="dorshok"></Person> */}
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => {
  //   // const newCount = count+1;
  //   // setCount(newCount);
  //   setCount(count+1);
  // };

  // const handleIncrease = () =>  setCount(count+1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={() => setCount(count-1)}>Decrease</button> */}
      <button onMouseMove={() => setCount(count-1)}>Decrease</button>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onClick={ () => setCount(count+1) }>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  //sideeffect
  useEffect(()=>{
    // console.log('Calling Effect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name+" "+user.phone}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height: '200px',
    width: '400px',
    float:'left'
  }
  const {name, price} = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h4>Name: {name}</h4>
      <h5>Price: {price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  return (
    <div style={{border:'2px solid gold', width: '400px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job} </p>
    </div>
  )
}
export default App;
