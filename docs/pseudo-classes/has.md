# :has()

O seletor CSS `:has` é muito útil quando queremos selecionar elementos que contenham elementos correspondentes ao seletor que você passa para dentro da função `:has()`.

## Exemplo de código

```html
<button type="button" class="btn">Notificações</button>

<button type="button" aria-label="Notificações" class="btn">
  <span class="icon">🔔</span>
</button>
```

```css{22-26}
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
```

## Resultado
<div :class="$style.container">
  <button type="button" :class="$style.btn">Notificações</button>

  <button type="button" aria-label="Notificações" :class="$style.btn">
    <span :class="$style.icon">🔔</span>
  </button>
</div>

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
