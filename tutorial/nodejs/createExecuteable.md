# Create a executable javascript-cli

## Create the script

1. Create a new file named `exampleCli.js`. 
2. Copy the javascript found below into the new file.
    ```javascript
    // Takes all the incoming arguments and removes
    // the first 2 since its the filename and the env 
    var arguments = process.argv.slice(2);

    // "routes" or switches on them to see
    //  if they match anything pre-defined.
    arguments.forEach(function(arg) {
        if (arg === '--version') {
            console.log('v1.0.0')
        } else {
            console.log('Argument didn\'t match the available arguments');
        }
    });
    ```
3. Test the new script by the following command: `nodejs exampleCli.js --version`

## Make it executeable 

1. Add the appropriate shebang. In my case `#!/usr/bin/env nodejs`.    
     This might differ for you. If you are on a Windows or
a Mac machine it might look something like this 
`#!/usr/bin#/env node`. It's important that the shebang is 
placed  on the first row in the script. 
   
    *The file should now look something like this:*
    ```javascript
    #!/usr/bin/env nodejs
    
    var arguments = process.argv.slice(2);
    arguments.forEach(function(arg) {
       // Same stuff as before ...
    });
   ```
3. Change the permissions on the file and test the new script.
    1. Change the permissions on the file
    ```bash
    $ sudo chmod +x exampleCli.js
    ```
    2. Run the script
    ```bash
    $ ./exampleCli.js
    ```

## Move the file
Now it is time to make the script executeable from anywhere in 
the file system. To do that the following steps needs to be 
completed.

1. Copy the file to `/usr/local/bin/`.
    ```bash
    $ sudo cp exampleCli.js /usr/local/bin/exampleCli
    ```
2. Change permission on the executable file.
    ```bash
    $ sudo chmod +x /usr/local/bin/exampleCli
    ```
3. Run the exacuteable.
    ```bash
    $ exampleCli --version
    v1.0.0
    ```

#### Alternative way of creating a executable from anywhere in the file system

An alternative to this is to create a soft-link (symlink) from
the script to the `/usr/local/bin` directory. To achieve 
this, follow the steps below.

1. Create a symlink to the `/usr/local/bin` directory
    ```bash
    $ sudo ln -s $(pwd)/exampleCli.js /usr/local/bin/exampleCli
    ```
2. Change premissions on the executable file.
    ```bash
    $ sudo chmod +x index.js
    ```
3. Run the exacuteable.
    ```bash
    $ exampleCli --version
    v1.0.0
    ```

Reference and read more
------------------------------

[ln](http://explainshell.com/explain/1/ln)    
[chmod](http://explainshell.com/explain/1/chmod)    
[pwd](http://explainshell.com/explain/1/pwd)

Revision history
------------------------------

2015-07-14 (foiki) Initial draft.
