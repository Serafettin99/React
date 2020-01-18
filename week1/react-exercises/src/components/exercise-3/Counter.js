import React from 'react';
import Count from './Count';
import Button from './Button';

export default function Counter() {
  const [currentCount, setCount] = React.useState(0);

  const feedBack =
    currentCount > 10 ? "It's higher than 10!" : 'Keep counting...';

  return (
    <div>
      <h1>{feedBack}</h1>
      <Count count={currentCount} />
      <Button setCount={() => setCount(currentCount + 1)} />
    </div>
  );
}
