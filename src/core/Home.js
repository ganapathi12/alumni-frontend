import Menu from './menu'
import { Button, Carousel, img, p, div, Placeholder } from 'react-bootstrap'
import React from 'react'
import one from './gallary/1.jpg'
import four from './gallary/4.jpg'
import seven from './gallary/7.jpg'
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
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            classNameNameNameName='d-block w-100'
            src={four}
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            classNameNameNameName='d-block w-100'
            src={seven}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div classNameName='container marketing'>
        <div className='custom'>
          <div className='row'>
            <div className='col-lg-4'>
              <img
                className='rounded-circle'
                src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                alt='Generic placeholder image'
                width='140'
                height='140'
              />
              <h2>Heading</h2>
              <p>
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <p>
                <a className='btn btn-secondary' href='#'>
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className='col-lg-4'>
              <img
                className='rounded-circle'
                src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                alt='Generic placeholder image'
                width='140'
                height='140'
              />
              <h2>Heading</h2>
              <p>
                Another exciting bit of representative placeholder content. This
                time, we've moved on to the second column.
              </p>
              <p>
                <a className='btn btn-secondary' href='#'>
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className='col-lg-4'>
              <img
                className='rounded-circle'
                src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                alt='Generic placeholder image'
                width='140'
                height='140'
              />
              <h2>Heading</h2>
              <p>
                And lastly this, the third column of representative placeholder
                content.
              </p>
              <p>
                <a className='btn btn-secondary' href='#'>
                  View details &raquo;
                </a>
              </p>
            </div>
          </div>
          <div class='row featurette'>
            <div class='col-md-7'>
              <h2 class='featurette-heading'>
                First featurette heading.{' '}
                <span class='text-muted'>It’ll blow your mind.</span>
              </h2>
              <p class='lead'>
                Some great placeholder content for the first featurette here.
                Imagine some exciting prose here.
              </p>
            </div>
            <div class='col-md-5'>
              {/* {{< placeholder width="500" height="500" background="#eee" color="#aaa" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto" >}} */}
              <img
                src={one}
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
                Oh yeah, it’s that good.{' '}
                <span class='text-muted'>See for yourself.</span>
              </h2>
              <p class='lead'>
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div class='col-md-5 order-md-1'>
              {/* {{< placeholder width="500" height="500" background="#eee" color="#aaa" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto" >}} */}
              <img
                src={one}
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
                First featurette heading.{' '}
                <span class='text-muted'>It’ll blow your mind.</span>
              </h2>
              <p class='lead'>
                Some great placeholder content for the first featurette here.
                Imagine some exciting prose here.
              </p>
            </div>
            <div class='col-md-5'>
              {/* {{< placeholder width="500" height="500" background="#eee" color="#aaa" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto" >}} */}
              <img
                src={one}
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
