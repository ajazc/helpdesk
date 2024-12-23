<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card shadow p-4" style="max-width: 400px; width: 100%;">
        <h2 class="text-center mb-4">Iniciar Sesión</h2>
        <form @submit.prevent="handleLogin">
          <!-- Campo de correo o usuario -->
          <div class="mb-3">
            <label for="username" class="form-label">Correo o Nombre de Usuario</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="username"
              placeholder="Ingresa tu correo o usuario"
              required
            />
          </div>
  
          <!-- Campo de contraseña -->
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
  
          <!-- Botón de enviar -->
          <button type="submit" class="btn btn-primary w-100" :disabled="loading">
            {{ loading ? "Cargando..." : "Iniciar Sesión" }}
          </button>
  
          <!-- Mensaje de error -->
          <div v-if="error" class="alert alert-danger mt-3 text-center" role="alert">
            {{ error }}
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "", // Correo o usuario ingresado
        password: "", // Contraseña ingresada
        error: null, // Mensaje de error
        loading: false, // Indica si se está enviando la solicitud
      };
    },
    methods: {
      async handleLogin() {
        this.error = null; // Resetea el error
        this.loading = true; // Activa el estado de carga
  
        try {
          // Simulación de envío a la API
          const response = await fetch("https://api.tu-dominio.com/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password,
            }),
          });
  
          // Verificar si las credenciales son válidas
          if (!response.ok) {
            throw new Error("Credenciales incorrectas. Inténtalo de nuevo.");
          }
  
          // Obtener los datos del usuario (opcional)
          const data = await response.json();
          console.log("Inicio de sesión exitoso:", data);
  
          // Redirigir al usuario o guardar el token en el almacenamiento local
          alert("¡Inicio de sesión exitoso!");
          localStorage.setItem("token", data.token); // Almacena el token
        } catch (error) {
          this.error = error.message; // Muestra el error en el formulario
        } finally {
          this.loading = false; // Desactiva el estado de carga
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ya no es necesario un estilo personalizado extenso */
  .vh-100 {
    height: 100vh;
  }
  </style>
  