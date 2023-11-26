<script setup lang="ts">
import RecentTransactionsLogo from 'src/svg/RecentTransactionsLogo.vue';
import CardDetailsLogo from 'src/svg/CardDetailsLogo.vue';
import HomeLogo from 'src/svg/HomeLogo.vue';
import CardsLogo from 'src/svg/CardsLogo.vue';
import CreditLogo from 'src/svg/CreditLogo.vue';
import PaymentsLogo from 'src/svg/PaymentsLogo.vue';
import ProfileLogo from 'src/svg/ProfileLogo.vue';
import AspireFull from 'src/svg/AspireFull.vue';
import VisaLogo from 'src/svg/VisaLogo.vue';

defineProps<{ name: string }>();
</script>

<template>
  <RecentTransactionsLogo v-if="$props.name === 'recent_transactions'" />
  <CardDetailsLogo v-if="$props.name === 'card_details'" />
  <HomeLogo v-if="$props.name === 'aspire_sm'" />
  <AspireFull v-if="$props.name === 'aspire'" />
  <CardsLogo v-if="$props.name === 'cards'" />
  <CreditLogo v-if="$props.name === 'credit'" />
  <PaymentsLogo v-if="$props.name === 'payment'" />
  <ProfileLogo v-if="$props.name === 'profile'" />
  <VisaLogo v-if="$props.name === 'visa'" />
</template>

<style scoped></style>
