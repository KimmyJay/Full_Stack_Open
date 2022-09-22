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

const App = () => {
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

export default App