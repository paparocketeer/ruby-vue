<script setup>
import { ref } from 'vue'
import { useForm } from '@inertiajs/vue3'
import Layout from '../../Layouts/minimal.vue'
import { usersSessions as sessionsApi } from '../../api'

defineOptions({ layout: Layout })

const show = ref(false)
const values = ref({
  email: '',
  password: '',
})

async function submit() {
  const form = useForm({
    user: { ...values.value },
  })

  form.post(sessionsApi.create.path())
}
</script>

<template>
  <v-row align="center" justify="center" style="height: 100vh">
    <v-col sm="12" md="4">
      <div class="text-h2 text-center pb-8">
        Application
      </div>
      <form @submit.prevent="submit">
        <v-text-field
          v-model="values.email"
          name="email"
          label="email"
          autocomplete="email"
        />

        <v-text-field
          v-model="values.password"
          name="password"
          label="password"
          autocomplete="current-password"
          :type="show ? 'text' : 'password'"
          :append-inner-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="show = !show"
        />

        <div class="text-center py-4">
          <v-btn block size="large" class="me-4" type="submit" color="primary">
            Login
          </v-btn>
        </div>
      </form>
    </v-col>
  </v-row>
</template>
