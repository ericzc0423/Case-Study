## code: 'ER_NOT_SUPPORTED_AUTH_MODE', errno: 1251

   **Reason**

   **MySQL doesn't Node.JS

   **`Solution`**

   ```SQL
   `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'`
   ```
   Check the plugin
   ```SQL
   mysql> melect Host, User,plugin from user;
   +-----------+------------------+-----------------------+
   | Host      | User             | plugin                |
   +-----------+------------------+-----------------------+
   | localhost | mysql.infoschema | mysql_native_password |
   | localhost | mysql.session    | mysql_native_password |
   | localhost | mysql.sys        | mysql_native_password |
   | localhost | root             | mysql_native_password |
   +-----------+------------------+-----------------------+
   4 rows in set (0.00 sec)
   ```
   MySQL default_authentication_plugin
   reference:

   In MySQL 8.0, caching_sha2_password is the default authentication plugin rather than mysql_native_password. For information about the implications of this change for server operation and compatibility of the server with clients and connectors, see [caching_sha2_password as the Preferred Authentication Plugin]
   https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html#upgrade-caching-sha2-password