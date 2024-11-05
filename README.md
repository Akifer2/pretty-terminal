# pretty-terminals

`pretty-terminals` é uma biblioteca para facilitar a formatação de texto em terminais com cores e ícones, tornando a saída no console mais visual e amigável. Este pacote é especialmente útil para exibir logs, avisos e mensagens de status com ícones e cores personalizáveis.

## Instalação

Para instalar o pacote, você pode usar o npm:

```bash
npm install pretty-terminals
```

## Uso

Após a instalação, você pode importar e usar `colorize` e `iconize` para formatar textos no terminal com ícones e cores específicas.

### Importação

Importe as funções `colorize` e `iconize` diretamente do pacote:

```typescript
import { colorize, iconize } from 'pretty-terminals';
```

### Exemplo de Uso

#### Função `colorize`

A função `colorize` permite aplicar uma cor específica ao texto.

```typescript
import { colorize } from 'pretty-terminals';

// Exemplo: texto em vermelho
console.log(colorize('Red', 'Este é um texto em vermelho'));
```

#### Função `iconize`

A função `iconize` permite adicionar ícones a mensagens de texto.

```typescript
import { iconize } from 'pretty-terminals';

// Exemplo: adicionar ícone de sucesso à mensagem
console.log(iconize('success', 'Operação bem-sucedida!'));
```

### Combinação de `colorize` e `iconize`

Você também pode combinar as duas funções para formatar texto com ícones e cores ao mesmo tempo:

```typescript
import { colorize, iconize } from 'pretty-terminals';

// Exemplo: texto verde com ícone de sucesso
const mensagem = iconize('success', colorize('Green', 'Operação completada com êxito!'));
console.log(mensagem);
```

## Ícones Disponíveis

Abaixo estão alguns ícones que você pode usar com a função `iconize`:

- `success`: ✅
- `error`: ❌
- `info`: ℹ️
- `warning`: ⚠️
- `question`: ❓
- `check`: ✔️


## Cores Disponíveis

As seguintes cores estão disponíveis para a função `colorize`:

- `Black`, `Red`, `Green`, `Yellow`, `Blue`, `Magenta`, `Cyan`, `White`
- `Bright_Black`, `Bright_Red`, `Bright_Green`, `Bright_Yellow`, `Bright_Blue`, `Bright_Magenta`, `Bright_Cyan`, `Bright_White`


## Contribuindo

Se quiser contribuir com o desenvolvimento de `pretty-terminals`, sinta-se à vontade para abrir um pull request ou relatar problemas no repositório do GitHub.

---