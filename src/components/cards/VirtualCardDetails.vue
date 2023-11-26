<script setup lang="ts">

import RecentTransactions from 'components/cards/RecentTransactionsExpandable.vue';
import CardDetails from 'components/cards/CardDetailsExpandable.vue';
import ExpandableArea from 'components/cards/ExpandableArea.vue';
</script>

<template>
  <div class="column virtual_card_option_details q-px-lg full-height bg-white">
    <ExpandableArea heading="Card details" logo="card_details">
      <template v-slot:card>
        <CardDetails />
      </template>
    </ExpandableArea>

    <ExpandableArea heading="Recent transactions" logo="recent_transactions">
      <template v-slot:card>
        <RecentTransactions />
      </template>
    </ExpandableArea>


  </div>
</template>

<style scoped>
.virtual_card_option_details {
  z-index: 1000;
}

.virtual_card_option_details {
  gap: 24px;
  padding-block: 24px;
}
</style>
