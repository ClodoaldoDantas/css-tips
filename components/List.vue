<script setup lang="ts">
interface Props {
  items: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <ul>
    <li v-for="item in props.items" :key="item" :class="$style['list-item']">
      {{ item }}
    </li>
  </ul>
</template>

<style module>
.list-item::marker {
  color: #10b981;
}
</style>
