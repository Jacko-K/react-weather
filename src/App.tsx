import {useEffect, useState} from 'react';

import styles from './root.module.scss';
import {Header} from './Components/header/header.tsx';
import {MainCard} from './Components/main-card/main-card.tsx';
import {Card} from './Components/card/card.tsx';
import {Footer} from './Components/footer/footer.tsx';
import {Weather, WeatherAnims} from "./Components/weatherAnim/weatherAnims.tsx";

interface Day {
  date: number;
  weather: string;
  temp2m: {
    max: number;
    min: number;
  };
  wind10m_max: number;
}


export default function App() {
  interface CustomLocation {
    latitude: number;
    longitude: number;
  }

  const [location, setLocation] = useState<CustomLocation | null>(null);
  const [data, setData] = useState<Day[]>([]);

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported');
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => console.log('Sorry, we cannot find your location')
      );
    }
  };

  const fetchData = async () => {
    const latitude = location?.latitude;
    const longitude = location?.longitude;
    try {
      const response = await fetch(
        `http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`
      );
      const data = await response.json();
      setData(data.dataseries);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getLocation();
    fetchData();
  }, []);

  function castToWeather(value: string | undefined): Weather | undefined {
    if (Object.values(Weather).includes(value as Weather)) {
      return value as Weather;
    }
    return undefined; // value is not a valid enum member
  }

  return (
    <div className={styles.Main}>
    <div id="root" className={styles.App}>
      <Header/>
      <MainCard
        temp={data?.[0]?.temp2m.max}
        img={undefined}
      />
      <WeatherAnims weatherEnum={ castToWeather(data[0]?.weather) ?? Weather.clear}/>
      <div/>
      <div className={styles['card-container']}>
        {data?.slice(1, 4).map((day, _index) => (
          <Card key={_index} day={day} weatherEnum={castToWeather(day?.weather) ?? Weather.clear}/>
        ))}
      </div>
      <Footer/>
    </div>
    </div>
  )
}
