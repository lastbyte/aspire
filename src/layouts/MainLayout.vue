<template>
  <!--  desktop layout -->
  <q-layout view="lHh Lpr lFf" v-if="$q.platform.is.desktop">
    <q-page-container class="window-height scroll-y">
      <q-page class="row no-wrap full-height bg-white">
        <NavigationDrawer />
        <div class="row col page-area scroll-y">
          <router-view />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>

  <!--  Mobile layout -->
  <q-layout view="lHh Lpr lFf" v-else>
    <q-page-container>
      <q-page>
        <AppHeader />
        <router-view />
        <AppFooter />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import AppFooter from 'components/layout/AppFooter.vue';
import AppHeader from 'components/layout/AppHeader.vue';
import NavigationDrawer from 'components/layout/NavigationDrawer.vue';
</script>

<style lang="scss" scoped>
.page-area {
  padding: 60px 59px 80px 60px;
  max-height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  background: $background-light;
}

.page-area.col-9 {
  width: calc(75% - 120px);
}
</style>
