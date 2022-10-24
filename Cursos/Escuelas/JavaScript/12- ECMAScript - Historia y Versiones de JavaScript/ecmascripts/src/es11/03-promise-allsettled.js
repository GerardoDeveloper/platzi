const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

Promise.allSettled([promise1, promise2, promise3])
  .then(response => {

    /**
     * [
        { status: 'rejected', reason: 'reject' },
        { status: 'fulfilled', value: 'resolve' },
        { status: 'fulfilled', value: 'resolve2' }
       ]
     */
    console.log(response)
  });