import { Place } from "@/graphql/generated/schemaType";
import Image from 'next/image';
import styles from './styles.module.css';

interface Props {
  place: Place;
}

export const PlaceCard = ({place}: Props) => {
  return <a className={styles.card}>
    <strong className={styles.description}>{place.desciption}</strong>
    {place.mainPhoto && <Image className={styles.image} width={600} height={400} src={place.mainPhoto}/>}
    <span><b>{place.priceByNight} €</b> per night</span>
   </a>;
};
