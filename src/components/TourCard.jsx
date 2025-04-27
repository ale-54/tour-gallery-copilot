import React from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
  return (
    <div className="tour-card">
      {/* Display the tour image */}
      <img src={image} alt={name} className="tour-image" />

      {/* Display the tour details */}
      <div className="tour-details">
        <h2 className="tour-name">{name}</h2>
        <p className="tour-price">${price}</p>
        <p className="tour-info">{info}</p>
      </div>

      {/* Button to remove the tour */}
      <button className="not-interested-btn" onClick={() => onRemove(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default TourCard;