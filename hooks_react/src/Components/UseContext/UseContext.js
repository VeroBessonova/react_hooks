import React, { useState, useContext } from 'react'
import Alert from "../UseContext/Alert/Alert";
import Main from "../UseContext/Main";
import {AlertProvider} from "../UseContext/Alert/AlertContext";

const UseContext = () => {

  return (
    <div>
      <AlertProvider>
        <h4>Example UseContext</h4>
        <Alert />
        <Main toggle={() => {}}/>
      </AlertProvider>
    </div>
  )
}

export default UseContext;