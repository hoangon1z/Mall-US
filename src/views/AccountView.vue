<template>
    <div>
        <info-page></info-page>
        <content-page></content-page>
        <navbar-page></navbar-page>
        <footer-page></footer-page>
    </div>
</template>
<script>
import InfoAccount from '@/components/InfoAccount.vue';
import ContentAccount from '@/components/ContentAccount.vue';
import NavbarPage from '@/components/NavbarPage.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  name: 'ServiceView',
  components: {
    'info-page': InfoAccount,
    'navbar-page': NavbarPage,
    'footer-page': FooterBar,
    'content-page': ContentAccount,
  }
}
</script>
