import get from '../../utils/apiWrapper';

const getCategories = () => new Promise((resolve, reject) => get('/categories')
  .then((response) => {
    resolve(response);
  })
  .catch((error) => {
    reject(error);
  }));

export default getCategories;
