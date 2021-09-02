import Menu from './menu'
import { Button, Carousel, img, p, div, Placeholder } from 'react-bootstrap'
import React from 'react'
import one from './gallary/7.jpg'
import two from './gallary/4.jpg'
import three from './gallary/10.png'
import four from './gallary/15.jpg'
import five from './gallary/16.jpg'
import six from './gallary/17.jpg'
import seven from './gallary/11.jpg'
import eight from './gallary/14.png'
import nine from './gallary/13.png'
import './carousel.css'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='pt-4'>
      <Menu />
      <Carousel>
        <Carousel.Item>
          <img
            classNameNameNameName='d-block w-100'
            src={one}
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            classNameNameNameName='d-block w-100'
            src={two}
            alt='Second slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            classNameNameNameName='d-block w-100'
            src={three}
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>

      <div classNameName='container marketing'>
        <div className='custom'>
          <div className='row'>
            <div className='col-lg-4'>
              <img
                className='rounded-circle'
                src={four}
                alt='Generic placeholder image'
                width='140'
                height='140'
              />
              <h2>GREEN INITIATIVES</h2>
              <p>
                Amrita Chancellor Supports PM During Swacchta Hi Seva Relaunch
              </p>
            </div>
            <div className='col-lg-4'>
              <img
                className='rounded-circle'
                src={five}
                alt='Generic placeholder image'
                width='140'
                height='140'
              />
              <h2>Events</h2>
              <p>
                Amrita Online FDP on Empowering Teaching Professionals
              </p>
            </div>
            <div className='col-lg-4'>
              <img
                className='rounded-circle'
                src={six}
                alt='Generic placeholder image'
                width='140'
                height='140'
              />
              <h2>Awards</h2>
              <p>
               Amrita Student Team Aces European Urban Mobility Hackathon 2021
              </p>
            </div>
          </div>
          <div class='row featurette'>
            <div class='col-md-7'>
              <h2 class='featurette-heading'>
                National Assessment and Accreditation Council (NAAC)
              </h2>
              <p class='lead'>
              Amrita Vishwa Vidyapeetham was the youngest institution to be awarded with an 'A++' grade by the National Assessment and Accreditation Council (NAAC), an autonomous body established in 1994 by the University Grants Commission (UGC) of India to assess and accredit institutions of higher education in the country. To be eligible to apply for the NAAC accreditation, an educational institution should have completed five years. Amrita Vishwa Vidyapeetham had just completed six years in January 2009 when it applied for the accreditation. 'A++' is the highest grade that can be awarded to the best-in-class institutions for higher learning.
              </p>
            </div>
            <div class='col-md-5'>
              {/* {{< placeholder width="500" height="500" background="#eee" color="#aaa" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto" >}} */}
              <img
                src={seven}
                width='500'
                height='500'
                background='#eee'
                color='#aaa'
                class='bd-placeholder-img-lg featurette-image img-fluid mx-auto'
              />
            </div>
          </div>

          <div class='row featurette'>
            <div class='col-md-7 order-md-2'>
              <h2 class='featurette-heading'>
              National Board of Accreditation (NBA)
              </h2>
              <p class='lead'>
              The B. Pharm. and B. Tech. programs of Amrita Vishwa Vidyapeetham, got reaccredited by the National Board of Accreditation (NBA). The National Board of Accreditation (NBA) is one of the two major bodies responsible for accreditation of higher education institutions in India. NBA accredits technical programmes, such engineering and management programmes and is a full member of the Washington Accord. 
              </p>
            </div>
            <div class='col-md-5 order-md-1'>
              {/* {{< placeholder width="500" height="500" background="#eee" color="#aaa" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto" >}} */}
              <img
                src={eight}
                width='500'
                height='500'
                background='#eee'
                color='#aaa'
                class='bd-placeholder-img-lg featurette-image img-fluid mx-auto'
              />
            </div>
          </div>

          <div class='row featurette'>
            <div class='col-md-7'>
              <h2 class='featurette-heading'>
              Times Higher Education (THE) Rankings
              </h2>
              <p class='lead'>
              In the 2020 edition of the annual rankings released, Amrita Vishwa Vidyapeetham has been placed in the list of 601-800 category. The ranking features universities in 70 countries and seventeen Indian higher education institutions have featured in the list of the world's best universities.
              </p>
            </div>
            <div class='col-md-5'>
              {/* {{< placeholder width="500" height="500" background="#eee" color="#aaa" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto" >}} */}
              <img
                src={nine}
                width='500'
                height='500'
                background='#eee'
                color='#aaa'
                class='bd-placeholder-img-lg featurette-image img-fluid mx-auto'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home
