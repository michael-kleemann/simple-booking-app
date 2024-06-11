import { Place } from "@/graphql/generated/schemaType";
import styles from "./styles.module.css";
import { Card } from "../Card";
import { PlaceCardContent } from "../PlaceCardContent";

interface Props {
    headline: string;
    list: Array<Place>;
}

export const CardList = ({headline, list}: Props) => {
    return <>
    <strong className={styles.headline}>{headline}:</strong>
    <div className={styles.cardList}>
        {list.map((listItem) => <Card key={listItem.id}>
            {listItem.__typename === "Place" && <PlaceCardContent place={listItem} />}
        </Card>)}
    </div></>;
};
