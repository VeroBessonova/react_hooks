import React from 'react';
// import {useAlertToggle} from "./Alert/AlertContext";
import {useAlert} from "./Alert/AlertContext";

export default function Main() {
  // const toggle = useAlertToggle()
  const {toggle} = useAlert()
  return (
    <>
      <h1>Example useContext</h1>
      <button onClick={toggle}>Показать alert</button>
    </>
  )
}