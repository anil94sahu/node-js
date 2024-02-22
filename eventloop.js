// Experiment 1 : All user written synchronous js code takes priority
// over async code that the runtime would like to eventually execute

// Experiment 2 : All callbacks in nexttick queue is execute before promise queue

// Experiment 3 : Callback in the microtask queues are executed before callback
// in the timer queue

// Experiment 4 : Callback in microtaask ququ are executed in between the execution of callback in the timer quque.

// Experiment 5 : Timer queue callbacks are executed in FIFO order

// Experiment 6 : Callback in the microtask queues are executed before callback in the I/O queue

// Experiment 7 : When running  setTimeout with delay 0ms and an I/O async method, the order of execution can never be guaranteed

// Experiment 8 : I/O callback is executed after microtask and timer queue.

// Experiment 9 : I/O events are poled and callback functions are added to the I/O queue only after 
// the I/O is completed

// Experiment 10 : check queue callback executed after microtask, timer, i/o queue callback



setTimeout(() => console.log('timeout 1'))
setTimeout(() => {console.log('timeout 2'),Promise.resolve().then(() => console.log('prmose inner 2'))})
setTimeout(() => console.log('timeout 3'))