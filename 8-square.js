let argX = parseInt(process.argv[2]);

if (!argX && argX !== 0) {
  console.log("Missing size");
} else {
    for (let i=0; i<argX; i++){
        console.log("X".repeat(argX))
    }
}