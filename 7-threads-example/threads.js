const { isMainThread, Worker, workerData } = require("worker_threads");

// to show threads run in same process
if (isMainThread) {
  console.log(`Main thread with PID: ${process.pid}`);
  new Worker(__filename, {
    workerData: [7, 3, 6, 5, 4],
  }); // points to this file
  new Worker(__filename, {
    workerData: [1, 9, 5, 3, 7],
  });
} else {
  console.log(`Worker with PID: ${process.pid}`);
  //even though sort() is blocking, thread takes advantage of our multi-cpu machines to run the code in parallel, thus there's no delay
  console.log(`${workerData} sorted is ${workerData.sort()}`);
}
