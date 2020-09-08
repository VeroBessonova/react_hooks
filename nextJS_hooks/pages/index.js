import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import UseState from '../Components/UseState/UseState';
import UseEffect from '../Components/UseEffect/UseEffect';
import UseRef from '../Components/UseRef/UseRef';
import UseMemo from '../Components/UseMemo/UseMemo';
import UseCallback from '../Components/UseCallback/UseCallback';
import UseContext from "../Components/UseContext/UseContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h4>Example useState</h4>
        <UseState />
      </div>
      <div>
        <h4>Example useEffect</h4>
        <UseEffect />
      </div>
      <div>
        <h4>Example useRef</h4>
        <UseRef />
      </div>
      <div>
        <h4>Example UseMemo</h4>
        <UseMemo />
      </div>
      <div>
        <h4>Example UseCallback</h4>
        <UseCallback />
      </div>
      <UseContext />
    </div>
  )
}
