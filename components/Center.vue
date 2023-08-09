<script setup lang="ts">
interface Props {
  method: 'position' | 'flex' | 'grid'
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="[$style.container, $style[props.method]]">
    <span :class="$style.element"> 🦄 </span>
  </div>
</template>

<style module>
.container {
  height: 200px;
  width: 200px;
  border: 2px dashed var(--vp-c-brand);
}

.element {
  font-size: 2rem;
}

.container.position {
  position: relative;
}

.container.position > .element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container.grid {
  display: grid;
  place-items: center;
}
</style>
