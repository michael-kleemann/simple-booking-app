import { Flight, Place } from "@/graphql/generated/schemaType";
import styles from "./styles.module.css";
import { Card } from "../Card";
import { PlaceCardContent } from "../PlaceCardContent";
import { FlightCardContent } from "../FlightCardContent";

interface Props {
    headline: string;
    list: Array<Place|Flight>;
}

export const CardList = ({headline, list}: Props) => {
    return <>
    <strong className={styles.headline}>{headline}:</strong>
    <div className={styles.cardList}>
        {list.map((listItem) => <Card key={listItem.id}>
            {listItem.__typename === "Place" && <PlaceCardContent place={listItem} />}
            {listItem.__typename === "Flight" && <FlightCardContent flight={listItem} />}
        </Card>)}
    </div></>;
};
