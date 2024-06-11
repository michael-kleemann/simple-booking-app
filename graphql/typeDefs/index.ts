export default `type Flight {
  id: ID
  origin: String
  destination: String
  price: Float
}

input inputFlightType {
  type: String
  origin: String
  destination: String
  price: Float
}

type Mutation {
  addFlight(body: inputFlightType): Flight
}

type Query {
  flightList: [Flight]
  flight(id: ID): Flight
}
 type Place {
  id: ID
  owner: User
  desciption: String
  mainPhoto: String
  photos: [String]
  priceByNight: Float
  reviews: [Review]
}

input inputPlaceType {
  type: String
  desciption: String
  mainPhoto: String
  photos: [String]
  priceByNight: Float
}

type Mutation {
  addPlace(body: inputPlaceType): Place
}

type Query {
  placeList: [Place]
  place(id: ID): Place
}
 type Review {
  id: ID
  author: User
  feedback: String
  rate: Float
  place: ID
}

type Query {
  reviewByUser(id: ID): [Review]
}

input inputReviewType {
  id: ID
  feedback: String
  rate: Float
  place: ID
}

type Mutation {
  addReview(body: inputReviewType): Review
}
 type User {
  id: ID!
  name: String
  email: String!
  photo: String!
}

input inputUserType {
  name: String!
  email: String!
}

type Query {
  userList: [User!]!
  user(id: ID!): User!
}

type Mutation {
  addUser(body: inputUserType): User!
}
`;