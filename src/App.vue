<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/vuex">Vuex</router-link>
    </li>
    <li>
      <router-link to="/axios">Axios</router-link>
    </li>
  </ul>
  <router-view class="text-5xl" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from './store'

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()

    const { count } = store.state // typed as number
    console.log(count)
  },
})
</script>
