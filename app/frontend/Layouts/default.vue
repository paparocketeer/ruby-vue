<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import { usersSessions as sessionsApi } from '../api'

const drawer = ref(null)
const resources = [
  { name: 'Users', uri: '/users', icon: 'mdi-account' },
  { name: 'Expenses', uri: '/expenses', icon: 'mdi-finance' },
  { name: 'Categories', uri: '/categories', icon: 'mdi-rhombus-split' },
]
const theme = useTheme()
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <iLink
        v-for="resource in resources"
        :key="resource.name"
        :href="resource.uri"
        role="navigation"
        class="inertia-link"
        as="div"
      >
        <v-list-item :value="resource.name" color="primary" link>
          <template #prepend>
            <v-icon :icon="resource.icon" />
          </template>
          <v-list-item-title>{{ resource.name }}</v-list-item-title>
        </v-list-item>
      </iLink>
      <iLink
        v-if="$page.props.auth?.user"
        :href="sessionsApi.destroy.path()"
        method="delete"
        class="inertia-link"
      >
        <v-list-item value="Logout" color="primary" link>
          <template #prepend>
            <v-icon icon="mdi-logout" />
          </template>
          <v-list-item-title>{{ 'Logout' }}</v-list-item-title>
        </v-list-item>
      </iLink>
      <v-list-item link title="List Item 1" />
      <v-list-item link title="List Item 2" />
      <v-list-item link title="List Item 3" />

      <v-btn icon class="theme-toggler" v-on="on" @click="toggleTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-navigation-drawer>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.inertia-link {
  text-decoration-line: none;
}

.theme-toggler {
  bottom: 20px;
  position: absolute;
  left: 20px;
}

.logout-toggler {
  bottom: 50px;
  position: absolute;
  right: 20px;
}
</style>
