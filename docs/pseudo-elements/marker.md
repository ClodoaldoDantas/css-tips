# ::marker

Usado para selecionar o marcador de um item de lista.

## Exemplo de código

```html
<ul>
  <li class="list-item">Apple</li>
  <li class="list-item">Banana</li>
  <li class="list-item">Grape</li>
</ul>
```

```css
.list-item::marker {
  color: #10b981;
}
```

## Resultado

<script setup>
import UnorderedList from '../../components/UnorderedList.vue'
</script>

<UnorderedList 
  :items="['Apple', 'Banana', 'Grape']" 
  :itemClass="$style.item" 
/>

<style module>
.item::marker {
  color: #10b981;
}
</style>
