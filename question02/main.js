const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({'message':'resolved promise!'});
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'error': 'delayed exception!'});
        }, 500);
    });
}

resolvedPromise().then(res => console.log(res))

rejectedPromise().catch(err => console.log(err))
