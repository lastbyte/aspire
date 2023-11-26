<script setup lang="ts">
import TravelIcon from 'src/svg/TravelIcon.vue';
import FashionIcon from 'src/svg/FashionIcon.vue';
import OnlineShoppingIcon from 'src/svg/OnlineShoppingIcon.vue';

defineProps<{
  category: string;
}>();
</script>

<template>
    <q-icon class="round travel" v-if="$props.category === 'travel'">
      <template v-slot:default>
        <TravelIcon />
      </template>
    </q-icon>

    <q-icon class="round online_shopping" v-if="$props.category === 'online_shopping'">
      <template v-slot:default>
        <OnlineShoppingIcon />
      </template>
    </q-icon>

    <q-icon class="round fashion" v-if="$props.category === 'fashion'">
      <template v-slot:default>
        <FashionIcon />
      </template>
    </q-icon>
</template>

<style scoped lang="scss">
@import '../../css/quasar.variables';

$travel-color: hsla(171, 100%, 42%, 0.1);
$online-shopping-color: hsla(203, 100%, 50%, 0.1);
$fashion-color: hsla(335, 86%, 63%, 0.1);


.q-item__section--avatar {
  padding-right: 0;
}
</style>


<style scoped lang="scss">

@import '../../css/quasar.variables';
$travel-bg: hsla(171, 100%, 42%, 0.1);
$online-shopping-bg: hsla(203, 100%, 50%, 0.1);
$fashion-bg: hsla(335, 86%, 63%, 0.1);

.travel {
  background: $travel-bg;
}

.online_shopping {
  background: $online-shopping-bg;
}

.fashion {
  background: $fashion-bg;
}
.q-icon {
  height: 48px;
  width: 48px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 50%;
}
</style>
