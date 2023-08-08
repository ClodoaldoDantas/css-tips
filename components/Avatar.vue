<script setup lang="ts">
interface Props {
  source?: string
  name: string
}

const props = defineProps<Props>()
</script>

<template>
  <img
    v-if="props.source"
    :class="$style['avatar-image']"
    :src="props.source"
    :alt="props.name"
  />

  <div v-else :class="$style['avatar-container']">
    <span :class="$style['avatar-letter']">
      {{ props.name.charAt(0) }}
    </span>
  </div>
</template>

<style module>
.avatar-image {
  height: 80px;
  width: 80px;
  border-radius: 50%;
}

.avatar-container {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: #2c3e50;

  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-letter {
  font-size: 2rem;
  font-weight: bold;
}
</style>
