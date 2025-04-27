import React from 'react';
import TourCard from './TourCard'; // Import the TourCard component
import './Gallery.css'; // Optional: Import CSS for styling

function Gallery({ tours, onRemove }) {
  return (
    <div className="gallery">
      {/* Map through the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard
          key={tour.id} // Use tour ID as the key
          id={tour.id}
          name={tour.name}
          info={tour.info}
          image={tour.image}
          price={tour.price}
          onRemove={onRemove} // Pass the onRemove callback to TourCard
        />
      ))}
    </div>
  );
}

export default Gallery;