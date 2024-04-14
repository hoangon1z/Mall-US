<template>
    <div>
        <navbar-page></navbar-page>
        <login-page></login-page>
    </div>
</template>
<script>
import LoginPage from '@/components/LoginPage.vue';
import NavbarPage from '@/components/NavbarPage.vue';
export default {
  name: 'ServiceView',
  components: {
    'navbar-page': NavbarPage,
    'login-page': LoginPage,
  }
}
</script>