import React from 'react'
import styles from './home.module.css'
import Course from '@/Components/Course/Course'
import WhyUS from '@/Components/WhyUs/WhyUS'
import Advisor from '@/Components/Advisore/Advisor'
import RightPlace from '@/Components/RightPlace/RightPlace'
import { FaShoppingBag } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import Certificate from '@/Components/Certificate/Certificate'
import Placement from '@/Components/Placement/Placement'

const Homepage = () => {
  return (
    <>
    <div className={styles.HomepageMainCont}>

         <section className={styles.HomePageMainContent}>
          <h3><span><FaShoppingBag /></span> For Working Professionals </h3>
          <h1>FutureWeb Full-Stack Web Development Learning Program</h1>
          <h2>Build skills with courses, certificates, and degrees online from world-class universities and companies</h2>
          <div className={styles.HomePageMainbutton}>
          <button>Apply Now</button>
          <button><FaDownload /> Download Syllabus</button>
          </div>
          {/* <section className={styles.HomePageMainIcons}>
          <img src="/images/icons/html-5.png"  alt="Your" />
          <img src="/images/icons/css.png"  alt="Your" />
          <img src="/images/icons/javascript.png"  alt="Your" />
          <img src="/images/icons/atom.png"  alt="Your" />
          <img src="/images/icons/Daco.png"  alt="Your" />
          <img src="/images/icons/block.png"  alt="Your" />
          </section> */}
         </section>

         <section className={styles.HomePageMainImage}>
      <img src="/images/headerimg1.png"  alt="Your Name" />

         </section>


    </div>
    <Course/>
    <WhyUS/>
    <Advisor/>
    <RightPlace/>
    <Certificate/>
    <Placement/>
    
    </>
  )
}

export default Homepage