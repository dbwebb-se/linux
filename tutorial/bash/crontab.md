Crontab
==============================
Examples in Bash

1. `crontab -e` lets you edit the crontab file
2. At the bottom, add a line like this:  
`* * * * * /path/to/script.sh`  

Explenation of \*:  

\*  *  *  *  *  command to execute  
│ │ │ │ │  
│ │ │ │ │  
│ │ │ │ └───── day of week (0 - 6) (0 to 6 are Sunday to Saturday, or use names; 7 is Sunday, the same as 0)  
│ │ │ └────────── month (1 - 12)  
│ │ └─────────────── day of month (1 - 31)  
│ └──────────────────── hour (0 - 23)  
└───────────────────────── min (0 - 59)  

Example of script.sh
```sh

#!/bin/bash

echo "Testing" >> "cron_test.txt"  # appending "Testing" to the file "cron_test.txt" located in ~/


```

Reference and read more
------------------------------

[crontab](#)



Revision history
------------------------------

2015-06-23 (lew) PA1 First try.
