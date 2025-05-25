let argX = parseInt(process.argv[2]);

if (!argX && argX !== 0) {
  console.log("Missing number of occurrences");
} else {
    for (let i=0; i<argX; i++){
        console.log("C is fun")
    }
}