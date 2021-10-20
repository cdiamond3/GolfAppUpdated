import React from 'react'
import { Rating } from 'semantic-ui-react'

const RatingBar = () => (
    <Rating
        icon='star'
        defaultRating={1}
        maxRating={5} />
)

export default RatingBar
