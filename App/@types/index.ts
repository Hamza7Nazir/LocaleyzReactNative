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
};
export type ScheduleObj = {
  id: string;
  stations: string;
  streamUrl: string;
  playerType: string;
};

export type CurrentlyPlaying = {
  description: string;
  duration: string;
  endDatetime: string;
  id: string;
  image: string;
  program: string;
  releasedDate: string;
  title: string;
};
