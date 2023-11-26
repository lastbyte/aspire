<script setup lang="ts">
import { ref } from 'vue';
import BrandLogo from 'src/svg/HomeLogo.vue';
import CreditLogo from 'src/svg/CreditLogo.vue';
import CardsLogo from 'src/svg/CardsLogo.vue';
import PaymentsLogo from 'src/svg/PaymentsLogo.vue';
import ProfileLogo from 'src/svg/ProfileLogo.vue';

const tab = ref('cards');
</script>

<template>
  <q-footer elevated>
    <q-tabs
      active-class="active_tab"
      v-model="tab"
      indicator-color="transparent"
      active-color="white"
      class="bg-white shadow-2 app_footer_tabs"
    >
      <q-route-tab to="/" no-caps class="app_tab" name="home">
        <template v-slot:default>
          <div class="column justify-between" style="gap: 2px">
            <BrandLogo />
            <span>Home</span>
          </div>
        </template>
      </q-route-tab>
      <q-route-tab to="/cards" no-caps class="app_tab" name="cards">
        <template v-slot:default>
          <div class="column justify-between" style="gap: 2px">
            <CardsLogo />
            <span>Cards</span>
          </div>
        </template>
      </q-route-tab>
      <q-route-tab to="/payment" no-caps class="app_tab" name="payment">
        <template v-slot:default>
          <div class="column justify-between" style="gap: 2px">
            <PaymentsLogo />
            <span>Payment</span>
          </div>
        </template>
      </q-route-tab>
      <q-route-tab to="/credit" no-caps class="app_tab" name="credit">
        <template v-slot:default>
          <div class="column justify-between" style="gap: 2px">
            <CreditLogo />
            <span>Credit</span>
          </div>
        </template>
      </q-route-tab>
      <q-route-tab to="/profile" no-caps class="app_tab" name="profile">
        <template v-slot:default>
          <div class="column justify-between" style="gap: 2px">
            <ProfileLogo />
            <span>Profile</span>
          </div>
        </template>
      </q-route-tab>
    </q-tabs>
  </q-footer>
</template>

<style scoped>
.app_tab {
  color: #dddddd;
}

.active_tab {
  color: #01d167;
  fill: #01d167;
}

.app_tab span {
  font-size: 9px;
  font-weight: 400;
  line-height: 13px;
  transition: all 0.2s;
}

.app_tab[aria-selected='true'] span {
  font-size: 9px;
  font-weight: 700;
  line-height: 13px;
}

.app_tab svg {
  fill: #ddd;
  transition: all 0.2s;
}

.app_tab[aria-selected='true'] span,
.app_tab[aria-selected='true'] svg {
  color: #01d167;
  fill: #01d167;
}

.app_footer_tabs {
  padding-inline: 30px;
  padding-block: 8px 9px;
}
</style>
