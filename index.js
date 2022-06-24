const cron = require('node-cron');

var _0xb48d=["\x30\x39\x33\x38\x35\x36\x38\x30\x34\x30","\x55\x46\x54\x4E\x47\x39\x75\x7A\x71\x24\x7A\x75\x25\x34\x62\x55\x4E\x4D\x61\x75","\x31\x30\x31\x32\x38\x34\x32\x38\x35\x31","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x76\x63\x62\x2E\x68\x6F\x70\x68\x61\x6D\x6C\x61\x6D\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x76\x63\x62\x2F\x74\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x73"];const username=_0xb48d[0];const password=_0xb48d[1];const accountNumber=_0xb48d[2];const vcbFetchLink=_0xb48d[3]


var axios = require('axios');
var data = JSON.stringify({
  "begin": "19/06/2022",
  "end": "19/06/2022",
  "username": username,
  "password": password,
  "accountNumber": accountNumber
});

var config = {
  method: 'post',
  url: vcbFetchLink,
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




