import React from 'react';
import { useAlert } from "./AlertContext";

export default function Alert() {
  const alert = useAlert()

  // if(!alert) return null
  if(!alert.visible) return null

  return (
    <>
      <div style={{ color: 'darkred', margin: '5px' }} onClick={alert.toggle}>
       This is an important message
      </div>
    </>
  )
}