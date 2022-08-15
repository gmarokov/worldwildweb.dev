import React, { Fragment, useEffect, useState } from 'react';
import { GeoJsonGeometry } from 'three-geojson-geometry';

const ThreeGeo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const getJsonGeomery = async () => {
      try {
        const response = await (
          await fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson', {
            method: 'GET'
          })
        ).json();
        setIsLoading(false);
        setResponse(response.features);
      } catch (error) {
        console.log(error);
      }
    };

    getJsonGeomery();
  }, []);

  return (
    <Fragment>
      {isLoading ? null : (
        <Fragment>
          {response.map((data, index) => {
            const { geometry } = data;
            return (
              <lineSegments key={index} geometry={new GeoJsonGeometry(geometry, 1.03)}>
                <lineBasicMaterial color="#59519f" />
              </lineSegments>
            );
          })}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ThreeGeo;