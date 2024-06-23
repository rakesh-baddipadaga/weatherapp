import React, { useEffect, useState } from 'react';

const Alert = ({ weather }) => {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (weather) {
      const temp = weather.main.temp; // Convert from Kelvin to Celsius
      if (temp > 35) {
        setAlert('Heat Alert: Stay Hydrated!');
      } else if (temp < 0) {
        setAlert('Cold Alert: Dress Warmly!');
      } else {
        setAlert(null);
      }
    }
  }, [weather]);

  return (
    <div className="alert">
      {alert && <p>{alert}</p>}
    </div>
  );
};

export default Alert;
