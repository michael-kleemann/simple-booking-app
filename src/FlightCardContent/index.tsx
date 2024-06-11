import { Flight } from "@/graphql/generated/schemaType";
import styles from './styles.module.css';

interface Props {
    flight: Flight;
}

export const FlightCardContent = ({flight}: Props) => {
   return <>
    <strong className={styles.description}>{flight.origin} -&gt; {flight.destination}</strong>
    <span><b>{flight.price} €</b></span>
   </>;
};
