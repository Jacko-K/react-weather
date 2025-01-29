import styles from './card.module.scss';
import cx from 'classnames';
import {Weather, WeatherAnims} from "../SunnyAnimation/weatherAnims.tsx";

interface Day {
  date: number,
  weather: string,
  temp2m: {
    max: number,
    min: number
  },
  wind10m_max: number
}

export interface CardProps {
    className?: string;
    day: Day;
    weatherEnum?: Weather;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className, day, weatherEnum }: CardProps) => {

  const date = day.date.toString()
  const year = Number(date.slice(0,4))
  const month = Number(date.slice(4,6))
  const dayOfTheMonth = Number(date.slice(6,8))
  const formattedDate = new Date(year, month -1, dayOfTheMonth).toString().slice(0,3);
    return (
        <div className={cx(styles.root, className)}>
            <p className={styles['card-paragraph']}>{formattedDate}</p>
            <WeatherAnims weatherEnum={weatherEnum}/>
            <h2 className={styles['card-heading']}>{day.temp2m.max}°C</h2>
            <p className={styles['card-paragraph']}>{day.weather}</p>
        </div>
    );
};
