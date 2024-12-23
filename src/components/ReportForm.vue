<template>
  <div class="report-form">
    <h2>Reporte de Incidencia</h2>
    <form @submit.prevent="submitReport">
      <div class="form-group">
        <label for="image">Subir Imagen:</label>
        <input type="file" id="image" @change="onFileChange" />
      </div>
      <div class="form-group">
        <label for="comment">Comentario del Error:</label>
        <textarea id="comment" v-model="comment" required></textarea>
      </div>
      <div class="form-group">
        <label for="type">Tipo de Incidencia:</label>
        <select id="type" v-model="type" required>
          <option value="operaciones">Operaciones</option>
          <option value="problema de software">Problema de Software</option>
        </select>
      </div>
      <button type="submit">Enviar Reporte</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: null,
      comment: "",
      type: "operaciones",
    };
  },
  methods: {
    onFileChange(event) {
      this.image = event.target.files[0];
    },
    submitReport() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("comment", this.comment);
      formData.append("type", this.type);

      // Aquí puedes enviar el formData a tu servidor
      console.log("Reporte enviado:", formData);
    },
  },
};
</script>

<style scoped>
.report-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type="file"],
textarea,
select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
