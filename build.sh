#!/bin/bash

man2html hire.1 | \
  sed 's/hearts/\&hearts/g' | \
  awk '{ if(NR==8) { print "<HR>" } else { print $0 } }' \
  > index.html
