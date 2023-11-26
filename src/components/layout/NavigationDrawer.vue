<script setup lang="ts">
import CustomLogo from 'src/svg/CustomLogo.vue';
</script>

<template>
  <div class="column col-3 full-height navigation-drawer no-wrap">
    <div class="column brand-box">
      <CustomLogo name="aspire" />
      <span>
        Trusted way of banking for 3,000+ SMEs and startups in Singapore</span
      >
    </div>
    <q-list class="column navigation-menu">
      <q-item to="/" class="text-white">
        <q-item-section avatar>
          <CustomLogo name="aspire_sm" />
        </q-item-section>
        <q-item-section>
          <span class="menu-display-text"> Home </span>
        </q-item-section>
      </q-item>

      <q-item to="/cards" class="text-white">
        <q-item-section avatar>
          <CustomLogo name="cards" />
        </q-item-section>
        <q-item-section>
          <span class="menu-display-text"> Cards </span>
        </q-item-section>
      </q-item>

      <q-item to="/payment" class="text-white">
        <q-item-section avatar>
          <CustomLogo name="payment" />
        </q-item-section>
        <q-item-section>
          <span class="menu-display-text"> Payments </span>
        </q-item-section>
      </q-item>

      <q-item to="/credit" class="text-white">
        <q-item-section avatar>
          <CustomLogo name="credit" />
        </q-item-section>
        <q-item-section>
          <span class="menu-display-text"> Credit </span>
        </q-item-section>
      </q-item>

      <q-item to="/profile" class="text-white">
        <q-item-section avatar>
          <CustomLogo name="profile" />
        </q-item-section>
        <q-item-section>
          <span class="menu-display-text"> Profile </span>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<style scoped lang="scss">
@import '../../css/quasar.variables';

.navigation-drawer {
  background: $background-dark;
  min-width: 240px;
  max-width: 340px;
  padding: 48px;
  height: 100vh !important;
}

.navigation-menu {
  gap: 60px;
}

.menu-display-text {
  font-size: $font-size-lg-1;
  line-height: 24px;
}

.q-item {
  padding: 0;
  min-height: 24px;
}

.brand-box {
  gap: 19px;
  margin-bottom: 81px;
  color: $color-primary;
}

.brand-box span {
  color: $color-white;
  opacity: 30%;
}

.q-router-link--exact-active .q-item__section {
  color: $color-primary;
}
</style>
