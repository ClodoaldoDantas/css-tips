# ::after

Usado para inserir algo `depois` do conteúdo selecionado.

## Exemplo de código

```html
<label class="required">Endereço de e-mail</label>
```

```css
.required::after {
  content: '*';
  margin-left: 0.25rem;
  color: #f43f5e;
}
```

## Resultado

<label :class="$style.required">Endereço de e-mail</label>

<style module>
.required::after {
  content: "*";
  margin-left: 0.25rem;
  color: #f43f5e;
}
</style>
