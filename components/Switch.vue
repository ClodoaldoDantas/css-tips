<template>
  <label :class="$style.switch">
    <input :class="$style.input" type="checkbox" />
    <span :class="$style.slider"></span>
  </label>
</template>

<style module>
.switch {
  --switch-width: 60px;
  --switch-height: calc(var(--switch-width) / 2 + 4px);
  --switch-handle-size: calc(var(--switch-width) / 2 - 4px);

  --switch-handle-color: #fff;
  --switch-bg-inactive: #505053;
  --switch-bg-active: #059669;

  position: relative;
  display: inline-block;
  width: var(--switch-width);
  height: var(--switch-height);
}

.input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;

  background-color: var(--switch-bg-inactive);
  border-radius: var(--switch-height);
  transition: 400ms;
}

.slider::before {
  position: absolute;
  content: '';
  left: 4px;
  bottom: 4px;

  height: var(--switch-handle-size);
  width: var(--switch-handle-size);

  background-color: var(--switch-handle-color);
  border-radius: 50%;
  transition: 400ms;
}

.input:checked + .slider {
  background-color: var(--switch-bg-active);
}

.input:checked + .slider::before {
  transform: translateX(var(--switch-handle-size));
}
</style>
