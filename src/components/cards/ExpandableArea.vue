<script setup lang="ts">
import CustomLogo from 'src/svg/CustomLogo.vue';

defineProps<{ heading: string; logo: string }>();
</script>

<template>
  <q-expansion-item
    class="expansion_item"
    expand-icon="expand_circle_down"
    expand-icon-class="custom-icon"
    default-opened
  >
    <template v-slot:header>
      <q-item-section avatar>
        <custom-logo :name="$props.logo" />
      </q-item-section>
      <q-item-section class="heading"> {{ $props.heading }}</q-item-section>
    </template>

    <div class="col wrapper">
      <slot name="card"></slot>
    </div>
  </q-expansion-item>
</template>

<style lang="scss">
@import '../../css/quasar.variables';

.expansion_item {
  background: hsla(216, 100%, 99%, 1);
  border: 1px solid hsla(0, 0%, 96%, 1);
}

.q-item-section {
  gap: 4px;
}

.q-item__section--side {
  padding-right: 12px;
}

.q-item__section--avatar {
  min-width: 24px;
}

.q-expansion-item {
  background: $paper;
  border-radius: 8px;
}

.heading {
  font-size: $font-size-lg;
  font-weight: $font-weight-semi-bold;
  line-height: $line-height-md;
  color: $color-secondary;
}
</style>
