import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({ text }) => <div><h1>{text}</h1></div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if (props.all !== 0) {
  return (
    <table>
      <tbody>
      <tr>
        <td>Good</td>
        <td>{props.good}</td>
     </tr>
     <tr>
        <td>Neutral</td>
        <td>{props.neutral}</td>
     </tr>
     <tr>
        <td>Bad</td>
        <td>{props.bad}</td>
     </tr>
     <tr>
        <td>Average</td>
        <td>{props.average}</td>
     </tr>
     <tr>
        <td>Positive</td>
        <td>{props.positive}</td>
     </tr>
     </tbody>
    </table>
  )
}
  return <div>No feedback given</div>
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  let average = (good - bad) / all

  let positive = good / all

  return (
    <div>
      <Title text = 'Give feedback' />
      <Button text='Good' onClick={handleGood}/>
      <Button text='Neutral' onClick={handleNeutral}/>
      <Button text='Bad' onClick={handleBad}/>
      <Title text='Statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
