
// function getData (url) {
//     return new Promise((resolve, reject) => {
//         let request = new XMLHttpRequest();
//         let data = '';
//         request.open('GET',url);
//         request.onreadystatechange = function() {
//             if (request.readyState == 4) {
//                 if ((request.status == 200)) {
//                     data = JSON.parse(this.response);
//                     resolve(data);
//                 } else {
//                     reject(new Error());
//                 }
//             }
//         }
//         request.send();
//     })
// }

function getPlanet(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        let data = '';
        request.open('GET', url);
        request.onreadystatechange = function(){
            if(request.readyState == 4){
                if(request.status == 200){
                    data = JSON.parse(this.response);
                    resolve(data);
                }else  {
                    reject(new Error());
                }
            }
        }
        request.send();

    })
}

getPlanet('https://api.ipapi.com/api/95.158.36.92').then((data) => {
    console.log(data);
    return getPlanet(data.next);
}, (error) => {
    console.log('somethings going wrong...');
});


// getData('https://swapi.co/api/people').then((data) =>{
//     console.log(data);
// })