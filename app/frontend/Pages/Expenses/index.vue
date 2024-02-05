<script setup>
defineProps(['expenses'])
</script>

<template>
  <div v-for="expense in expenses" :key="expense.id" class="pa-4">
    <v-card variant="tonal">
      <template #title>
        {{ expense.name }}
      </template>

      <template #subtitle>
        {{ expense.amount }}
      </template>
    </v-card>
  </div>
</template>
