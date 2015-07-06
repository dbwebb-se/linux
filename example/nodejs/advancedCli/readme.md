
# Advanced comandline interface

In this folder you will find a example on how to build a more advanced cli.

## Run example
The example is written in ECMAScript 5 so to run this use:

```bash
$ nodejs index.js
```

## Create a executable javascript-cli

**Step 1:** Copy the file to `/usr/local/bin/`.
```bash
$ sudo cp index.js /usr/local/bin/exampleCli
```

**Step 2:** Change permission on the executable file.
```bash
$ sudo chmod +x /usr/local/bin/exampleCli
```

**Step 3:** Run the exacuteable.
```bash
$ exampleCli --version
v1.0.0Create a executable javascript-cli

Step 1: Copy the file to /usr/local/bin/.
```

### Alternative way of creating a executable

An alternative to this is to create a soft-link (symlink) from the script to the `/usr/local/bin` directory. You can do this by this command

**Pre-condition:** Change directory to `advancedCli`.

**Step 1:** Create a symlink to the `/usr/local/bin` directory
```bash
$ sudo ln -s $(pwd)/index.js /usr/local/bin/exampleCli
```
**Step 2:** Change premissions on the executable file.
```bash
$ sudo chmod +x index.js
```
**Step 3:** Run the exacuteable.
```bash
$ exampleCli --version
v1.0.0
```

Reference and read more
------------------------------

[ln](http://explainshell.com/explain/1/ln)


Revision history
------------------------------

2015-07-06 (foiki) Initial draft.
