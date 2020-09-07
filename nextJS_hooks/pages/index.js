import React from 'react';
import styles from '../styles/Home.module.css';
import UseState from "../Components/UseState/UseState";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h4>Example useState</h4>
        <UseState />
      </div>
    </div>
  )
}
