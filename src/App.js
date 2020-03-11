import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const products=[
  {name:'PhotoShop',price:'$190'},
  {name:'Illustrator',price:'$180'},
  {name:'PDF reader',price:'$170'}
]
const addproducts=['Nazrul','Shakib','Koli','Anuska','Monali','kajol','Deepika']
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am a React Application Developer</h1>
        <Player name="Shakib Al Hasan" job="Crickter"></Player>
        <Player name="Mashrafi" job="Crickter"></Player>
        <Player name="Taskin" job="Crickter"></Player>
        <Product elements={products[0]}></Product>
        <Product elements={products[1]}></Product>
        <Product elements={products[2]}></Product>
        <ul>
            {
              addproducts.map(product=><li style={{}}>{product}</li>)
            }
        </ul>
        
          {
            products.map(items=><Product elements={items}></Product>)
          }
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}
function Player(props){
  const playerStyle={
    border:'2px solid red',//external css
    margin:'5px'
  }
  return(
    //<div style={playerStyle}>//for external css
    <div style={{border:'1px solid red',width:'400px',margin:'10px',padding:'5px'}}>
      <h1>{props.name}</h1>
  <h3>{ props.job}</h3>
    </div>
  )
}
function Product(props){
  const productStyle={
    border: '1px solid red',
    borderRadius:'5px', backgroundColor:'transparent',
    height:'300px',width:'300px',float:'left',padding:'15px'
    ,margin:'5px'
  }
 const {name,price}=props.elements;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button style={{height:'50px',
      width:'180px',fontSize:'20px'
      ,borderRadius:'5px',
      backgroundColor:'#007ACC',
      border:'none'}}>Buy Now</button>
    </div>
  )
}
//state
function Counter(){
  const [count,setCount] =useState(0);
  //const handleIncrease=()=>setCount(count + 1);
  return(
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={()=>setCount(count - 1)}>Decrease</button>
      <button onClick={()=>setCount( count + 1)}>Increase</button>
    </div>
  )
}
//Data load
function Users(){
  const [user,setUser]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUser(data))
  })
  return(
    <div>
      <h3>Users:{user.length}</h3>
      <ul>
        {
          user.map(userList=><li>{userList.name}</li>)
          
        }
        <br/>
        {
          user.map(mail=><li>{mail.email}</li>)
        }
        <br/>
        {
          user.map(phn=><li>{phn.phone}</li>)
        }
        <br/>
        {
          user.map(companyName=><li>{companyName.company.name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
