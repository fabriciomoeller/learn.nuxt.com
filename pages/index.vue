<script setup lang="ts">
  const {x, y} = useMouse()
  const color = useColorMode()
  //color.value = 'dark'

  function toggleDarkMode() {
    color.value = color.value === 'dark' ? 'light' : 'dark'
  } 
</script>

<template>
  <div>
    Hello World {{ x }} {{ y }}
    <button  @click="toggleDarkMode">
      Toggle Color Mode {{ color.value }}
    </button>
  </div>  
</template>
