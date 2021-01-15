export type mediaObj = {
  address: string;
  city: string;
  description: string;
  id: string;
  image: string;
  latitude: string;
  longitude: string;
  phone: string;
  primaryColor: string;
  secondaryColor: string;
  squareImage: string;
  state: string;
  title: string;
  website: string;
  zip: string;
  __typename: string;
};

export type MediaArr = {
  data: mediaObj[];
};
