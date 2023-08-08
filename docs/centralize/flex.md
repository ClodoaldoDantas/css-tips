# Com CSS Flexbox

## Como utilizar ?

Veja um exemplo abaixo sobre como centralizar um elemento utilizando **CSS Flexbox:**

```html
<div class="container">
  <div class="element">🦄</div>
</div>
```

```css{6-8}
.container {
  height: 200px;
  width: 200px;
  border: 2px dashed #10b981;

  display: flex;
  align-items: center;
  justify-content: center;
}

.element {
  font-size: 32px;
}
```

## Resultado

<div :class="$style.container">
  <div :class="$style.element">🦄</div>
</div>

<style module>
.container {
  height: 200px;
  width: 200px;
  border: 2px dashed #10b981;

  display: flex;
  align-items: center;
  justify-content: center;
}

.element {
  font-size: 32px;
}
</style>
