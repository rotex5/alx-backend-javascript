function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const output = { firstName, lastName };
    resolve(output);
  });
}

export default signUpUser;
