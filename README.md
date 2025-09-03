# PIXIMG 🖼️

Una aplicación moderna de búsqueda de imágenes construida con **React** y **Vite**, que permite explorar millones de imágenes gratuitas utilizando la API de Pixabay.

## ✨ Características

- 🔍 **Búsqueda en tiempo real** de imágenes de alta calidad
- 📱 **Diseño completamente responsive** para móvil, tablet y escritorio
- 🎨 **Interfaz moderna y minimalista** con animaciones suaves
- 📄 **Paginación inteligente** para navegar por miles de resultados
- ⚡ **Performance optimizada** con hooks personalizados
- 🛡️ **Manejo robusto de errores** y estados de carga
- 🎯 **Estados vacío y loading** para mejor UX
- ♿ **Accesible** con buenas prácticas de web semántica

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework:** React 18+
- **Build Tool:** Vite
- **Styling:** CSS3 con Variables Personalizadas
- **Fonts:** Google Fonts (Poppins)
- **API:** Pixabay API
- **Estado:** React Hooks (useState, useEffect, custom hooks)

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 16.0 o superior)
- npm o yarn
- API Key de Pixabay (gratuita)

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/cmurestudillos/buscador-de-imagenes.git
   cd piximg
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   VITE_PIXABAY_API_KEY=tu_api_key_aqui
   ```
   
   > 📝 **Obtener API Key:** Regístrate en [Pixabay](https://pixabay.com/api/docs/) para obtener tu clave gratuita

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Estructura del Proyecto

```
piximg/
├── public/
│   ├── logo.png
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── App.css
│   │   └── img/
│   │       └── logo.png
│   ├── components/
│   │   ├── shared/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Error.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── EmptyState.jsx
│   │   ├── Imagen.jsx
│   │   └── ListadoImagenes.jsx
│   ├── hooks/
│   │   ├── usePixabayAPI.js
│   │   └── useDebounce.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

## 💻 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa del build
npm run preview

# Linting
npm run lint
```

## 🎨 Características de Diseño

- **Paleta de colores moderna:** Escala de grises con acentos
- **Tipografía:** Poppins de Google Fonts
- **Grid responsivo:** 1 columna (móvil) → 2 columnas (tablet) → 3 columnas (desktop)
- **Animaciones suaves:** Transiciones CSS optimizadas
- **Mobile-first:** Diseñado primero para dispositivos móviles

## 🔧 Funcionalidades Principales

### Búsqueda Avanzada
- Búsqueda instantánea con validación
- Manejo de errores de entrada
- Estados de carga visuales

### Navegación
- Paginación completa con controles anteriores/siguientes
- Información de página actual y total
- Scroll automático al cambiar página

### Visualización de Imágenes
- Tarjetas con información (likes, vistas)
- Enlaces directos a imágenes de alta resolución
- Previews optimizadas

## 🌐 API Integration

La aplicación utiliza la [Pixabay API](https://pixabay.com/api/docs/) que ofrece:

- **20,000 requests/hora** en plan gratuito
- **Imágenes de alta calidad** libres de derechos
- **Búsqueda por categorías** y términos
- **Filtros de seguridad** integrados

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta dist/ a Netlify
```

### Manual
```bash
npm run build
# Servir carpeta dist/ desde tu servidor web
```

> ⚠️ **Importante:** Configura las variables de entorno en tu plataforma de hosting

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📋 Roadmap

- [ ] Implementar modo oscuro
- [ ] Añadir funcionalidad de favoritos
- [ ] Lazy loading de imágenes
- [ ] Filtros avanzados (tamaño, color, tipo)
- [ ] PWA (Progressive Web App)
- [ ] Tests unitarios e integración
- [ ] Internacionalización (i18n)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [Pixabay](https://pixabay.com/) por proporcionar la API gratuita
- [React](https://reactjs.org/) por el increíble framework
- [Vite](https://vitejs.dev/) por las herramientas de desarrollo
- Comunidad open source por la inspiración

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- 🐛 [Reportar un bug](https://github.com/cmurestudillos/buscador-de-imagenes/issues)
- 💡 [Solicitar feature](https://github.com/cmurestudillos/buscador-de-imagenes/issues)

---

<div align="center">

**⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub! ⭐**

[Demo en Vivo](https://buscador-imagenes-app.vercel.app) • [Reportar Bug](https://github.com/cmurestudillos/buscador-de-imagenes/issues) • [Solicitar Feature](https://github.com/cmurestudillos/buscador-de-imagenes/issues)

</div>