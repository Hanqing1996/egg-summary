console.log('I am child process');

process.stdin.on('data',(data)=>{
    console.log(`father say:${data}`);
})