## run Shell cgi to display the output on HTML
 -[x] install fcgiwrap

	bash shell
	apt install fcgiwrap


 -[x] fcgiwrap conf with nginx

	 bash
	 location ~ (\.sh|\.lua)$ {
    root /var/www/html/xxx/cgi-bin;
    include fastcgi_params;
    fastcgi_pass unix:/var/run/fcgiwrap.socket;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

 
