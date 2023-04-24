#!/bin/bash

# b) Das BashScript soll prüfen, ob der Ordner /etc/default existiert. 
# Wenn ja, ob dort die Datei /etc/default/pam.conf existiert. 
# Wenn ja, soll das BashScript eine positive Rückmeldung mit `echo` an den User zurückgeben. 
# Wenn nein, soll das Script nach der Datei pam.conf suchen. Zeige die Ergebnisse auf der Konsole an. 


#!/bin/bash

# Prüfe, ob der Ordner /etc/default existiert
if [ -d "/etc/default" ]; then
  echo "Der Ordner /etc/default existiert."

  # Prüfe, ob die Datei /etc/default/pam.conf existiert
  if [ -f "/etc/default/pam.conf" ]; then
    echo "Die Datei /etc/default/pam.conf existiert."
  else
    echo "Die Datei /etc/default/pam.conf existiert nicht."
    echo "Suche nach der Datei pam.conf..."
    find / -name "pam.conf" 2>/dev/null
  fi
else
  echo "Der Ordner /etc/default existiert nicht."
fi
