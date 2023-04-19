import signUpUser from './4-user-promise';
import uploadPhote from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotePromise = uploadPhote(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotePromise])
    .then((res) => res.map((res) => ({
      status: res.status,
      value: res.status === 'fulfilled' ? res.value : res.reason,
    })));
}

export default handleProfileSignup;
