#!/bin/bash

# If something fails, make sure you read the README.txt and the following comments
# This will use 10GB for the heap memory - change accordingly (if oswbba fails, increase heap memory)
# If you specify -L output/ it will write files to ./output/ (current directory/output/)

java -jar -Xmx10240M oswbba.jar -i data/archive/ #-L output/
