# Avatar

O truque para criar um componente de avatar é definir com que o elemento possua as mesmas dimensões de altura e largura, e em seguida definir a propriedade `border-radius` com o valor de 50%.

## Exemplo de Código

```html
<!-- Utilizando uma imagem -->
<img
  class="avatar-image"
  src="https://github.com/clodoaldodantas.png"
  alt="Clodoaldo Dantas"
/>

<!-- Utilizando uma div -->
<div class="avatar-container">
  <span class="avatar-letter">C</span>
</div>
```

```css{2-4,8-10}
.avatar-image {
  height: 80px;
  width: 80px;
  border-radius: 50%;
}

.avatar-container {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: #2c3e50;

  /* para centralizar a letra dentro do círculo */
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-letter {
  font-size: 2rem;
  font-weight: bold;
}
```

## Resultado

<script setup>
import Avatar from '../../components/Avatar.vue'
</script>

<div :class="$style.container">
  <Avatar 
    source="https://github.com/clodoaldodantas.png" 
    name="Clodoaldo Dantas" 
  />

  <Avatar name="Clodoaldo Dantas" />
</div>

<style module>
.container {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
