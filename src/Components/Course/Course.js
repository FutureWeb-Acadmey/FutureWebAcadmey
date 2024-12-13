import React from 'react'
import styles from './course.module.css'
const Course = () => {
  return (
    <>
    
    <div className={styles.courseCont}>
        <section className={styles.box}>
            <img src='/images/icons/front.png'/>
            <h1>Front-End Devlopment</h1>
        </section>

        <section className={styles.box}>
            <img src='/images/icons/back.png'/>
            <h1>Back-End Devlopment</h1>
        </section>

        <section className={styles.box}>
            <img src='/images/icons/full.png'/>
            <h1>Full-Stack Devlopment</h1>
        </section>
    </div>
    
    
    </>
  )
}

export default Course