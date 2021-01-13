import gql from 'graphql-tag';
const PLAYLIST_QUERY = gql`
  query($limit: Int!, $organizationId: String!) {
    allPlayLists(filter: {organizationId: $organizationId}, limit: $limit) {
      title
      episodes {
        title
        id
        playerType
        url
        program
        date
        thumbnail {
          url
          alt
        }
        websiteUrl
        description
      }
    }
  }
`;
const MEDIA_CENTERS_QUERY = gql`
  query($lat: String, $long: String) {
    organizations(filter: {location: {latitude: $lat, longitude: $long}}) {
      title
      id
      image
      city
      state
      squareImage
      address
      description
      secondaryColor
      primaryColor
      website
      phone
      zip
      latitude
      longitude
    }
  }
`;
const MEDIA_CENTERS_BY_LOCATION_QUERY = gql`
  query($longitude: Float!, $latitude: Float!) {
    allCenters(
      sort: {coordinates: {longitude: $longitude, latitude: $latitude}}
      filter: {name: "", location: ""}
    ) {
      location
      name
      distance
      id
      coordinates {
        longitude
        latitude
      }
      image
    }
  }
`;
const EPISODES_QUERY_FILTER = gql`
  query(
    $limit: Int!
    $offset: Int!
    $searchQuery: String
    $dateQuery: String
    $organizationId: String!
  ) {
    allEpisodes(
      filter: {
        organizationId: $organizationId
        dateQuery: $dateQuery
        searchQuery: $searchQuery
      }
      limit: $limit
      offset: $offset
    ) {
      title
      id
      playerType
      url
      program
      date
      thumbnail {
        url
        alt
      }
      websiteUrl
      description
    }
  }
`;
const LIVE_VIDEOS_QUERY = gql`
  query($organizationId: String!) {
    onAirLiveVideosByOrganization(organizationId: $organizationId) {
      id
      streamUrl
      stations
      title
      image
      description
      playerType
      duration
      endDatetime
      program
      publishedDatetime
      recordedDate
      releasedDate
    }
  }
`;
const RECENT_LIVE_VIDEOS_QUERY = gql`
  query($organizations: [String]!) {
    liveVideosByOrganizations(filter: {organizations: $organizations}) {
      id
      streamUrl
      stations
      title
      image
      description
      playerType
      duration
      endDatetime
      program
      publishedDatetime
      recordedDate
      releasedDate
      organization {
        title
        id
        image
        secondaryColor
        primaryColor
        squareImage
        city
        state
        address
        description
        website
        phone
        zip
        latitude
        longitude
      }
    }
  }
`;
const SCHEDULE_VIDEO_QUERY = gql`
  query($organizationId: String!) {
    liveVideosByOrganization(organizationId: $organizationId) {
      id
      stations
      streamUrl
      playerType
    }
  }
`;
const SCHEDULE_LIVE_VIDEO_BY_CHANNEL = gql`
  query(
    $liveVideoId: String!
    $query: String
    $per: Int
    $page: Int
    $date: String
  ) {
    liveVideoByChannel(
      liveVideoId: $liveVideoId
      query: $query
      per: $per
      page: $page
      date: $date
    ) {
      metadata {
        currentPage
        totalCount
        totalPages
        limitValue
      }
      nodes {
        id
        title
        description
        endDatetime
        duration
        program
        releasedDate
        image
      }
    }
  }
`;
const NOW_PLAYING_SCHEDULE_VIDEO = gql`
  query($liveVideoId: String!) {
    nowPlayingByChannel(liveVideoId: $liveVideoId) {
      id
      title
      description
      endDatetime
      duration
      program
      releasedDate
      image
    }
  }
`;
const ALL_PODCASTS_QUERY = gql`
  query($organizationId: String!) {
    podcastsByOrganization(organizationId: $organizationId) {
      id
      title
      description
      image
      podcastEpisode {
        id
        title
        description
        publishedAt
        image
        audioUri
      }
    }
  }
`;
const ALL_RADIO_QUERY = gql`
  query($organizationId: String!) {
    radioByOrganization(organizationId: $organizationId) {
      id
      name
      station
      description
      streamUrl
      image
    }
  }
`;
const RECENT_RADIO_QUERY = gql`
  query($organizations: [String]!) {
    radiosByOrganizations(filter: {organizations: $organizations}) {
      id
      name
      station
      description
      streamUrl
      image
      organization {
        title
        id
        image
        secondaryColor
        primaryColor
        squareImage
        city
        state
        address
        description
        website
        phone
        zip
        latitude
        longitude
      }
    }
  }
`;
const RECENT_PODCAST_QUERY = gql`
  query($organizations: [String]!) {
    podcastsByOrganizations(filter: {organizations: $organizations}) {
      id
      title
      description
      publishedAt
      podcast {
        id
        title
      }
      image
      audioUri
    }
  }
`;
const RECENT_VIDEO_EPISODES_QUERY = gql`
  query($organizations: [String]!) {
    recentVideoEpisodesByOrganizations(
      filter: {organizations: $organizations}
    ) {
      id
      title
      program
      url
      thumbnail {
        url
        alt
      }
      websiteUrl
      playerType
      type
      description
      date
      organization {
        title
        id
        image
        city
        state
        address
        squareImage
        description
        primaryColor
        secondaryColor
        website
        phone
        zip
        latitude
        longitude
      }
    }
  }
`;
export default {
  EPISODES_QUERY_FILTER,
  PLAYLIST_QUERY,
  MEDIA_CENTERS_QUERY,
  MEDIA_CENTERS_BY_LOCATION_QUERY,
  LIVE_VIDEOS_QUERY,
  ALL_RADIO_QUERY,
  ALL_PODCASTS_QUERY,
  SCHEDULE_VIDEO_QUERY,
  RECENT_RADIO_QUERY,
  RECENT_PODCAST_QUERY,
  RECENT_VIDEO_EPISODES_QUERY,
  RECENT_LIVE_VIDEOS_QUERY,
  SCHEDULE_LIVE_VIDEO_BY_CHANNEL,
  NOW_PLAYING_SCHEDULE_VIDEO,
};
