export default function returnHowManyArguments(...args) {
  let numOfArgs = 0;
  for (let i = 0; i < args.length; i++) {
    numOfArgs += 1;
  };
  return numOfArgs;
}
