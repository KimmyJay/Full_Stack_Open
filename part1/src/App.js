import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const DisplayStatistics = (props) => {
  const { good, neutral, bad } = props
  if (good + neutral + bad > 0) {
    return (
      <div>
        <table>
          <tr>
            <th>statistics</th>
          </tr>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(good - bad) / (good + neutral + bad)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{good / (good + neutral + bad) + "%"}</td>
          </tr>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h3>statistics</h3>
        No feedback given.
      </div>
    )
  }
}

const ShowFeedback = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = () => {
    setGood(good + 1)
  }
  const updateNeutral = () => {
    setNeutral(neutral + 1)
  }
  const updateBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h3>Give Feedback</h3>
      <Button handleClick={updateGood} text={"good"} />
      <Button handleClick={updateNeutral} text={"neutral"} />
      <Button handleClick={updateBad} text={"bad"} />
      <DisplayStatistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


const ShowAnecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)

  const selectRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <Button handleClick={selectRandomAnecdote} text={"next anecdote"} />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <ShowAnecdotes />
      <br />
      <ShowFeedback />
    </div>
  )
}

export default App