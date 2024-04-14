<template>
    <div class="record-order">
        <navbar-page></navbar-page>
        <hisor-page></hisor-page>
        <footer-page></footer-page>
    </div>    
</template>
<script>
import HisOrderPage from '@/components/HisOrderPage.vue';
import NavbarPage from '@/components/NavbarPage.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  name: 'ServiceView',
  components: {
    'navbar-page': NavbarPage,
    'footer-page': FooterBar,
    'hisor-page': HisOrderPage,
  }
}
</script>