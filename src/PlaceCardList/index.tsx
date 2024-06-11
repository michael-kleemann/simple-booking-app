import { Place } from "@/graphql/generated/schemaType";
import { PlaceCard } from "../PlaceCard";
import styles from "./styles.module.css";

interface Props {
    placeList: Place[];
}

export const PlaceCardList = ({placeList}: Props) => {
    return <div className={styles.placeCardList}>
        {placeList.map((place) => <PlaceCard key={place.id} place={place}/>)}
    </div>;
};
