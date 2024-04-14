<template>
    <div>
        <navbar-page></navbar-page>
        <login-page></login-page>
        <dialog-page></dialog-page>
    </div>
</template>
<script>
import RegisterPage from '@/components/RegisterPage.vue';
import NavbarPage from '@/components/NavbarPage.vue';
import DiablogPage from '@/components/DiablogPage.vue';
export default {
  name: 'ServiceView',
  components: {
    'navbar-page': NavbarPage,
    'login-page': RegisterPage,
    'dialog-page': DiablogPage,
  }
}
</script>