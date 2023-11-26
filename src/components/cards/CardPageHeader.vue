<script setup lang="ts">
import CardInfoBar from 'components/cards/CardInfoBar.vue';
import CustomLogo from 'src/svg/CustomLogo.vue';
</script>

<template>
  <div class="cards_page_header">
    <div class="row full-width top-logo-bar items-center q-py-lg">
      <div class="brand-logo">
        <CustomLogo name="aspire_sm" />
      </div>
    </div>
    <CardInfoBar />
  </div>
</template>

<style scoped lang="scss">
@import '../../css/quasar.variables.scss';
.brand-logo {
  color: $color-primary;
}
</style>
