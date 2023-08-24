import React from 'react';
import groom from '../assets/cat-grooming.png';
import facial from '../assets/2.png';
import spa from '../assets/pet-spa.png';
import bath from '../assets/cat-bath.png';
import training from '../assets/4.png';
import stylish from '../assets/5.png';

function Services() {
  return (
    <section className='services' id="services">
     <div className='container'>
     <div className="row">
        <div className="s-heading">
        <h2 className="section-heading">Our Services</h2>
        <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
            
        </div>
      </div>
      <div className="row service-grid">
        <div className="column">
          <div className="card">
            {/* <div className="icon-wrapper">
              <i className="fas fa-hammer"></i>
            </div> */}
            <img src={groom} alt="s1"/>
            <h3>Grooming</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
            <h3>Price: 120Rs</h3>
          </div>
        </div>
        <div className="column">
          <div className="card">
          <img src={facial} alt="s1"/>
            <h3>Blueberry Facial</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
            <h3>Price: 120Rs</h3>
          </div>
        </div>
        <div className="column">
          <div className="card">
          <img src={spa} alt="s1"/>
            <h3>Pet SPA</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
            <h3>Price: 120Rs</h3>
          </div>
        </div>
        <div className="column">
          <div className="card">
          <img src={stylish} alt="s1"/>
            <h3>Training</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
            <h3>Price: 120Rs</h3>
          </div>
        </div>
        <div className="column">
          <div className="card">
          <img src={training} alt="s1"/>
            <h3>Stylish Extension</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
            <h3>Price: 120Rs</h3>
          </div>
        </div>
        <div className="column">
          <div className="card">
          <img src={bath} alt="s1"/>
            <h3>Cleaning Body</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
            <h3>Price: 120Rs</h3>
          </div>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Services