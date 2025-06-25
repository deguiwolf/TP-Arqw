const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./Arqweb/config/DB'); // Conexión MongoDB

const cursoRoutes = require('./Arqweb/routes/cursoRoutes');
const estudianteRoutes = require('./Arqweb/routes/estudianteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB Atlas
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/api/cursos', cursoRoutes);
app.use('/api/estudiantes', estudianteRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('🎓 API de Gestión de Cursos y Estudiantes');
});

// Manejador global de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});


/*

const express = require("express");
const app = express();//construye el objeto app

const http = require("https").createServer(app);
const cors = require("cors");

const PORT = process.env.PORT || 5000;
require("./Arqweb/config/DB")(); // Conectar a la base de datos

http.listen(PORT, () => {
    console.log(` Listening to ${PORT} `);
});
*/