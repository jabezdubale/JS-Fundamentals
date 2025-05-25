let val = parseInt(process.argv[2]);

function facto(a){
    if(Number.isNaN(a) || a===0) return 1;
    return a * facto(a-1);
}

console.log(facto(val));

