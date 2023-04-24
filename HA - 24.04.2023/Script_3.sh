#!/bin/bash

# c) Das BashScript soll ein Argument entgegen nehmen. 
# Wenn das Argument eine Zahl ist, soll das Script sagen: 
# "Das Argument ist eine Zahl". 
# Wenn das Argument ein Wort ist, soll das Script eine entsprechende Anzeigen schalten. 



echo "Bitte geben Sie ein Argument ein"
read Argument


# Argument ausgeben
echo "Das eingegebene Argument lautet: $Argument"


# Überprüfe, ob das Argument eine Zahl ist
 if [[ "$Argument" =~ ^[0-9]+$ ]]; then
  echo "Das Argument ist eine Zahl."
 else
   echo "Das Argument ist keine Zahl, sondern ein Wort."
 fi

