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

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}


const Header = (props) => {
  return (
    <h1 className="header">
      {props.course.name}
    </h1>
  );
}

const Content = (props) => (
  <>
    {props.course.parts.map(part => (
      <div key={part.name} className='content'>
        {part.name} - {part.exercises}
      </div>
    ))}
  </>
); 

const Total = (props) => {
  return (
    <>
      {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
    </>
  );
}

export default App;