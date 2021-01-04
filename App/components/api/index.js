import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import {View, Text} from 'react-native';

const GET_JOBS = gql`
  query {
    jobs {
      id
      description
      createdAt
      applyUrl
      title
      cities {
        id
        name
        country {
          name
        }
      }
      company {
        name
      }
    }
  }
`;
// const List = () => {
//   const {loading, error, data} = useQuery(GET_JOBS);
//   if (loading) {
//     return 'Loading...';
//   }
//   if (error) {
//     return 'Error...';
//   }
//   if (data) {
//     return data;
//   }
//   console.log(loading);
//   console.log(error);
//   console.log(data);
// };

export default GET_JOBS;
