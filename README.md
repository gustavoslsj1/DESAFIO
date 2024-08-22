# 
Instalações para que a api fucione 

npm i node js 
npm i 
npm i streamifier
npm install cloudinary
npm i --save-dev @types/multer 
npm i @nestjs/config
npm i --save-dev @types/multer 

Crie um arquivo .env com as seguintes variaveis
DB_HOST= localhost
DB_PORT= 5432
DB_USERNAME= postgres
DB_PASSWORD= 12345678
DB_NAME= task-management-api
CLOUDINARY_NAME = dqbandefj
CLOUDINARY_API_KEY= 948932619163376
CLOUDINARY_API_SECRET= TV7OKbwZlONg-z_d5SdeBAwUeZc

inicializar o docker "docker compose up -d " e conectar com o banco de dados 
    


Execuçoes do projeto :
npm run migration:run 
npm start

verifique a conexão com o banco de dados caso ocorra um erro 

