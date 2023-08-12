<script setup lang="ts">
interface Props {
  items: string[]
  containerClass?: string
  itemClass?: string
}

const props = defineProps<Props>()
</script>

<template>
  <ul :class="props.containerClass">
    <li v-for="item in props.items" :key="item" :class="props.itemClass">
      {{ item }}
    </li>
  </ul>
</template>
