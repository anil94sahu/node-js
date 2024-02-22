// libuv : cross platform open source library written in c language.
// handle asynchronous non-blocking operations in node js
// Thread pool and event loop

// Experiment 1 : Every method in node js that has the "sync" suffix
// always runs on the main thread and is blocking

// Experiment 2 : A faw async method like fs.readFile and crypto.pbkdf2 run
// on a seprate thread in libuv's thread pool. They do run synchronously in their
// own thread but as fas as the main thread is concerned, it sppears as if the method is 
// running asynchronously.

// Experiment 3 : Libuv thread is only 4 thread 

// Experiment 4 : By increasing the thread pool size, we are able to improve 
// the total time taken to run multiple calls of an asyncronous method like pbkdf2

// Experiment 5 : Increasing the thread pool size can help with performance
// but that is limited by the number of available CPU cores


// Experiment 6 : Although both crypto.pbkdf2 and https.request are asynchronous
// https.request method does not seem to use the thread pool. https.request does
// not seem to be affected by the number of cpu cores.

// https.request is a network I/O operation and not a CPU bounf operation
// It does not use the thread pool
// Libuv instead delegates the work to the operating sysntem kernel and 
// whenever possible, it will poll the kernel and see if the request has completed.

// In node js, async method are handles by libuv
// They are handled in 2 different ways
// 1. Native async mechanism
// 2. Thread pool

// Whenever possible , Libuv will use native async mechanism in the OS so as to avoid
// blocking the main thread.

// Since this is the part of kernel, there is different mechanis for each OS. We have 
// Linux > epoll
// Mac > Kqueue
// Windows > IO Completion port

// If there is no native support then the task is intensive, then libux uses
// the thread pool to avoid blocking the main thread

const crypt = require('node:crypto');

process.env.UV_THREAD_POOL_SIZE = 5

/* const start = Date.now();
crypt.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypt.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypt.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
console.log(`Hash :`, Date.now() - start); */

const MAX_CALLS = 16;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
    crypt.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
        console.log(`Hash : ${i + 1}`, Date.now() - start);
    });

    
}