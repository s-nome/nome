<template>
  <span class="text">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Text',
  setup() {},
})
</script>

<style lang="scss" scoped>
.text {
  position: relative;
}
</style>
