<template>
  <div class="relative-position virtual-card-container q-mt-lg">
    <div class="card-toggle bg-white row justify-center">
      <q-btn
        class="q-pa-none"
        no-caps
        flat
        @click="() => cardPageStore.toggleVisibility($props.card.id)"
      >
        <div
          class="row full-width justify-center items-center card-toggle-button-content"
        >
          <q-icon name="visibility" />
          <span>{{ $props.card.hidden ? 'Show' : 'Hide' }} card number</span>
        </div>
      </q-btn>
    </div>
    <div class="column virtual-card" :class="card.frozen ? 'frozen' : ''">
      <div class="row reverse text-white">
        <CustomLogo :name="$props.card.brand" />
      </div>
      <div class="details column col-grow justify-between">
        <div class="row name text-white">
          {{ $props.card.cardholderName }}
        </div>
        <div class="row items-center">
          <div v-if="$props.card.hidden" class="row col-3">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <div v-if="!$props.card.hidden" class="col-3 text-white card_number">
            {{ $props.card.cardNumber.slice(0, 4) }}
          </div>

          <div v-if="$props.card.hidden" class="row col-3">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <div v-if="!$props.card.hidden" class="col-3 text-white card_number">
            {{ $props.card.cardNumber.slice(4, 8) }}
          </div>

          <div v-if="$props.card.hidden" class="row col-3">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <div v-if="!$props.card.hidden" class="col-3 text-white card_number">
            {{ $props.card.cardNumber.slice(8, 12) }}
          </div>

          <div class="col-3 text-white card_number">
            {{ $props.card.cardNumber.slice(12) }}
          </div>
        </div>
        <div class="row detail_row_3">
          <div class="row" style="width: 100px">
            <div class="text-white">Thru:</div>
            <div
              v-if="$props.card.hidden"
              class="text-white text-center astreik"
            >
              ***
            </div>
            <div v-else class="text-white">
              {{ $props.card.expiry.month }}/{{
                $props.card.expiry.year.slice(2)
              }}
            </div>
          </div>
          <div class="row">
            <div class="text-white text-center">CVV:</div>
            <div
              v-if="$props.card.hidden"
              class="text-white text-center astreik"
            >
              ***
            </div>
            <div v-if="!$props.card.hidden" class="text-white text-center">
              {{ $props.card.cvv }}
            </div>
          </div>
        </div>
      </div>
      <div class="row reverse text-white">
        <CustomLogo :name="$props.card.tech" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomLogo from 'src/svg/CustomLogo.vue';
import { useCardsPageStore } from 'stores/CardsPageStore';

defineProps<{
  card: CardExtended;
}>();

const cardPageStore = useCardsPageStore();
</script>

<style scoped lang="scss">
@import '../../css/quasar.variables';

.card-toggle {
  height: 40px;
  width: 151px;
  position: absolute;
  top: -30px;
  border-radius: 6px 6px 0 0;
  z-index: 1;
  right: 0;
  padding-bottom: 5px;
  align-items: center;
}

.card-toggle-button-content {
  font-size: $font-size-sm;
  color: $color-primary;
  gap: 6px;
}

.virtual-card.frozen {
  opacity: 0.3;
}

.virtual-card {
  z-index: 2;
  position: relative;
  padding: 24px;
  height: 220px;
  margin-block: 0 32px;
  background: $color-primary;
  border-radius: 12px;
}

.virtual-card,
.virtual-card-container {
  width: clamp(300px, 100%, 358px);
}

@media screen and (max-width: 400px) {
  .virtual-card,
  .virtual-card-container {
    width: 328px;
  }
}

.desktop .virtual-card,
.desktop .virtual-card-container {
  min-height: 248px;
  width: clamp(300px, 100%, 414px);
}

.virtual-card .name {
  font-size: 22px;
  letter-spacing: 0.53px;
  line-height: 20px;
  font-weight: $font-weight-bold;
}

.virtual-card .details {
  padding-top: 24px;
}

.dot {
  height: 8px;
  aspect-ratio: 1;
  background: white;
  border-radius: 100%;
}

.row.col-3 {
  gap: 6px;
  align-items: center;
}

.card_number {
  letter-spacing: 3.46px;
  font-size: 14px;
  line-height: 19px;
  font-weight: 700;
}

.detail_row_3 {
  gap: 30px;
  font-size: 13px;
  letter-spacing: 1.56px;
  line-height: 18px;
  font-weight: 700;
}

.astreik {
  height: 18px;
  font-size: 24px;
  letter-spacing: 2.88px;
  line-height: 24px;
  font-weight: 700;
}
</style>
