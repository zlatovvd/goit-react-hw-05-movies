import axios from 'axios';

const key = 'bf849ac9154ddcf14074361fb0f94011';

const getInfo = async url => {
  return await axios.get(url, {
    params: {
      api_key: key,
    },
  });
};

export default getInfo;
