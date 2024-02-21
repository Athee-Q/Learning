// Simulating asynchronous operations
function asyncOperation1(callback) {
    setTimeout(function () {
      console.log("Async Operation 1 completed");
      callback("Result 1");
    }, 1000);
  }
  
  function asyncOperation2(data, callback) {
    setTimeout(function () {
      console.log("Async Operation 2 completed with data: " + data);
      callback("Result 2");
    }, 1000);
  }
  
  function asyncOperation3(data, callback) {
    setTimeout(function () {
      console.log("Async Operation 3 completed with data: " + data);
      callback("Result 3");
    }, 1000);
  }
  
  // Callback hell
  asyncOperation1(function (result1) {
    asyncOperation2(result1, function (result2) {
      asyncOperation3(result2, function (result3) {
        console.log("Final result: " + result3);
      });
    });
  });
  