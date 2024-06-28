import React, { useContext, useEffect, useRef } from 'react'
import './home.css'
import mountain from './assets/mountain.png'
import solo from './assets/solo2.jpg'
import cycle from './assets/cycle.jpg'
import nightsky from './assets/nightsky.jpg'
import compass from './assets/compass.jpg'
import tbh2 from './assets/tbhg2.jpg'
import tbh3 from './assets/tbhg3.jpg'
import rocksplash from './assets/rocksplash.png'
import splash from './assets/splash2.png'
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { LiaCompass } from "react-icons/lia";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { mycontext } from './context'

function Home() {
  const { desc, setdesc } = useContext(mycontext)

  const nameref = useRef(null)
  useEffect(() => {
    function slidename() {
      if (nameref.current) {
        if (window.scrollY > 10) {
          nameref.current.classList.add('slide')
        } else {
          nameref.current.classList.remove('slide')
        }
      }
    }
    window.addEventListener('scroll', slidename)
  })
  return (
    <div className='homeContainer'>
      <div className="main">
        <div className="mount-name">
          <h1 ref={nameref}>Adam</h1>
        </div>
        <div className="mountain">
          <img src={mountain} />
        </div>

        <div className="aside">
          <div className="sc-icons">
            <IoLogoInstagram />
            <FaXTwitter />
            <FaFacebook />
          </div>
        </div>

        <div className="bt-tool">
          <LiaCompass /> <p>25.1972° N, 55.2744° E</p>
        </div>
      </div>

      {/* =============== second section ============= */}
      <div className="second-cont">
        <div className="card-cont">
          <div className="box">
            <img src={solo} />
            <div className="heads">
              <h2>Adam</h2>
            </div>
            <div className="crd-title">
              <a href='#'>view portfolio <MdOutlineArrowRightAlt /> </a>
            </div>
          </div>

          <div className="box">
            <img src={nightsky} />
            <div className="heads">
              <h2>Explore</h2>
            </div>
            <div className="crd-title">
              <a href='#'>view Explores <MdOutlineArrowRightAlt /> </a>
            </div>
          </div>

          <div className="box">
            <img src={cycle} />
            <div className="heads">
              <h2>Adventures</h2>
            </div>
            <div className="crd-title">
              <a href='#'>view Adventures <MdOutlineArrowRightAlt /> </a>
            </div>
          </div>

          <div className="box">
            <img src={compass} />
            <div className="heads">
              <h2>Travel</h2>
            </div>
            <div className="crd-title">
              <a href='#'>view Traveling <MdOutlineArrowRightAlt /> </a>
            </div>
          </div>

        </div>
      </div>

      {/* ============= third container starts here ============ */}
      <div className="third-page">
        <div className="thpg-bg"> {/* background image in this div */}
          <div className="tp-para">
            {
              desc.map(dt =>
                <>
                  <p>{dt.description1}</p><br /><br />
                  <p>{dt.description2}</p><br /><br />
                  <p>{dt.description3}</p><br /><br />
                </>
              )
            }

          </div>
        </div>

        <div className="thp-card">
          <div className="thp-bg-img">
            <img src={rocksplash} />
          </div>
          <div className="thp-cd-cont">
            <div className="thp-box">
              <img src={solo} />
            </div>
            <div className="thp-box">
              <img src={tbh2} />
            </div>
            <div className="thp-box">
              <img src={cycle} />
            </div>
            <div className="thp-box">
              <img src={tbh3} />
            </div>
          </div>
        
        <div className="thp-lnk">
          <p>View portfolio <MdOutlineArrowRightAlt /> </p>
        </div>
        </div>


      </div>
    </div>
  )
}

export default Home