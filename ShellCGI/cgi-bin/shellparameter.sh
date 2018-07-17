#!/bin/bash
# CORS is the way to communicate, so lets response to the server first
echo "Content-type: text/html" # set the data-type we want to use
echo "" # we don't need more rules, the empty line initiate this.
# CORS are set in stone and any communication from now on will be like reading a html-document.
# Therefor we need to create any stdout in html format!
# create html scructure and send it to stdout
echo "<!DOCTYPE html>"
echo "<html><head>"
# The content will be created depending on the Request Method
if [ "$REQUEST_METHOD" = "GET" ]; then
    Var1=$(echo "$QUERY_STRING" | sed -n 's/^.*var1=\([^&]*\).*$/\1/p')
    Var1_Dec=$(echo -e $(echo "$Var1" | sed 's/+/ /g;s/%\(..\)/\\x\1/g;'))
    Var2=$(echo "$QUERY_STRING" | sed -n 's/^.*var2=\([^&]*\).*$/\1/p')
    Var2_Dec=$(echo -e $(echo "$Var2" | sed 's/+/ /g;s/%\(..\)/\\x\1/g;'))
    echo "<title>Bash-CGI Example 1</title>"
    echo "</head><body>"
    echo "<h1>Bash-CGI Example 1</h1>"
    echo "<p>QUERY_STRING: ${QUERY_STRING}<br>var1=${Var1_Dec}<br>var2=${Var2_Dec}</p>"
else
    echo "<title>456 Wrong Request Method</title>"
    echo "</head><body>"
    echo "<h1>456</h1>"
    echo "<p>Requesting data went wrong.<br>The Request method has to be \"GET\" only!</p>"
fi
ANSIBLE=`anblie-playbook $var`
echo "$ANSIBLE"
echo "<hr>"
echo "$SERVER_SIGNATURE" # an other environment variable
echo "</body></html>" # close html
exit(0)