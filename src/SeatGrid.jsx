import React, { useState } from 'react';
import Seat from './Seat';

const SeatGrid = () => {
  const [seats, setSeats] = useState(Array(9).fill(false));

  const handleSeatClick = (index) => {
    const newSeats = [...seats];
    newSeats[index] = !newSeats[index];
    setSeats(newSeats);
  };

  return (
    <div className="seat-grid">
      {seats.map((reserved, index) => (
        <Seat
          key={index}
          reserved={reserved}
          onClick={() => handleSeatClick(index)}
        />
      ))}
    </div>
  );
};

export default SeatGrid;