# 🎵 Apple Music Clone (React + Redux)

Un clon estético y funcional inspirado en **Apple Music**, construido utilizando **React**, **Redux Toolkit**, **Styled-Components** y con integración en tiempo real de la API de **Deezer**.

Este proyecto permite a los usuarios buscar álbumes, ver los detalles de las canciones dentro de cada álbum y gestionar una biblioteca personal de música de manera dinámica y moderna.

---

## 🚀 Características Clave

- **🔍 Búsqueda en Tiempo Real:** Barra de búsqueda dinámica vinculada a la API de Deezer. Busca álbumes instantáneamente conforme el usuario escribe.
- **📚 Biblioteca Personal:** Agrega y elimina tus álbumes favoritos de tu sección de biblioteca en tiempo real usando un estado global persistente con Redux.
- **📀 Detalle de Álbumes:** Vista dinámica (`/song/:id`) que carga de manera paralela la información detallada del álbum y la lista completa de pistas del mismo.
- **🎨 Interfaz Premium & Oscura:** Diseño responsivo de alta calidad basado en la estética de Apple Music, con tema oscuro personalizado, transiciones suaves y micro-interacciones interactivas.
- **⚡ Estado Predecible:** Manejo robusto del flujo de datos usando Redux Toolkit y operaciones asíncronas con `createAsyncThunk`.
- **🧪 Pruebas Unitarias:** Cobertura de tests para componentes críticos usando `@testing-library/react` y `Jest`.

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
| :--- | :--- |
| **React (v19)** | Biblioteca principal de UI. |
| **Redux Toolkit** | Gestión de estado global de la aplicación (búsqueda y biblioteca). |
| **React Router Dom (v7)** | Enrutamiento declarativo para navegación entre vistas y detalles. |
| **Styled-Components** | Estilado modular utilizando CSS-in-JS con soporte para temas globales. |
| **Axios** | Cliente HTTP para realizar peticiones eficientes a la API de Deezer. |
| **Deezer API** | Fuente externa de datos musicales (álbumes, pistas y artistas). |
| **Jest / RTL** | Pruebas de componentes y flujos de usuario. |

---

## 📂 Estructura del Proyecto

El proyecto sigue una estructura limpia y modularizada por responsabilidades:

```text
music-app/
├── public/                 # Archivos públicos y assets
├── src/
│   ├── components/         # Componentes modulares y reutilizables
│   │   ├── ASIDE-L/        # Barra lateral de navegación
│   │   ├── GENEROS-/       # Tarjetas de exploración por género
│   │   ├── HEADER/         # Cabecera principal y categorías
│   │   ├── INFO-SONG/      # Información adicional
│   │   ├── LIBRARY-SONGS/  # Sección de biblioteca personal
│   │   ├── MIN-SECTIONS/   # Elementos reutilizables de menú
│   │   ├── SEARCH-BAR/     # Input de búsqueda integrado con Redux
│   │   ├── SEARCH-RESULTS/ # Resultados dinámicos de búsqueda
│   │   ├── SONG-CM/        # Tarjeta reutilizable de Álbum/Canción (Song Card)
│   │   └── SONG-DETAIL/    # Vista detallada de canciones por álbum (TrackList)
│   ├── Hooks/              # Custom Hooks para llamadas de red (fetch)
│   │   ├── useFetchAlbums.js
│   │   ├── useFetchArtist.js
│   │   └── useFetchSongs.js
│   ├── Redux/              # Configuración del Store y Slices de Redux
│   │   ├── slices/
│   │   │   ├── librarySlice.js # Estado de la biblioteca personal
│   │   │   └── searchSlice.js  # Estado de la consulta y resultados de búsqueda
│   │   └── store.js        # Configuración global del configureStore
│   ├── theme/              # Diseño de temas y estilos globales
│   │   ├── index.js        # Tokens del tema (colores, fuentes)
│   │   └── GlobalStyles.js # Reset y estilos globales (Styled-Components)
│   ├── tests/              # Suite de pruebas unitarias
│   │   ├── App.test.jsx
│   │   ├── Header.test.jsx
│   │   ├── Library.test.jsx
│   │   ├── SearchBar.test.jsx
│   │   └── SearchResults.test.jsx
│   ├── App.js              # Enrutador principal y layout
│   ├── index.js            # Punto de entrada de la aplicación
│   └── main.css            # Estilos CSS generales
├── package.json            # Configuración de dependencias y scripts
└── README.md               # Este archivo de documentación
```

---

## ⚙️ Configuración e Instalación

### Requisitos Previos

- Tener instalado **Node.js** (versión 18 o superior recomendada).
- Gestor de paquetes **npm** o **pnpm**.

### Instrucciones de Clonado y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/music-App-react.git
   cd music-App-react/music-app
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   # o si usas pnpm
   pnpm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start
   ```
   La aplicación se abrirá automáticamente en tu navegador favorito en [http://localhost:3000](http://localhost:3000).

---

## 🌐 Configuración de Proxy (CORS)

Dado que la API de Deezer bloquea llamadas cruzadas directas desde el navegador (CORS), la aplicación utiliza una propiedad proxy configurada dentro del archivo `package.json` para redirigir las solicitudes a través del servidor de desarrollo de React:

```json
"proxy": "https://api.deezer.com"
```

Esto permite consultar rutas locales como `/search/album?q=...` y que el servidor de desarrollo las delegue de forma segura a `https://api.deezer.com/search/album?q=...`.

---

## 🧪 Pruebas Unitarias

El proyecto viene integrado con un conjunto completo de pruebas unitarias para garantizar el correcto funcionamiento de los componentes y flujos:

Para ejecutar todas las pruebas en modo interactivo:
```bash
npm test
```

### Cobertura de Pruebas

La cobertura de tests está configurada en `package.json` para recolectar información sobre los siguientes componentes y archivos:
- `src/components/**/*`
- `src/Redux/**/*`
- `src/App.js`

---

## 💡 Futuras Mejoras

- 🔊 **Reproductor de audio integrado:** Permitir escuchar el preview de 30 segundos que provee la API de Deezer directamente en la aplicación.
- 🌙 **Cambio dinámico de temas:** Agregar soporte para alternar entre modo claro y oscuro.
- 📱 **Soporte Offline:** Persistir los datos de la biblioteca personal en `localStorage` o utilizando Service Workers para soporte PWA.
