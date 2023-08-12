# ::before

Usado para inserir algo `antes` do conteúdo selecionado.

## Exemplo de código

```html
<ul>
  <li class="list-item">Lionel Messi</li>
  <li class="list-item">Cristiano Ronaldo</li>
  <li class="list-item">Neymar Jr</li>
</ul>
```

```css{9-12}
.list {
  padding-left: 0;
}

.list-item {
  list-style: none;
}

.list-item::before {
  content: '⚽';
  margin-right: 0.625rem;
}
```

## Resultado

<script setup>
import UnorderedList from '../../components/UnorderedList.vue'
</script>

<UnorderedList 
  :items="['Lionel Messi', 'Cristiano Ronaldo', 'Neymar Jr']"
  :containerClass="$style.list"
  :itemClass="$style.item" 
/>

<style module>
.list {
  padding-left: 0 !important;
}

.item {
  list-style: none;
}

.item::before {
  content: "⚽";
  margin-right: 0.625rem;
}
</style>
