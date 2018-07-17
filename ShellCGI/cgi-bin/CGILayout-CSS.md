# CGI how to Layout CSS

- link a CSS file
```bash
#!/bin/bash
echo -e "Content/type: text/plain\n"
echo "<html><head><link rel=\"stylesheet\" type=\"text/css\" href=\"css/cgi.css\"/></head>"
echo "<body>"
echo "</body>"
echo "</html>"
```