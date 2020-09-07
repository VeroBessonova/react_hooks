import React, { useState } from 'react';

function computeInitialCounter() {
  console.log('thinking')
  return Math.trunc(Math.random() * 20)
}

function UseState() {
  // const counterSate = useState(0)
  // console.log(counterSate[0]) state
  // console.log(counterSate[1]) func
  // const [counter, setCounter] = useState(0)
  const [counter, setCounter] = useState(() => computeInitialCounter())

  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now()
  })

  function increment() {
    setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
  }

  function decrement() {
    setCounter(prevCounter => prevCounter - 1)
  }

  function updateTitle() {
    setState(prevState => {
      return {
        ...prevState,
        title: 'new'
      }
    })
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Убрать</button>
      <button onClick={updateTitle}>Изменить название</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

export default UseState;
