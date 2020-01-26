import React, { useState, useEffect } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

export default function Friend() {
  const [friend, setFriend] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getFriend2 = () => {
    fetch('https://www.randomuser.me/api?results=1')
      .then(response => response.json())
      .then(data => {
        setFriend(data);
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(getFriend2, []);

  if (isLoading) return <h2>is Loading ...</h2>;
  if (hasError) return <h2>Error Occured ...</h2>;

  return (
    <div>
      <Button getFriend={getFriend2} />
      <FriendProfile friend={friend} />
    </div>
  );
}
