import React from 'react'
import styles from './certificate.module.css'

const Certificate = () => {
  return (
    <div className={styles.CertificateCont}>
        <section className={styles.CertificateImg}>
          <img src='/images/CertiFicate.jpg'/>
        </section>

        <section className={styles.CertificateContent}>
            <h1>Elevate Your Career with FutureWeb Industry Recognized Certification</h1>
        </section>
    </div>
  )
}

export default Certificate