import React, { useState, useEffect, useRef } from 'react'

// let renderCount = 1 // not a very good approach

const UseRef = () => {
  // const [renderCount, setRenderCount] = useState(1)
  // useEffect(() => {
  //   setRenderCount(prev => prev + 1)
  // })
  //
  const [value, setValue] = useState('initial')
  // useEffect(() => {
  //   renderCount++
  // })

  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++
    // console.log(inputRef.current.value)
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Прошлое состояние: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
      <button onClick={focus}>Фокус</button>
    </div>
  )
}

export default UseRef;