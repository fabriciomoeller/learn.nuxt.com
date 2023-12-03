<script setup lang="ts">
  const {x, y} = useMouse()
  const color = useColorMode()
  //color.value = 'dark'

  function toggleDarkMode() {
    color.value = color.value === 'dark' 
      ? 'light' 
      : 'dark'
  } 
</script>

<template>
  <div class="grid grid-cols-[1fr_2fr] h-full">
    <div class="border-r border-base">
      Content
      <div class="text-red">
        Hello World {{ x }} {{ y }} <br>
        <button  @click="toggleDarkMode">
          Toggle Color Mode {{ color.value }}
        </button>
      </div>  
    </div>
    <div>
      Plaiground  
    </div>

  </div>
  
</template>
