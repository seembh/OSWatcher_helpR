#!/bin/bash

# This script will create the specified directory in ./users/

directory=$1
directorypath=users/$1

# antiprost shield
[[ -z "$1" ]] && { echo "No directory name provided. Usage is: ./create_user.sh <directory_name>" ; exit 1; }

if [ -d $directorypath ] && [ "$(ls -A $directorypath)" ]; then
    echo -e "\nDirectory $directorypath is NOT Empty"  
    while true; do
            # antiprost
            read -p "Do you want to overwrite directory (this will erase all data within)? (y/n) " yn
            case $yn in 
                [yY] ) echo -e "\nOverwriting...";
                rm -rf $directorypath
                mkdir -p users/$directory/data && echo -e "- Created directory users/$directory\n" || echo -e "- Failed creating directory users/$directory\n"
                cp .OSW/* users/$directory -rf && echo -e "- Filled directory users/$directory with goodies\n" || echo -e "- Failed filling directory users/$directory with goodies\n"
                echo -e "- Now go there and read README\n\tcd users/$directory\n"
                    break;;
                [nN] ) echo -e "\nExiting...";
                    exit;;
                * ) echo invalid response;;
            esac
        done
else
    mkdir -p $directorypath/data && echo -e "- Created directory $directorypath" || echo -e "- Failed creating directory $directorypath\n"
    cp .OSW/* $directorypath -rf && echo -e "- Filled directory $directorypath with goodies\n" || echo -e "- Failed filling directory $directorypath with goodies\n"
    echo -e "- Now go there and read README\n\tcd $directorypath\n"
fi

