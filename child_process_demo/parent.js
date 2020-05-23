const {spawn} = require('child_process');

const child = spawn(
    'node',
    ['./child.js', 'abc'],
    {
        stdio: ['pipe', 'pipe', 'pipe','ipc'],
    }
)

// 新创建的进程 pid
console.log(process.pid);

// stream
child.stdout.on('data', (data) => {
    console.log(`This is message from child process:${data}`);
})

child.stdin.write('greeting from father')

// ipc 传递消息
child.send('msg')