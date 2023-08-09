<template>
  <div :class="$style.spinner"></div>
</template>

<style module>
.spinner {
  width: 48px;
  height: 48px;
  border: 5px solid var(--vp-c-text-1);
  border-bottom-color: var(--vp-c-brand);
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
