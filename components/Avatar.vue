<script setup lang="ts">
interface Props {
  source?: string
  name: string
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="$style['avatar-container']">
    <img
      v-if="props.source"
      :class="$style['avatar-image']"
      :src="props.source"
      :alt="props.name"
    />

    <span v-else :class="$style['avatar-letter']">
      {{ props.name.charAt(0) }}
    </span>
  </div>
</template>

<style module>
.avatar-container {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: #2c3e50;

  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-image {
  height: 100%;
  width: 100%;
  border-radius: inherit;
}

.avatar-letter {
  font-size: 2rem;
  font-weight: bold;
}
</style>
