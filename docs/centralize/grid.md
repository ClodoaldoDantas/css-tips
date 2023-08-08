---
next: Casos de uso
---

# Com CSS Grid

## Como utilizar ?

Veja um exemplo abaixo sobre como centralizar um elemento utilizando **CSS Grid:**

```html
<div class="container">
  <div class="element">🦄</div>
</div>
```

```css{6-7}
.container {
  height: 200px;
  width: 200px;
  border: 2px dashed #10b981;

  display: grid;
  place-items: center;
}

.element {
  font-size: 32px;
}
```

## Resultado

<script setup>
import Center from '../../components/Center.vue'
</script>

<Center method="grid" />
