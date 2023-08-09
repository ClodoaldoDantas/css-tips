# Spinner

O truque para criar um componente de spinner com CSS é bastante simples, basta utilizarmos um elemento com as mesmas proporções e definirmos uma propriedade `border` para ele. Logo em seguida podemos definir com que o `border-bottom-color` do elemento tenha um valor diferente das demais. Depois da estrutura pronta, basta apenas criarmos uma simples **animação** com CSS.

## Exemplo de Código

```html
<div class="spinner"></div>
```

```css{4-5,8}
.spinner {
  width: 48px;
  height: 48px;
  border: 5px solid rgba(255, 255, 245, 0.859);
  border-bottom-color: #10b981;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## Resultado

<script setup>
import Spinner from '../../components/Spinner.vue'
</script>

<Spinner />
