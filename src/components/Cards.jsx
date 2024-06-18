import React, { useState } from 'react'

function Cards({id,image,info,price,name, Btnhandler}) {

    const [readmore, setReadmore]= useState(false);

    const description = readmore?info:`${info.substring(0,200)}....`

    function Readhandler(){
        setReadmore(!readmore);//true ho toh false ho jaye otherwise true ho jaye
    }

  return (
    <div className='card'>
        <img src={image} className='image'/>

        <div className='tour-info'>
            <div className='tour-details'>
                <h4 className='tour-price'> ${price}</h4>
                <h4 className='tour-name'>{name}</h4>
            </div>
            <div className='description'>
                {description}
                <span className='read-more' onClick={Readhandler}>
                    {readmore ?'show less': 'read more'}
                </span>
            </div>
        </div>
        
        <button className='btn-red' onClick={()=>Btnhandler(id)}>Not Interested</button>
    </div>
  )
}

export default Cards