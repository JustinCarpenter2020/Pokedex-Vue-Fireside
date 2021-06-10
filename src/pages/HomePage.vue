<template>
  <div class="container-fluid">
    <div>Hello</div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
    })
    return { state }
  }
}
</script>

<style lang="scss" scoped>

</style>
