import get from '../../utils/apiWrapper';

const validateEmail = (email) => new Promise((resolve, reject) => get(`/validateEmail?email=${email}`)
  .then((response) => {
    resolve(response);
  })
  .catch((error) => {
    reject(error);
  }));

export default validateEmail;
