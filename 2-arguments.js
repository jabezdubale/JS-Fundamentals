let argvVariable = process.argv;
if (argvVariable.length===2) {
    console.log("No argument")
}
else if (argvVariable.length===3) {
    console.log("Argument found")
}
else {
    console.log("Arguments found")
}