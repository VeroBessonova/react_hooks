import React, { useState, useCallback } from 'react'
import ItemsList from "./ItemsList";

const UseCallback = () => {
  const [count, setCount] = useState(1)
  const [colored, setColored] = useState(false)

  const  styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItemsFromAPI = useCallback((value) => {
    return new Array(count).fill('').map((_, i) => `Элемент ${i + value}`)
  },[count])

  return (
    <div>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Добавить</button>
      <button onClick={() => setColored(prev => !prev)}>Изменить</button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  )
}

export default UseCallback;