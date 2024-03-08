<template lang="html">
  <div>
    <button @click="upBtn">UP</button>
  </div>
</template>

<script>
export default {
  name: 'UpButton',
  methods: {
    upBtn(){
      return{x: 0, y: 0}
    }
  },
}
</script>

<style lang="scss" scoped>

</style>