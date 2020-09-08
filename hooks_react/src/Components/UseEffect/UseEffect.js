import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0, y: 0
  })
  // console.log('component UseEffect')
  // useEffect(() => {
  //   console.log('render')
  // })

  useEffect(() => {
    console.log(`type change ${type}`)
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => {
      console.log('here you can delete listeners and unsubscribe')
    }
  }, [type])

  // useEffect(() => {
  //   console.log('componentDidMount')
  // }, [])

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('componentDidMount') // first
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <div>
      <h4>Ресурс: {type}</h4>

      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Посты</button>

      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  )
}

export default UseEffect;
