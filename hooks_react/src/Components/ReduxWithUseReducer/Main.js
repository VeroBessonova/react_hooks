import React from 'react';
import {useAlert} from "./Alert/AlertContext";

export default function Main() {
  const {show} = useAlert()
  return (
    <>
      <h1>Example UseReducer</h1>
      <button onClick={() => show('text from Main')}>Показать alert</button>
    </>
  )
}