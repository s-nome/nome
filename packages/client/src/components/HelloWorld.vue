<template>
  <div class="helloworld">
    <h1>{{ msg }}</h1>
    <p>res: {{ serverResponse }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup: () => {
    const serverResponse = ref([])

    const getserverResponse = async () => {
      const res = await fetch('/api')
      serverResponse.value = await res.json()
    }

    onMounted(getserverResponse)

    return {
      serverResponse
    }
  },
  mounted () {
    
  }
};
</script>

<style scoped>
.helloworld {
  text-align: center;
  padding: 15px;
}
</style>
