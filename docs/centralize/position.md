# Com CSS Position

## Como utilizar ?

Veja um exemplo abaixo sobre como centralizar um elemento utilizando **CSS Position:**

```html
<div class="container">
  <div class="element">🦄</div>
</div>
```

```css{5,10-13}
.container {
  height: 200px;
  width: 200px;
  border: 2px dashed #10b981;
  position: relative;
}

.element {
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## Resultado

<script setup>
import Center from '../../components/Center.vue'
</script>

<Center method="position" />
