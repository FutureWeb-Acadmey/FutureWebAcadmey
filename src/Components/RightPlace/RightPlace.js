import React from 'react'
import styles from './right.module.css'
import { FaCheck } from "react-icons/fa";

const RightPlace = () => {
  return (
    <>
    <div className={styles.RightPlaceCon}>
        <section className={styles.RightPlaceHeader}>
            <h1>You're at the Right Place if you Want to</h1>
        </section>
        
       <section className={styles.RightPlaceContent}>
        <h1><span><FaCheck /></span> Upskill in your current tech role </h1>
        <h1><span><FaCheck /></span> Switch to a product company </h1>
        <h1><span><FaCheck /></span> Move from Zero to Hero role  </h1>
        <h1><span><FaCheck /></span> Shift from a non-tech   </h1>
       </section>


    </div>
    
    
    </>
  )
}

export default RightPlace