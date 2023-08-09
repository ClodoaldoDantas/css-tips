<template>
  <div :class="$style.spinner"></div>
</template>

<style module>
.spinner {
  width: 48px;
  height: 48px;
  border: 5px solid rgba(255, 255, 245, 0.859);
  border-bottom-color: #10b981;
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
