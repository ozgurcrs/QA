import React, { useEffect, useState } from 'react';
import "./styles/home.scss";
import Alert from './components/Alert/Alert'
import Question from './components/Question/Question'
import Lottie from 'react-lottie';
import axios from 'axios';
import { Result } from './interfaces/IDataType'
import Button from './components/Custom/Button'
import { defaultConfettiOptions, defaultFailOptions, defaultOptions } from './lotties/lottieConfig'


const App: React.FC = () => {

  const [data, setData] = useState<Result[]>([]);
  const [nextQuestion, setNextQuestion] = useState<number>(0);
  const [question, setQuestion] = useState<Result>();
  const [totalCorrect, setTotalCorrect] = useState<number>(0);
  const [successAnimation, setSuccessAnimation] = useState<boolean>(false);
  const [failAnimation, setFailAnimation] = useState<boolean>(false);


  const callback = (selectedAnswer: string, correctAnswer: string) => {
    if (correctAnswer === selectedAnswer) {
      setSuccessAnimation(true);
      setTimeout(() => {
        setSuccessAnimation(false);
        setNextQuestion((number => number + 1))
        setQuestion(data[nextQuestion]);
        setTotalCorrect(number => number + 1);
      }, 2500)
    }
    else {
      setFailAnimation(true);
      setTimeout(() => {
        setFailAnimation(false);
        setNextQuestion((number => number + 1))
        setQuestion(data[nextQuestion]);
      }, 2500)
    }
  }

  useEffect(() => {
    async function getQuestions() {
      await axios.get(process.env.REACT_APP_BASE_URL + "/api.php?amount=10&difficulty=easy&type=multiple").then(response => {
        setData(response.data.results);
        setQuestion(data[nextQuestion]);
      })
    }
    getQuestions();
  }, []);


  return (
    <>
      {
        data ? (
          <Question question={data[nextQuestion]} callback={callback} />
        ) : null
      }
      <Alert questionNumber={nextQuestion + 1} />

      {successAnimation ? <div className="animation-area">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div> : null}

      {
        failAnimation ? <div className="animation-area">
          <Lottie
            options={defaultFailOptions}
            height={500}
            width={500}
          />
        </div> : null
      }

      {
        nextQuestion > 9 ? <div className="gameover">
          <Lottie
            options={defaultConfettiOptions}
            height={700}
            width={350}
          />
          <div className="finish">
            <h5>
              True: <span>{totalCorrect}</span>
            </h5>
            <h5>
              False: <span className="false">{10 - totalCorrect}</span>
            </h5>
          </div>
          <Button textArea={"Try Again"} onClick={() => window.location.reload()} />
        </div> : null
      }

      <div className="iphone"></div>
    </>
  );
}


export default App;
