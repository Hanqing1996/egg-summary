console.log('I am child process');

process.stdin.on('data',(data)=>{
    console.log(`father say:${data}`);
})

// ipc 模式
process.on('message',(data)=>{
    console.log(`ipc meassage:${data}`);
})
