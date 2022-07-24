import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function StartRate({setRate}) {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    console.log(888)
    console.log(rate)
    setRate(rate/20)
    // other logic
  }

  return (
    <div className='App'>
      <Rating onClick={handleRating} ratingValue={rating} size={20} /* Available Props */ />
    </div>
  )
}