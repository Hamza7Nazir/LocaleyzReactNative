import AsyncStorage from '@react-native-async-storage/async-storage';

const SetStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Set storage fun ', value);
  } catch (error) {
    console.log('Error Saving Data');
  }
};

const GetStorage = async (key, SetQid, Qid) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Get Storage', JSON.parse(value));
      SetQid(JSON.parse(value));
    }
  } catch (error) {
    console.log('Error Retrieving Data');
  }
};

const RemoveItem = async (key) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Error Removing Item', error);
  }
};

const getImage = (obj, id) => {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id === id) {
      return obj[i].squareImage;
    }
  }

  let str = '../assets/images/imgNot.jpg';
  return str;
};

const TrimDescription = (desc) => {
  let second = [];
  let sub = desc.substr(0, 3);

  if (sub === '<p>') {
    for (let i = 0; i < desc.length - 7; i++) {
      second[i] = desc[i + 3];
    }
    return second;
  }
  return desc;
};
let Routes = {
  HomeScreen: 'HomeScreen',
  Home: 'Home',
  VideoScreen: 'VideoScreen',
  Video: 'Video',
  RadioScreen: 'RadioScreen',
  Radio: 'Radio',
  ScheduleScreen: 'ScheduleScreen',
  Schedule: 'Schedule',
  SearchCenterScreen: 'SearchCenterScreen',
  SearchCenter: 'SearchCenter',
};

export {SetStorage, GetStorage, getImage, TrimDescription, RemoveItem, Routes};
