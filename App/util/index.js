import AsyncStorage from '@react-native-async-storage/async-storage';

const SetStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Error Saving Data');
  }
};

const GetStorage = async (key) => {
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

const RemoveItem = async (key) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Error Removing Item', error);
  }
};

const getImage = (obj, id) => {
  let dumyImage = '../assets/images/imgNot.jpg';
  obj.forEach((item) => {
    if (item.id === id) {
      return (dumyImage = item.squareImage);
    }
  });
  return dumyImage;
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

export {SetStorage, GetStorage, getImage, TrimDescription, RemoveItem};
