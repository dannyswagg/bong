FROM nginx:1.25.3
WORKDIR /etc/nginx
COPY ./default.conf.template ./templates/

RUN apt update
RUN apt install -y openssl apache2-utils
RUN htpasswd -cb /etc/nginx/.admin.htpasswd adminLv1 IKUYS87jHG
RUN htpasswd -cb /etc/nginx/.actrl.htpasswd actrlLv1 KJiyKJSHSxUWi
RUN htpasswd -cb /etc/nginx/.sale.htpasswd saleLv1 kjUjHG7hg