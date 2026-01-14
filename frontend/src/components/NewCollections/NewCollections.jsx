import React, { useEffect, useState } from 'react'
import "./NewCollections.css"
import Items from '../Items/Items'

const NewCollections = () => {
  const [new_collections, setNew_collections] = useState([]);

  useEffect(()=>{
    fetch('https://ecommerce-web-app-oe7k.onrender.com/newcollections')
    .then((responce)=> responce.json())
    .then((data)=> setNew_collections(data));
  }, [])
  
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i)=>{
          return <Items  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
