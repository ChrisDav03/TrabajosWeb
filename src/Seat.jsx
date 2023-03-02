import React, { useState } from 'react';

const Seat = () => {
  const [reserved, setReserved] = useState(false);

  const handleSeatClick = () => {
    setReserved(!reserved);
  };

  return (
    <button onClick={handleSeatClick}>
      {reserved ? 'X' : ''}
    </button>
  );
};

export default Seat;