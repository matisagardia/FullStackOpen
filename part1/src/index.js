import React from 'react';
import ReactDOM from 'react-dom/client';


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part1 = (props) => {
    return (
      <div>
      <p>Course 1: {props.part1}</p>
      <p>Number of exercises: {props.exercises1}</p>
      </div>
    )
}

const Part2 = (props) => {
  return (
    <div>
      <p>Course 2: {props.part2}</p>
      <p>Number of exercises: {props.exercises2}</p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
      <p>Course 3: {props.part3}</p>
      <p>Number of exercises: {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total of exercises: {props.total}</p>
    </div>
  )
}


const Content = () => {

  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]

  return (
    <div>
      <Part1 part1 = {parts[0].name} exercises1 = {parts[0].exercises} />
      <Part2 part2 = {parts[1].name} exercises2 = {parts[1].exercises} />
      <Part3 part3 = {parts[2].name} exercises3 = {parts[2].exercises} />
    </div>
  )
}

const App = () => {

  const course = {
  name: 'Half Stack application development',
  parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]
  }
  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

  return (
    <div>
      <Header course = {course.name} />
      <Content />
      <Total total = {total} />
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
