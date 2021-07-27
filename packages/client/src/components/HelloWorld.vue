<template>
  <div class="helloworld">
    <h1>{{ msg }}</h1>
    <base-text size="large" color="light">res: {{ serverResponse }}</base-text>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import BaseText from '@/components/atoms/BaseText/index.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    BaseText,
  },
  props: {
    msg: String,
  },
  setup: () => {
    const serverResponse = ref([])

    const getserverResponse = async () => {
      const res = await fetch('/api')
      serverResponse.value = await res.json()
    }

    onMounted(getserverResponse)

    return {
      serverResponse,
    }
  },
})
</script>

<style scoped>
.helloworld {
  text-align: center;
  padding: 15px;
}
</style>
