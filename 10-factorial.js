let val = parseInt(process.argv[2]);

function facto(a){
    let finalVal = 1;
    for (let i=a; i>0; i--){
        finalVal*=i;
    }
    return finalVal;
}

console.log(facto(val));