# :empty

Representa qualquer elemento que não tenha `filhos`.

::: info
Nesse contexto, filhos podem ser outros elementos ou blocos de texto (incluindo espaços em branco).
:::

## Exemplo de código

```html
<div class="row">
  <div class="box"><!-- no children --></div>

  <div class="box">
    <img
      src="https://api.dicebear.com/6.x/fun-emoji/svg?eyes=glasses"
      alt="happy avatar with glasses"
    />
  </div>

  <div class="box">
    <img
      src="https://api.dicebear.com/6.x/fun-emoji/svg?eyes=wink2"
      alt="cute avatar"
    />
  </div>
</div>
```

```css{19-21}
.row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.box {
  height: 4rem;
  width: 4rem;
  border-radius: 3px;
  overflow: hidden;
}

.box > img {
  height: 100%;
  width: 100%;
}

.box:empty {
  border: 2px dashed #54545a;
}
```

## Resultado

<div :class="$style.row">
  <div :class="$style.box"></div>

  <div :class="$style.box">
    <img src="https://api.dicebear.com/6.x/fun-emoji/svg?eyes=glasses" alt="" />
  </div>

  <div :class="$style.box">
    <img src="https://api.dicebear.com/6.x/fun-emoji/svg?eyes=wink2" alt="" />
  </div>
</div>

<style module>
.row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.box {
  height: 4rem;
  width: 4rem;
  border-radius: 3px;
  overflow: hidden;
}

.box > img {
  height: 100%;
  width: 100%;
}

.box:empty {
  border: 2px dashed #54545a;
}
</style>
