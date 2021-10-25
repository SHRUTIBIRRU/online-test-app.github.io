import axios from "axios"
import './App.css';
import { BrowserRouter ,Switch ,Route } from 'react-router-dom';
import Header from './components/Header'
import React from 'react'
import Footer from './components/Footer';
import Home from "./Pages/Home/Home";
import Test from "./Pages/Tests/Test";
import Result from "./Pages/Result/Result"
import { useState } from "react";


function App() {
const [name, setName] = useState("")
const [questions, setQuestions] = useState();
const [score, setScore] = useState(0)

const fetchQuestions =async (category="",difficulty="") => {

  const {data}=await axios.get( `https://opentdb.com/api.php?amount=10${
    category && `&category=${category}`
  }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
  );
  setQuestions(data.results);
}

 return (<BrowserRouter> <div className="app"> 
   <Header />
<Switch>
<Route path='/' exact> 
<Home name={name} 
setName={setName}
fetchQuestions={fetchQuestions}/>
</Route>
<Route path='/test' exact> 
<Test 
name={name}
questions={questions}
score={score}
setScore={setScore}
setQuestions={setQuestions}/>
</Route>
<Route path='/result' exact> 
<Result name={name} score={score}  />
</Route>
</Switch>
  </div>
  <Footer/>
   </BrowserRouter>
    
    )
  
 
}

export default App;

