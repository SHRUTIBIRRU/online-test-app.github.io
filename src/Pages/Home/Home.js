import React from 'react'
import "./Home.css"
import { useHistory } from "react-router";
import { Button, MenuItem, TextField } from "@material-ui/core"
import Categories, {} from '../../Data/categories';
import {useState} from 'react'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = ({name,setName,fetchQuestions}) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();

    
    
   const handleSubmit = () => {
       if (!category || !difficulty || !name) {
          setError(true) ;
          return;
       }
       else{
        setError(false) ; 
        fetchQuestions(category,difficulty)
        history.push("/test")
       }
        
    }
    
    return (
        <div className="content">
            <div className="settings">
                <span style= {{ fontSize: 40 }}> Enter Name & Start Test</span>
                <div className="settings__select">
                {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
                    <TextField id="textf"
                    label='Enter Your Name'
                   variant="outlined" 
                   onChange={(e)=> setName(e.target.value)}
                   
                    />
                    <TextField 
                    id="testf1"
                    select label="Select Catagory" 
                    variant="outlined"
                    onChange={(e)=> setCategory(e.target.value)}
                   value={category}>
                    
                        {
                        Categories.map((cat) => (
                             <MenuItem key={cat.category} value={cat.value}>
                                 {cat.category}
                             </MenuItem>
                        ))}
                       </TextField >
                       <TextField
                       id="textf2"
                       select 
                       label="Select Difficulty"
                       variant="outlined"
                       onChange={(e)=> setDifficulty(e.target.value)}
                   value={difficulty}>
                           
                           <MenuItem key="Easy" value="easy">
                                 Easy
                             </MenuItem>
                             <MenuItem key="Medium" value="medium">
                                 Medium
                             </MenuItem>
                             <MenuItem key="Hard" value="hard">
                                 Hard
                             </MenuItem>

                       </TextField>
                       <Button variant="contained" 
                       color="black" 
                       size="x-large"
                       onClick={handleSubmit}>
                           START TEST
                       </Button>
             


                </div>
            </div>
      <img src= "/a9.png" className="banner" alt="test img"/>
      
           
        </div>
    );
};

export default Home;
