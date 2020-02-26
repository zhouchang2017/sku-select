<template>
  <div id="app" class="flex  justify-center w-full h-screen">
    <sku class="" />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    'sku':()=>import('@/components/Sku')
  }
}
</script>

<style>
#app {
  
}
</style>
