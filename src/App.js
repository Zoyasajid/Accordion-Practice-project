import React,{useState} from 'react';
import './App.css';
import Title from './compC/Title';
import Questions from './compC/Question'

function App (){
  const [data,setdata]=useState(Questions);
  // const{id}=item

  return <div>
  {
  
    data.map((item)=>{
      // return (item.question)
      return<Title question={item.question} answer={item.answer}/>
    })
  }    
  </div>
}
export default App;
