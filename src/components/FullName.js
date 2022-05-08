import React from 'react'

function FullName() {
    const linkedinProfile = "https://www.linkedin.com/in/salhi-oumaima-213a63237/";
  return (
    <h1 >Oumaima Salhi 
    <a href={linkedinProfile} target="_blank"> <i style={{color:"blue"}} class="bi bi-linkedin"></i> </a>
     </h1>
  )
}

export default FullName


