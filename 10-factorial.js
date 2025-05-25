let val = parseInt(process.argv[2]);

function facto(a){
    return a * facto(a-1);
}

console.log(facto(val));

