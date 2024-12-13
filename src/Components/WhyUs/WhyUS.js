import React from 'react'
import styles from './whyus.module.css'
import { BsPatchCheck } from "react-icons/bs";

const WhyUS = () => {
  return (
    <>
    <div className={styles.whyuscont}>
        <section className={styles.headerwrap}>
        <img src='/images/whytext.svg'/>
          
        </section>
        <section className={styles.whyusContent}>
            <img src='/images/whyus.png'/>
           <div className={styles.whyuslist}>
            <ul>
                <li><BsPatchCheck /> Flexible Learning</li>
                <li><BsPatchCheck /> Hands-On Projects</li>
                <li><BsPatchCheck /> Career Services</li>
                <li><BsPatchCheck /> 100+ Projects</li>

            </ul>

            <ul>
                <li><BsPatchCheck />Affordable Pricing</li>
                <li><BsPatchCheck />Up-to-Date Industry Practices</li>
                <li><BsPatchCheck />Success Stories/Testimonials</li>
                <li><BsPatchCheck />Satisfaction Guarantee</li>
            </ul>



           </div>

        </section>
    </div>
    
    
    
    </>
  )
}

export default WhyUS