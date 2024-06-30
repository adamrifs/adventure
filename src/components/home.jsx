import React, { useContext, useEffect, useRef } from 'react'
import './home.css'
import mountain from './assets/mountain.png'
import solo4 from './assets/solo4.jpg'
import rocksplash from './assets/rocksplash.png'
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { LiaCompass } from "react-icons/lia";
import { LiaCopyright } from "react-icons/lia";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { mycontext } from './context'

function Home() {
  const { desc, setdesc, card, setcard, imgCard, setimgCard } = useContext(mycontext)

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
          {
            card.map(cdata =>
              <div className="box">
                <img src={cdata.image} />
                <div className="heads">
                  <h2>{cdata.heading}</h2>
                </div>
                <div className="crd-title">
                  <a href='#'>{cdata.title} <MdOutlineArrowRightAlt /> </a>
                </div>
              </div>
            )
          }
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
            {
              imgCard.map(imgcd =>
                <div className="thp-box">
                  <img src={imgcd.image} />
                </div>
              )
            }
          </div>
          <div className="thp-lnk">
            <p>View portfolio <MdOutlineArrowRightAlt /> </p>
          </div>
        </div>

        <div className="ft-page">
          <div className="ft-img">
            <img src={solo4} />
          </div>

          <div className="ft-fade"></div>

          <div className="ft-ctnts">
            <h2>adamrifsal@gmail.com</h2>
            <h4>Adam</h4>
            <div className="ft-foot">
           
              <p><LiaCopyright /> 2024 Designed by Adam</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home