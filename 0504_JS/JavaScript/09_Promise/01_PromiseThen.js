function longTimeWork(workFine = true, errorMessage = "test") {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve告訴13行的then是正確，reject告訴16行catch是錯誤的
            (workFine) ? resolve(1200) : reject(errorMessage);
        }, 1000);
    })
}


function main() {
    longTimeWork(true, "test123")  // try true/false
        .then(function (e) {
            console.log("1",e);
        })
        .catch(function (e) {
            console.log("2",);
        })
}


// function longTimeWork(workFine = true, errorMessage = "test") {
//     return new Promise((yes, no) => {
//         setTimeout(() => {
//             yes(1600);
//         }, 3000);
//     })
// }
// function main() {
//     var p = longTimeWork(true, "test");
//     p.then(function (e) {
//         console.log("then fuction is running", e);
//     })
//     console.log("processing..")
// }



main();

