import { createUser, uploadPhoto } from './utils';

function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then((values) => {
      const firstName = values[0];
      const lastName = values[0];
      const body = values[1];
      console.log(`${body.body} ${firstName.firstName} ${lastName.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
