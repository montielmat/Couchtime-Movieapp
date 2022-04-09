import React from 'react'

export const Footer = () => {
  return (
<footer className='container-md bg-dark rounded-top mt-4 text-white h-auto p-2 justify-content-center'>
    <h5 className='text-center'>Created by Matías Montiel</h5>
    <div className='d-flex justify-content-center'>
<a className="link mx-3" href='https://github.com/montielmat' target="blank"><i style={{color:"#f0f6fc"}} className="fa-brands fa-github fa-3x"></i></a>
<a className="link" href='https://github.com/montielmat' target="blank"><i className="fa-brands fa-linkedin fa-3x"></i></a>
    </div>
</footer>
  )
}
