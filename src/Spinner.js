import React from 'react'
// import PropTypes from 'prop-types'
import  loading  from './Loading.gif'

const Spinner=()=> {

    return (
      <div className='text-center'>
        <img src={loading} alt='' style={{height:"50px",width:"50px"}}></img>
      </div>
    )
  
}

export default Spinner
