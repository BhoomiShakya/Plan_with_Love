import React from 'react'
import Cards from './Cards'

function Tours({tours, Btnhandler}) {
  return (
    <div className='container'>
        <div>
            <h2 className='heading01'>Plan with Love</h2>
        </div>
        <div className='cards'>
            {
                //apni tours ki app ko map kiya hai using the idx
                tours.map((tour)=>{ //tour and then here is a spread operator
                    return <Cards key={tour.id} {...tour} Btnhandler={Btnhandler}/>//jisse hoga yeh ki apne obj ki coppy bna dega
                })
            }
        </div>
    </div>
  )
}

export default Tours