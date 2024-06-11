import { Place } from "@/graphql/generated/schemaType";
import styles from './styles.module.css';
import Image from "next/image";

interface Props {
    place: Place;
}

export const PlaceCardContent = ({place}: Props) => {
   return <>
    <strong className={styles.description}>{place.desciption}</strong>
    {place.mainPhoto && <Image className={styles.image} width={600} height={400} src={place.mainPhoto}/>}
    <span><b>{place.priceByNight} €</b> per night</span>
   </>;
};
