import React from 'react'
import { Rating } from 'semantic-ui-react'

export default function RatingBar() {
    return (
        <Rating 
        maxRating={5} 
        defaultRating={3} 
        icon='star' 
        size='mini' 
        onRate={(target,{rating}) => console.log(rating)}/>
    )
}

