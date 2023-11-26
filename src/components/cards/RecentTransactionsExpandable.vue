<script setup lang="ts">
import TransactionIcon from 'components/cards/TransactionIcon.vue';
import CardTransactionIcon from 'src/svg/CardTransactionIcon.vue';
import { useCardsPageStore } from 'stores/CardsPageStore';

const cardsPageStore = useCardsPageStore();
</script>

<template>
  <div class="col wrapper">
    <q-card class="transactions-card">
      <q-card-section class="q-pa-lg">
        <div>
          <q-list class="rounded-borders">
            <q-item
              v-for="(transaction, index) in cardsPageStore.transactions"
              :key="index"
              class="items-start q-px-none transaction-entry-item"
            >
              <q-item-section avatar>
                <TransactionIcon :category="transaction.category" />
              </q-item-section>
              <q-item-section>
                <div class="row items-start" style="height: 40px">
                  <div class="column col-grow">
                    <q-item-label class="transaction-name"
                      >{{ transaction.name }}
                    </q-item-label>
                    <q-item-label class="transaction-date"
                      >{{ transaction.date }}
                    </q-item-label>
                  </div>
                  <div class="row col-auto items-center justify-center">
                    <q-item-label
                      class="transaction-amount debit"
                      v-if="transaction.type === 'debit'"
                    >
                      - S$ {{ transaction.amount }}
                    </q-item-label>
                    <q-item-label
                      class="transaction-amount credit"
                      v-if="transaction.type === 'credit'"
                    >
                      + S$ {{ transaction.amount }}
                    </q-item-label>
                    <q-icon
                      size="sm"
                      name="keyboard_arrow_right"
                      class="custom-icon"
                    ></q-icon>
                  </div>
                </div>
                <div class="row">
                  <q-item-label class="transaction-detail">
                    <q-icon class="card-transaction-icon">
                      <CardTransactionIcon />
                    </q-icon>
                    {{ transaction.detail }}
                  </q-item-label>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-card-section>
    </q-card>
    <div class="row justify-center show-all-tranx-btn">
      <span> Show all transactions</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../css/quasar.variables';

.wrapper {
  background: hsla(147, 100%, 96%, 1);
  border-radius: 0 0 8px 8px;
}

.show-all-tranx-btn {
  font-size: $font-size-regular;
  font-weight: $font-weight-semi-bold;
  line-height: $line-height-md;
  font-family: $font-sans;
  color: $color-primary;
  padding-block: 16px;
  margin-top: -2px;
  border-radius: 0 0 8px 8px;
  border-left: 1px solid hsla(146, 100%, 93%, 1);
  border-right: 1px solid hsla(146, 100%, 93%, 1);
  border-bottom: 1px solid hsla(146, 100%, 93%, 1);
}

.transactions-card {
  border-radius: 0 0 12px 12px;
  border: 1px solid hsla(0, 0%, 96%, 1);
  box-shadow: none;
}

.transaction-entry-item {
  border-bottom: 1px solid hsla(0, 0%, 94%, 1);
  padding-block: 16px;
}

.transaction-entry-item:nth-last-child(1) {
  border-bottom: none;
}

.transaction-entry-item:nth-child(1) {
  padding-top: 0;
}

.transaction-entry-item:nth-last-child(1) {
  padding-bottom: 0;
}

.transaction-name {
  font-size: $font-size-lg;
  font-weight: $font-weight-semi-bold;
  line-height: $line-height-md;
  font-family: $font-sans;
  color: $text-dark;
}

.transaction-date {
  font-size: $font-size-regular;
  font-weight: $font-weight-regular;
  line-height: $line-height-md;
  color: $text-caption-color;
  font-family: $font-sans;
}

.transaction-detail {
  padding-top: 10px;
  font-size: $font-size-sm;
  font-weight: $font-weight-semi-bold;
  line-height: $line-height-md;
  color: hsla(220, 56%, 44%, 1);
  font-family: $font-sans;
}

.card-transaction-icon {
  background: $color-secondary;
  background: hsla(220, 56%, 44%, 1);
  width: 24px;
  height: 20px;
  padding: 6px 7px 6px 7px;
  margin-right: 8px;
  box-sizing: border-box;
  border-radius: 10px;
}

.transaction-amount {
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
  line-height: $line-height-md;
  font-family: $font-sans;
}

.transaction-amount.debit {
  color: $color-secondary;
}

.transaction-amount.credit {
  color: $color-primary;
}
</style>
