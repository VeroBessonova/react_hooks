import React from 'react'
import Alert from "./Alert/Alert";
import Main from "./Main";
import {AlertProvider} from "./Alert/AlertContext";

const UseReducer = () => {

  return (
    <div>
      <AlertProvider>
        <h4>Example UseReducer</h4>
        <Alert />
        <Main toggle={() => {}}/>
      </AlertProvider>
    </div>
  )
}

export default UseReducer;