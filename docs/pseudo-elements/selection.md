# ::selection

Aplica um estilo para partes do documento que foram `selecionados` pelo usuário.

## Exemplo de código

```html
<blockquote class="quote">
  <p>
    Você não precisa de muitos amigos, só daqueles em que você possa realmente
    confiar.
  </p>
  <cite>Naruto Shippuden</cite>
</blockquote>
```

```css
.quote p::selection {
  background-color: #d97706;
  color: #fff;
}
```

## Resultado

<blockquote :class="$style.quote">
  <p>Você não precisa de muitos amigos, só daqueles em que você possa realmente confiar.</p>
  <cite>Naruto Shippuden</cite>
</blockquote>

<style module>
.quote p::selection {
  background-color: #d97706;
  color: #fff
}
</style>
