#!/bin/bash
mkdir ~/unix_tests && cd unix_tests
touch trybe.txt
cp trybe.txt trybe_backup.txt
mv trybe.txt trybe2.txt
mkdir backup
mv trybe_backup.txt backup/
