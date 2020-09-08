import React, { useState, useContext } from 'react'
import Alert from "./Alert/Alert";
import Main from "./Main";
import {AlertProvider} from "./Alert/AlertContext";

const UseContext = () => (
  <AlertProvider>
    <h4>Example UseContext</h4>
    <Alert />
    <Main toggle={() => {}}/>
  </AlertProvider>
)



export default UseContext;