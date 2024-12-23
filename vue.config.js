const { defineConfig } = require('@vue/cli-service')
module.exports = {
  pwa: {
    name: "Mi PWA", // Nombre de la app (se muestra en pantalla de inicio al instalarla)
    themeColor: "#42b883", // Color principal de la app (barra de navegación en Android)
    msTileColor: "#ffffff", // Color del ícono en Windows
    appleMobileWebAppCapable: "yes", // Habilita comportamiento como app en iOS
    appleMobileWebAppStatusBarStyle: "black", // Estilo de la barra de estado en iOS
    manifestOptions: {
      short_name: "PWA", // Nombre corto para íconos o instaladores
      background_color: "#ffffff", // Color de fondo cuando la app se carga
    },
    workboxOptions: {
      skipWaiting: true, // Hace que el Service Worker se active inmediatamente
      clientsClaim: true, // Hace que la PWA tome control de la página automáticamente
    },
  },
};