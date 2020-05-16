import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'


const StarRating = () =>{
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);


	return (
		<div>
			{[...Array(5)].map( (star, i) => {
				const ratingValue = i+1;
				return (
					<label>
					<input 
						type="radio" 
						name="rating" 
						value={ratingValue}
						onClick={() => setRating(ratingValue)}
					/>
					<FontAwesomeIcon icon={faStar} 
					className="star" 
					color={ratingValue <= (hover || 4) ? "#ff8000" : "#999"} 
					size="1x"
					onMouseEnter={() => setHover(ratingValue)}
					onMouseOut={() => setHover(null)}
					/>
					</label>
				)
			})}
		</div>
		);
};

export default StarRating;