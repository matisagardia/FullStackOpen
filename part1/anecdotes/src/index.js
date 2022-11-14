import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => <h1>Anecdote of the day</h1>

const Subtitle = ({ max, amount }) => 
  <div>
    <h2>Anecdote with most votes:</h2>
      <h3>{max}</h3>
      <p>With {amount} votes.</p>
  </div>

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Votes = ({ votes }) => <div>Has {votes} votes</div>

const Button = ({ onClick, text }) => (
  <div>
 <button onClick={onClick}>
  {text}
 </button>
 <br />
 <br />
 </div>
)


const App = (props) => {

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  const randomize = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const addVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const amount = Math.max(...points)

  const maxAnecdote = anecdotes[points.indexOf(amount)]
  

  return (
    <div>
      <Header />
      {props.anecdotes[selected]} <br /> <br />
      <Button onClick={randomize} text='Next Anecdote' /> 
      <Button onClick={addVote} text='Vote for this Anecdote' />
      <Votes votes={points[selected]} />
      <Subtitle max={maxAnecdote} amount={amount} />
    </div>
  )

}




ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)