import { Flight } from "@/graphql/generated/schemaType";
import { gql } from "apollo-server-micro";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage, NextPageContext } from "next";
import Head from "next/head";
import styles from '@/styles/Home.module.css';

const FlightPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({flight}) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* No styling at this place as the routing concept is proven */}
      <main className={styles.main}>
        <div>{flight?.origin}</div>
        <div>{flight?.destination}</div>
        <div>{flight?.price} €</div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

interface FlightPageProps {
    flight: Flight|undefined;
}

const QUERY = `
query GetFlight($flightId: ID) {
  flight(id: $flightId) {
    id
    origin
    destination
    price
  }
}
`;

export const getServerSideProps: GetServerSideProps<FlightPageProps> = async (context: GetServerSidePropsContext) => {

  let flight: Flight|undefined;
  try {
    // TODO fetching data should be improved. Better switch to a library like apollo.
     const response = await fetch("http://localhost:3000/api/graphql", {
      method: "POST",
      body: JSON.stringify({
        query: QUERY,
        // TODO validate id before usage
        variables: { flightId: context.params?.id}
      }),
      headers: {"content-type": "application/json"}
     });
     
     if (response.status === 200) {
        const json = await response.json();
        flight = json.data.flight;
     }
  } catch (err) {
    // TODO error handling needs improvement. The user needs to know that something went wrong
     console.error(err);
  }

  if (!flight) {
    // TODO returning 404 might not be the best response in case of an error
    return {
        notFound: true,
        props: {}
    };
  }

  return {
    props: {
      flight,
    }
  };
};

export default FlightPage;
