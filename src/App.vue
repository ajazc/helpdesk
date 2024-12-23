<template>
  <div>
    <LoginForm />
    
  </div>
  <div>
    <reportForm />
  </div>
  <div>
    <ListadoIncidentes/>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import ReportForm from "./components/ReportForm.vue";
import ListadoIncidentes from "./components/ListadoIncidentes.vue";
export default {
  components: {
    LoginForm,
    ReportForm,
    ListadoIncidentes,
  },
};
</script>