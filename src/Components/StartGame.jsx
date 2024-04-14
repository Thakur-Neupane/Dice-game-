import React from 'react'
import Dice from "./images/dices.webp"

export const StartGame = ({toggle}) => {
  return (
      <>
        <div className="container">
        <img src={Dice} className="img-fluid" alt="..."/>
          
              <h1 align="center">
                 Dice Game
                 
              </h1>
           <button onClick={toggle }type="button" className="btn btn-dark btn-lg btn-block mt-2 mb-3 display-flex">Play Now</button>
           
        </div>
          
     </>
  )
}
