#!/bin/bash

# This script will run the one liner against all specified directories in dirlist.txt

dirlist=$1

# Validate at least one file was provided
[[ -z "$1" ]] && { echo "No directory list provided. Usage is: ./runCount.sh <directory_list>" ; exit 1; }

mkdir output_$dirlist


while read line; do
    find $line -maxdepth 1 -mindepth 1 -type d -exec sh -c 'echo "{} : $(find "{}" -type f | wc -l)" file\(s\) "==> $(du -sh "{}" | cut -f 1)" ' \; | sort -n -r -k3 > output_$dirlist/file_count_$line.txt

done < "$dirlist"




#find dirname -maxdepth 1 -mindepth 1 -type d -exec sh -c 'echo "{} : $(find "{}" -type f | wc -l)" file\(s\) "==> $(du -sh "{}" | cut -f 1)" ' \; | sort -n -r -k3 > file_count_dirname.txt

