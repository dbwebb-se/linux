# How to read cli input with nodejs

There are diffrent ways of reading the input from a nodejs script. You can use the already existing module [readline](https://nodejs.org/api/readline.html) or you can use the [process](https://nodejs.org/api/process.html) and listen on events on the process.

Here is an example on how to listen on events via the `process`.

```javascript
// To be able to read utf-8 chars like: åäö
process.stdin.setEncoding('utf8');
// Listen on something readable.
process.stdin.on('readable', function() {
    // Read the incoming line
    var data = process.stdin.read();

    if (data !== null) {
        // Since it reads the [enter] too, we need to remove it
        data = data.replace('\n', '');

        // Prints whats been written
        console.log('You wrote: ' + data);

        // We want to be able to switch on the
        // incoming data.
        if (data === 'kalle') {
            console.log('Kalle är inte här :\'(');
        } else if (data === 'exit') {
            process.exit(0);
        }
    }
});
```

Reference and read more
------------------------------

[Readline](https://nodejs.org/api/readline.html)    
[Process](https://nodejs.org/api/process.html#process_process_stdin)    

Revision history
------------------------------

2015-07-14 (foiki) Initial draft.
