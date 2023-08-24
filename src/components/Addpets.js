import React, { useState } from 'react'

function Addpets() {
    

  return (
    <div className='addpets' id="addpet">
        <div className='content'>
        <div className='wrapper'>
            <h2>Giving all our pets a better life quality</h2>
           
           <form>
           <div className="input-box">
        <input  type="text"  placeholder="Enter your name"  />
      </div>
      <div className="input-box">
        <input  type="text"  placeholder="Enter your email"  />
      </div>
      <button>
          Add your pets
      </button>
               </form>  </div>          
        </div>

    </div>
  )
}

export default Addpets