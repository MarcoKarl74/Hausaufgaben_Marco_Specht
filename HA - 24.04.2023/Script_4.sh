#!/bin/bash

# d) Das BashScript soll dich dazu auffordern, deinen Namen und dein Alter einzugeben, 
# sowie deine Lieblingstechnologie. Das Script soll anschließend die Aussage 
# "Ich bin ... und ich bin ... Jahre alt. Meine Lieblingstechnologie ist ..." auf die Konsole printen.


# Fordere den Benutzer auf, den Namen einzugeben
echo "Gib bitte deinen Namen ein: "
read name

# Fordere den Benutzer auf, das Alter einzugeben
echo "Gib bitte dein Alter ein: "
read age

# Fordere den Benutzer auf, die Lieblingstechnologie einzugeben
echo "Gib bitte deine Lieblingstechnologie ein: "
read tech

# Gib die Ausgabe auf der Konsole aus
echo "Ich bin $name und ich bin $age Jahre alt. Meine Lieblingstechnologie ist $tech."
