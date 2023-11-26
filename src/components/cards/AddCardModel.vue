<script setup lang="ts">
import { useCardsPageStore } from 'stores/CardsPageStore';
import { nextTick, ref } from 'vue';

const cardsPageStore = useCardsPageStore();

const cardName = ref<string>('');
const cardNumber = ref<string>('');
const cardExpiryMonth = ref<string>('');
const cardExpiryYear = ref<string>('');
const cardCvv = ref<string>('');

const cardholderNameRef = ref(null);
const cardNumberRef = ref(null);
const cardExpiryMonthRef = ref(null);
const cardExpiryYearRef = ref(null);
const cardCvvRef = ref(null);

const months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

const years = [
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025',
  '2026',
  '2027',
  '2028',
  '2029',
  '2030',
];

function formHasError() {
  return (
    (cardholderNameRef.value && cardholderNameRef.value.hasError) ||
    (cardNumberRef.value && cardNumberRef.value.hasError) ||
    (cardExpiryMonthRef.value && cardExpiryMonthRef.value.hasError) ||
    (cardExpiryYearRef.value && cardExpiryYearRef.value.hasError) ||
    (cardCvvRef.value && cardCvvRef.value.hasError)
  );
}
function save() {
  if (formHasError()) {
    return;
  }
  const cardToAdd: Card = {
    cardholderName: cardName.value,
    cardNumber: cardNumber.value,
    expiry: {
      month: cardExpiryMonth.value,
      year: cardExpiryYear.value,
    },
    cvv: cardCvv.value,
    frozen: false,
    id: 'card' + new Date().getTime(),
    deactivated: false,
    type: 'debit',
    tech: 'visa',
    brand: 'aspire',
  };
  cardsPageStore.addCard(cardToAdd);
  clear();
}

function clear() {
  cardName.value = '';
  cardNumber.value = '';
  cardExpiryMonth.value = '';
  cardExpiryYear.value = '';
  cardCvv.value = '';

  nextTick(() => {
    cardholderNameRef.value && cardholderNameRef.value.resetValidation();
    cardNumberRef.value && cardNumberRef.value.resetValidation();
    cardExpiryMonthRef.value && cardExpiryMonthRef.value.resetValidation();
    cardExpiryYearRef.value && cardExpiryYearRef.value.resetValidation();
    cardCvvRef.value && cardCvvRef.value.resetValidation();
  });
}
</script>

<template>
  <q-dialog v-model="cardsPageStore.addCardModal" class="card_dialog">
    <q-card class="q-pa-md form_card">
      <q-card-section class="q-px-none"
        ><span class="add_card_heading">Add a card</span></q-card-section
      >
      <q-form class="add_form column">
        <q-input
          ref="cardholderNameRef"
          v-model="cardName"
          label="Cardholder Name"
          hint="Cardholder's Legal Name"
          class="full-width"
          :rules="[(val) => !!val || 'Field is required']"
          no-error-icon
        />

        <q-input
          ref="cardNumberRef"
          v-model="cardNumber"
          filled
          label="Card number"
          hint="16 digit card number"
          mask="#### #### #### ####"
          fill-mask="*"
          unmasked-value
          :rules="[
            (val) => !!val || 'Field is required',
            (val) =>
              (val && val.length === 16 && val.match(/[0-9]+/)) ||
              'Card number is invalid',
          ]"
          no-error-icon
        />

        <div class="row justify-between no-wrap" style="gap: 8px">
          <q-select
            ref="cardExpiryMonthRef"
            class="expiry_month_input"
            filled
            v-model="cardExpiryMonth"
            label="month"
            hint="Expiry month"
            :rules="[(val) => !!val || 'Field is required']"
            maxlength="2"
            :options="months"
            no-error-icon
          />

          <q-select
            ref="cardExpiryYearRef"
            class="expiry_year_input"
            filled
            v-model="cardExpiryYear"
            label="year"
            hint="Expiry year"
            :options="years"
            :rules="[(val) => !!val || 'Field is required']"
            maxlength="2"
            no-error-icon
          />

          <q-input
            class="cvv_input"
            ref="cardCvvRef"
            filled
            v-model="cardCvv"
            label="cvv"
            hint="on the back"
            :rules="[
              (val) => !!val || 'Field is required',
              (val) =>
                (val && val.length === 3 && val.match(/[0-9]+/)) ||
                'cvv is invalid',
            ]"
            maxlength="3"
            no-error-icon
          />
        </div>
      </q-form>
      <q-card-actions class="q-mt-md">
        <q-btn
          :disable="formHasError()"
          class="save text-white"
          dense
          size="md"
          label="Save"
          @click="
            () => {
              save();
            }
          "
        />
        <q-btn
          class="clear text-white"
          dense
          size="md"
          label="Clear"
          @click="
            () => {
              clear();
            }
          "
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="scss">
@import '../../css/quasar.variables';

.save {
  background: $color-primary;
  padding: 6px 24px;
}

.clear {
  background: $background-dark;
  padding: 6px 24px;
}

.add_form {
  gap: 16px;
  width: 100%;
}

.expiry_year_input,
.expiry_month_input,
.cvv_input {
  width: 100px;
}

.card_dialog {
  min-width: 414px;
}

.form_card {
  background: $background-light;
}
.add_card_heading {
  font-size: $font-size-lg-1;
  font-weight: $font-weight-bold;
  color: $color-blue-bark;
}
</style>
