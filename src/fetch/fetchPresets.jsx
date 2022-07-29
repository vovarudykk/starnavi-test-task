//async fetch data from url using Promise
const fetchPresets = () => {
  return new Promise((resolve, reject) => {
    fetch(`http://demo7919674.mockable.io/`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(`${error}`);
      });
  });
};

export default fetchPresets;
