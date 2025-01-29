import styles from './weatherAnims.module.scss';
import cx from 'classnames';
import sunnyAnim from "../../assets/Animations/Sunny.json"
import cloudyAnim from "../../assets/Animations/cloudy.json"
import lightRainAnim from "../../assets/Animations/LightRain.json"

import Lottie from 'react-lottie';


export interface WeatherProps {
  weatherEnum?: Weather;
}

export enum Weather {
  clear ='clear',
  lightrain = 'lightrain',
  cloudy = 'cloudy',
  pcloudy = 'pcloudy',
  ishower = 'ishower'
}
export type WeatherType = `${Weather}`;

const animMap = new Map<Weather, unknown>([
  [Weather.clear, sunnyAnim],
  [Weather.cloudy, cloudyAnim],
  [Weather.lightrain, lightRainAnim],
  [Weather.pcloudy, cloudyAnim],
  [Weather.ishower, lightRainAnim]
]);

export const WeatherAnims = ({weatherEnum}:WeatherProps) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: weatherEnum == null ? null : animMap.get(weatherEnum),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <div className={cx(styles.animMain, weatherEnum)}>
    <Lottie options={defaultOptions}/>
  </div>
}
