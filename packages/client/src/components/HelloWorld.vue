<template>
  <div class="helloworld">
    <h1>{{ msg }}</h1>
    <div style="display: flex">
      <base-icon />
      <base-text size="large" color="light">
        res: {{ serverResponse }}
      </base-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import BaseText from '@/components/atoms/BaseText/index.vue'
import BaseIcon from '@/components/atoms/BaseIcon/index.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    BaseText,
    BaseIcon,
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
