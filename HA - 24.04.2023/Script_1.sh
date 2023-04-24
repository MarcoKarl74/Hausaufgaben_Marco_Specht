#!/bin/bash
 
# Aufgabe: Schreibe ein Bash Script. 


# a) Das BashScript soll prüfen, ob die Datei /etc/resolv.conf vorhanden ist. 
# Wenn ja, soll das BashScript eine positive Rückmeldung mit `echo` ausdrucken. 
# Wenn nein, soll das Script dies ebenfalls erklären. 
 

if [ -e /etc/resolv.conf ]; then
  echo "Die Datei /etc/resolv.conf existiert."
else
  echo "Die Datei /etc/resolv.conf existiert nicht."
fi


