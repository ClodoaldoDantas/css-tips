<template>
  <div :class="$style.container">
    <button type="button" :class="$style.btn">Notificações</button>

    <button type="button" aria-label="Notificações" :class="$style.btn">
      <span :class="$style.icon">🔔</span>
    </button>
  </div>
</template>

<style module>
.container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn {
  height: 2.5rem;
  padding: 0 1rem;

  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;

  border: 0;
  border-radius: 0.25rem;

  background-color: #333;
  color: #fff;

  transition: background-color 200ms;
}

.btn:hover {
  background-color: #444;
}

.btn:has(.icon) {
  padding: 0;
  width: 2.5rem;
  border-radius: 50%;
}
</style>
