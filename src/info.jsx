import React from "react"

export default function Info() {
    return (
        <>
          <img id="dp" src="src/assets/courage.jpg" alt="dp"/> 
          <h3 id="name">Arth Srivastava</h3>
          <p id="profile">Backend Developer</p>
          <a href="mailto:arth4701@gmail.com"><button id="emailBtn" className="btn"><img className="btn-logo" src="src/assets/envelope-solid.svg" alt="emailLogo"/> Email</button></a>
          <a href="https://www.linkedin.com/in/arth-srivastava/" target="_blank"><button id="linkedInBtn" className="btn"><img className="btn-logo" src="src/assets/linkedin.svg" alt="linkedinLogo"/> LinkedIn</button></a>
        </>
    )
}