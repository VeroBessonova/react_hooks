import React from 'react';
import { useAlert } from "./AlertContext";

export default function Alert() {
  const alert = useAlert()

  if(!alert.visible) return null

  return (
    <>
      <div style={{ color: 'darkred', margin: '5px' }} onClick={alert.hide}>
       {/*This is an important message*/}
        {alert.text}
      </div>
    </>
  )
}