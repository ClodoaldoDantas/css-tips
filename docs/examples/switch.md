# Switch

O código abaixo é a implementação de um componente de `switch` com css.

## Exemplo de Código

```html
<label class="switch">
  <input class="switch-input" type="checkbox" />
  <span class="switch-slider"></span>
</label>
```

```css
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

.switch-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-slider {
  position: absolute;
  cursor: pointer;
  inset: 0;

  background-color: var(--switch-bg-inactive);
  border-radius: var(--switch-height);
  transition: 400ms;
}

.switch-slider::before {
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

.switch-input:checked + .switch-slider {
  background-color: var(--switch-bg-active);
}

.switch-input:checked + .switch-slider::before {
  transform: translateX(var(--switch-handle-size));
}
```

## Resultado

<script setup>
import Switch from '../../components/Switch.vue'
</script>

<Switch />
