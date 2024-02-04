<template>
  <v-row align="center" justify="center" style="height: 100vh">
    <v-col sm="12" md="4">
      <div class="text-h2 text-center pb-8">Application</div>
      <form @submit.prevent="submit">
        <v-text-field
          name="email"
          label="email"
          v-model="values.email"
          autocomplete="email"
        ></v-text-field>

        <v-text-field
          name="password"
          label="password"
          v-model="values.password"
          autocomplete="current-password"
          :type="show ? 'text' : 'password'"
          :append-inner-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="show = !show"
        ></v-text-field>

        <div class="text-center py-4">
          <v-btn block size="large" class="me-4" type="submit" color="primary">
            Login
          </v-btn>
        </div>
      </form>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '../../Layouts/minimal.vue'
import { useForm } from '@inertiajs/vue3'
import { usersSessions as sessionsApi } from '../../api'

defineOptions({ layout: Layout })

const show = ref(false)
const values = ref({
  email: '',
  password: ''
})

const submit = async () => {
  const form = useForm({
    user: { ...values.value }
  })

  form.post(sessionsApi.create.path())
}
</script>
