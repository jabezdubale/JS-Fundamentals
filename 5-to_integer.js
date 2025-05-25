let argvVariable = process.argv[2];
let input = parseInt(argvVariable);

if (!input && input !== 0) {
  console.log("Not a number");
} else {
  console.log(`My number: ${input}`);
}