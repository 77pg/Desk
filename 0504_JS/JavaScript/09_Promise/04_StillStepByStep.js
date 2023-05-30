function happy(data, timeCount) {
    return new Promise( function (resolve, reject) {
        setTimeout(function () {
            resolve(data);
        }, timeCount)
    })
}

function sad(data, timeCount) {
    return new Promise( function (resolve, reject) {
        setTimeout(function () {
            resolve(data);
        }, timeCount)
    })
}


async function living() {
    var promise1=happy(200,2000);
    var promise2=sad(100,3000);
    console.log("processing...")
    var result1=await promise1;
    var result2=await promise2;
    
    // var total = 0;
    // var result1 = await happy(200, 2000);
    // console.log(result1);
    // var result2 = await sad(100, 3000);
    // console.log(result2);

    total = result1 + result2;
    console.log("total:", total);
}

living();


