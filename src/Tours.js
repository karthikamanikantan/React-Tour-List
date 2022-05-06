import React from "react";

const Tours = ( {Tours} )=>{
  <>
  {

    Tours.map((tour)=>{
      return(
        <Tours key={tour.id} {...tour}>

        </Tours>
      )
    })
  }
  
  </>
}
export default Tours