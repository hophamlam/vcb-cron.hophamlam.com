const cron = require('node-cron');

var axios = require('axios');
var data = JSON.stringify({
  "begin": "19/06/2022",
  "end": "19/06/2022",
  "username": "0938568040",
  "password": "UFTNG9uzq$zu%4bUNMau",
  "accountNumber": "0071001027650"
});

var config = {
  method: 'post',
  url: 'https://vcb.hophamlam.com/api/vcb/transactions',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

cron.schedule('5,10,15,20,25,30,35,40,45,50,55 * 6,7,8,9,10,11,12,13,14,15,16,17 * * *', () => {
  //run at every 5s from 6:00-18:00
  console.log('running a task every second');
  console.log('Before log-timestamp');
  require('log-timestamp');
  console.log('After log-timestamp');
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    if(response.data.transactions.length == 0) {
      console.log('Không có giao dịch')
    }
    else {
      console.log(response.data.transactions)
    }





// const array = response.data.transactions
// const ra = function () {
//   if (array.PCTime.length === 6) {
//     const first = `${array.PCTime[0]}${array.PCTime[1]}:${array.PCTime[2]}${array.PCTime[3]}:${array.PCTime[4]}${array.PCTime[5]}`;
//     return first;
//   } else if (array.PCTime.length === 5) {
//     const second = `0${array.PCTime[0]}:${array.PCTime[1]}${array.PCTime[2]}:${array.PCTime[3]}${array.PCTime[4]}`;
//     return second;
//   } else if (array.PCTime.length === 4) {
//     const second = `00:${array.PCTime[0]}${array.PCTime[1]}:${array.PCTime[2]}${array.PCTime[3]}`;
//     return second;
//   } else if (array.PCTime.length === 4) {
//     const second = `00:0${array.PCTime[0]}:${array.PCTime[1]}${array.PCTime[2]}`;
//     return second;
//   } else if (array.PCTime.length === 3) {
//     const second = `00:00:${array.PCTime[0]}${array.PCTime[1]}`;
//     return second;
//   }
// };
  })

  
  .catch(function (error) {
    console.log(error);
  });
});




