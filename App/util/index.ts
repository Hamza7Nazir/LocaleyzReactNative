import AsyncStorage from '@react-native-async-storage/async-storage';
import {MediaArr, mediaObj} from '../@types';

const SetStorage = async (key: string, value: string[]) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Error Saving Data');
  }
};

const GetStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log('Error Retrieving Data');
    return;
  }
};

const RemoveItem = async (key: string) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Error Removing Item', error);
  }
};

const getImage = (obj: MediaArr, id: string) => {
  let dumyImage = '../assets/images/imgNot.jpg';
  obj.forEach((item) => {
    if (item.id === id) {
      return (dumyImage = item.squareImage);
    }
  });
  return dumyImage;
};
const getTitle = (obj: MediaArr, id: string) => {
  let dummyTitle = 'Titel Not Found';
  obj.forEach((item: mediaObj) => {
    if (item.id === id) {
      return (dummyTitle = item.title);
    }
  });
  return dummyTitle;
};

const TrimDescription = (desc: string) => {
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

const TrimDate = () => {
  let trim = Date().split(' ', 4);
  return trim[0] + 'day ' + trim[1] + ' ' + trim[2] + ', ' + trim[3];
};
export {
  SetStorage,
  GetStorage,
  getImage,
  getTitle,
  TrimDescription,
  RemoveItem,
  TrimDate,
};
