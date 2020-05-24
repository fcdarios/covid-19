<div align="center">
    <img style="border-radius: 25px;" src="public/logo.png">
    <h1 align="center">Proyecto final Covid-19</h1>
    <h4><a href="https://drive.google.com/file/d/1AwKEMz10ISvipGdUNJunljwkdjKT1aXS/view?usp=sharing">Documento del proyecto</a></h4>
</div>

### Paso 0 Clonar repositorio
    git clone https://github.com/fcdarios/covid-19.git

### Paso 1 Dentro de la carpeta de su proyecto ejecutar lo siguiente
    npm init -y
    npm install next react react-dom
    
### Paso 2 Dentro de su archivo package.json remplazar la parte de scripts con lo siguiente
    "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
    },

### Paso 3 Ejectuar
    npm run dev
    
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
