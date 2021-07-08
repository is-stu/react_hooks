import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coors = { x, y };
      setCoords(coors);
      console.log(coors);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Great</h1>
      <p>
        Mouse on x: {x} y: {y}
      </p>
    </div>
  );
};
