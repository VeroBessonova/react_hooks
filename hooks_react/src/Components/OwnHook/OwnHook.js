import React, {useState, useEffect} from 'react';

function useLogger(value) {
  useEffect(() => {
    console.log('value changed: ', value)
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    value, clear
  }
}

function OwnHook() {
  // const [name, setName] = useState('')
  // const [lastName, setLastName] = useState('')

  // const changeHandler = event => {
  //   setName(event.target.value)
  // }
  const input = useInput('')
  const lastName = useInput('')

  useLogger(input.value)
  useLogger(lastName.value)

  const clearAllInputs = () => {
    input.clear()
    lastName.clear()
  }

  return (
    <div>
      {/*<input type="text" value={input.value} onChange={input.onChange}/>*/}
      <input type="text" {...input.bind}/>
      <button onClick={() => input.clear()}>Clear</button>
      <input type="text" {...lastName.bind}/>
      <button onClick={() => lastName.clear()}>Clear</button>
      {/*<input type="text" value={lastName} onChange={lastNameHandler}/>*/}
      <button onClick={clearAllInputs}>Clear all inputs</button>
      <hr />
      <h1>{input.value} {lastName.value}</h1>
      {/*<h1>{name} {lastName}</h1>*/}
    </div>
  )
}

export default OwnHook;