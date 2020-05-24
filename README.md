<div align="center">
    <img style="border-radius: 25px;" src="public/logo.png">
    <h1 align="center">Proyecto final Covid-19</h1>
    <h4><a href="https://drive.google.com/file/d/1AwKEMz10ISvipGdUNJunljwkdjKT1aXS/view?usp=sharing">Documento del proyecto</a></h4>
</div>

### Paso 0 Crear proyecto react
##### En su lap ejecutan el siguiente comando para crear el proyecto
    npx create-react-app covid-19

##### Borrar las siguientes carpetas
    ./public
    ./src
##### Borrar los siguientes archivos
    README.md

### Paso 1 Dentro de la carpeta de su proyecto ejecutar lo siguiente
    git init
    git remote add origin https://github.com/fcdarios/covid-19.git
    git config --global credential.helper wincred
    git remote
    git pull origin master


### Paso 2 Ejectuar
    npm start
    

## Comandos git

###### 1 Antes de subir cualquier cambio hacer pull
###### 2 Si no quieren subir todos los cambios especificar los archivos en el git add. Sin el -A

    git pull origin master
    git add -A
    git commit -m "Mensaje de cambios realizados"
    git push origin master



### Versiones
- NodeJS v12.16.X
- npm 6.14.X


#### Guardar credenciales de git
    git config credential.helper store
    git pull
