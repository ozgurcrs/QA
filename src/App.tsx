import React, { useEffect, useState } from 'react';
import "./styles/home.scss";
import Alert from './components/Alert/Alert'
import Question from './components/Question/Question'
import Timer from './components/Timer/Timer'
import axios from 'axios';
import { Pokedex, Result } from './interfaces/IDataType'



const App: React.FC = () => {



  const [data, setData] = useState<Pokedex[]>([]);
  const [nextQuestion, setNextQuestion] = useState<number>(0);
  const [question, setQuestion] = useState<Result>();
  const [isData, setIsData] = useState<boolean>(false);
  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple").then(response => {
      setData(response.data);
      setQuestion(data[nextQuestion]);
      console.log(response.data);
    })
  }, []);


  return (
    <>
      <Question data={question} />
      <Timer />
      <Alert />
    </>



  );
}

export default App;
