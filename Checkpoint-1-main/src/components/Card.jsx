import Rating from 'react-rating';
import './Card.css';
import { useState } from 'react';


export default function Card(props) {

    const [currentRating, setCurrentRating] = useState(props.rating);

    const handleRatingChange = (newRating) => {
      setCurrentRating(newRating);
    };

    return (
        <div className="card">
            <img src={props.img} className="card__img" />
            <div className="card__body">
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
                <div>
                <Rating
                readonly 
                    initialRating={currentRating}
                    emptySymbol={<span className="star">&#9734;</span>} // Unicode character for empty star
                    fullSymbol={<span className="star">&#9733;</span>} // Unicode character for filled star
                />
                </div>
                <h3 style={{margin:0}}>Price: <span className="card__price">{props.price}</span></h3>
                <button style={{ marginTop: "20px", backgroundColor: "orange", borderRadius: "10px", color: "white", padding: "8px" }} className="btn btn-book">Book Now</button>
            </div>
        </div>
    );
}