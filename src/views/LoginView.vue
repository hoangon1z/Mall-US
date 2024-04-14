<template>
    <div>
        <navbar-page></navbar-page>
        <login-page></login-page>
        <dialog-page></dialog-page>
    </div>
</template>
<script>
import LoginPage from '@/components/LoginPage.vue';
import DiablogPage from '@/components/DiablogPage.vue';
import NavbarPage from '@/components/NavbarPage.vue';
export default {
  name: 'ServiceView',
  components: {
    'navbar-page': NavbarPage,
    'login-page': LoginPage,
    'dialog-page': DiablogPage,
  }
}
</script>