import { useEffect, useRef, useState } from "react";

export default function Geolocation() {
  const { position, isLoading, error, getPosition } = useGeolocation();
  const countClicks = useRef(0);

  useEffect(
    function () {
      countClicks.current = ++countClicks.current;
    },
    [position]
  );

  const { lat, lng } = position;

  return (
    <div>
      <button onClick={getPosition} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a target="_blank" rel="noreferrer" href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}>
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks.current} times</p>
    </div>
  );
}

function useGeolocation() {
  const [position, setPosition] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation) return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { position, isLoading, error, getPosition };
}
