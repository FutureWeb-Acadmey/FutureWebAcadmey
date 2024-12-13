import React from 'react'
import styles from './placement.module.css'

const Placement = () => {
  return (
    <div className={styles.PlacementCont}>
        <section className={styles.PlacementImg}>
          <img src='/images/rb.png'/>
        </section>

        <section className={styles.Placementcontent}>
          <h1 className={styles.PlacementHeader}>Become Placement Ready!</h1>
          <div className={styles.PlacementList}>
           <ul>
           <li>Completion of major modules (4 months)</li>
            <li>Creation of Placement cohorts</li>
            <li>Get your Resume reviewed by Experts</li>
            <li>Get Interviews with Top Product Companies!</li>
           </ul>
          </div>
        </section>




    </div>
  )
}

export default Placement