import React from 'react'
import styles from './advisor.module.css'
import { FaCheckDouble } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Advisor = () => {
  return (
    <>
    <div className={styles.AdvisorCont}>
        <section className={styles.AdvisorContent}>
            <h1>Talk to our Advisor</h1>
            <p>AND GET</p>
            <ul>
                <li><FaCheckDouble className={styles.checkic} />Personalized Career Roadmap</li>
                <li><FaCheckDouble className={styles.checkic} />Free Career Counselling</li>
                <li><FaCheckDouble className={styles.checkic} />Free Access to FutureWeb Events</li>
              
            </ul>
            <button><IoCall /> Request  a Call   </button>
        </section>
        <section className={styles.Advisorimg}>
            <img src='/images/advisor.png'/>
        </section>
    </div>
    
    </>
  )
}

export default Advisor