<template>
  <div>
    <LoginForm />
    <reportForm />
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import ReportForm from "./components/ReportForm.vue";
export default {
  components: {
    LoginForm,
    ReportForm,
  },
};
</script>