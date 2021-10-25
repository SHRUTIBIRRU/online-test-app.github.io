import { CircularProgress } from "@material-ui/core"
import React from 'react'
import { useEffect,useState } from "react";
import "./Test.css"
import Question from "../../components/Questions/Questions"

const Test = ( {name,score,questions,setQuestions,setScore}) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    useEffect(() => {
        setOptions(
          questions &&
            handleShuffle([
              questions[currQues]?.correct_answer,
              ...questions[currQues]?.incorrect_answers,
            ])
        );
      }, [currQues, questions]);
    
      console.log(questions);
    
      const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
      };
    
      return (
        <div className="test">
          <span className="subtitle">Welcome, {name}</span>
    
          {questions ? (
            <>
              <div className="testInfo">
                <span>{questions[currQues].category}</span>
                <span>
                  {/* {questions[currQues].difficulty} */}
                  Score : {score}
                </span>
              </div>
              <Question
                currQues={currQues}
                setCurrQues={setCurrQues}
                questions={questions}
                options={options}
                correct={questions[currQues]?.correct_answer}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            </>
          ) : (
            <CircularProgress
              style={{ margin: 100 }}
              color="inherit"
              size={150}
              thickness={1}
            />
          )}
        </div>
      );
    };
export default Test
