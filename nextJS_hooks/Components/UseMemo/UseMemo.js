import React, { useState, useEffect, useMemo } from 'react'

function complexCompute(num) {
  console.log('complexCompute')
  let i = 0
  while (i < 1000000000 ) i++
  return num * 2
}

const UseMemo = () => {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)
  const computed = useMemo(() => {
    complexCompute(number)
  }, [number])

  const  styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored])

  useEffect(() => {
    console.log('styles changed')
  }, [styles])

  return (
    <div>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
      <button onClick={() => setColored(prev => !prev)}>Изменить</button>
    </div>
  )
}

export default UseMemo;