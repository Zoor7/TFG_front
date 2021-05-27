# heroku-deploy

heroku-cli:
https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

## Instalación y deploy

Necesitas tener instalado el plugin heroku-cli antes de empezar.

```bash
npm install -g heroku
```

Dentro del directorio del proyecto inicia sesión en la terminal:

```bash
heroku login
```

Crea el proyecto de heroku (esto creará un remote de git donde hacer el push):

```bash
heroku create <Nombre web>
```

Haz push para que heroku comience a hacer la build:

```bash
git push heroku main
```

Si tienes problemas al generar la build lee los logs que te da heroku:

```bash
heroku logs --tail
```
