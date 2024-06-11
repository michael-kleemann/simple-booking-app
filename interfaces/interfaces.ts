import { Flight, Place } from "@/graphql/generated/schemaType";

export interface SimpleBookingDashboardProps {
    placeList: Place[];
    flightList: Flight[];
}
