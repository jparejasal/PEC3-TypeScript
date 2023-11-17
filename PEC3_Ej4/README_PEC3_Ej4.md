Pasos para transpilar y ejecutar la aplicación:

1. Instalar typescript: npm install -g typescript
2. Crear documento tsconfig.json: tsc --init

3. Activar y configurar las siguientes propiedades del documento tsconfig.json generado, con los valores indicados:
"target": "es5",
"module": "es2015",
"moduleResolution": "node",
"allowJs": true,                                  
"checkJs": true, 

"include": [
    "models/*.ts", // Incluye todos los archivos TypeScript en la carpeta models
    "views/*.ts", // Incluye todos los archivos TypeScript en la carpeta views
    "controllers/*.ts", // Incluye todos los archivos TypeScript en la carpeta controllers
    "services/*.ts", // Incluye todos los archivos TypeScript en la carpeta services
    "*.ts" // Incluye todos los archivos TypeScript en la raíz
  ],
  "exclude": [
    "node_modules", // Carpeta generalmente excluida de la transpilación
    "**/*.test.ts" // Excluir archivos de pruebas si los tienes
  ]

4. Se ejecuta el comando tsc (el cual busca el archivo tsconfig.json en la capreta raíz y hace la traspilación de los archivos .ts, en base a las configraciones realizadas en el archivo tsconfig.json)

5. Ejecución: ejecutar html en live; con la siguiente configuración en el bloque de scripts:
<script type="module" src="./models/todo.model.js"></script>
<script type="module" src="./services/todo.service.js"></script>
<script type="module" src="./controllers/todo.controller.js"></script>
<script type="module" src="./views/todo.views.js"></script>
<script type="module" src="./app.js"></script>