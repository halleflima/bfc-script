# <img src="https://yt3.googleusercontent.com/sUvIjXxRBrpOMVQ3jKrCjgcewUpEH14X36NcueMxpD0cZOsx-OCA0_RZ9_HBM0JFj9p7sQTmB1s=s1024-c-k-c0x00ffffff-no-rj" width="40" height="40" valign="middle"> BFC Script for VS Code

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=bfc.bfc)

Suporte profissional para a linguagem **BFC Script**, oferecendo syntax highlighting avançado e integração visual completa para o Visual Studio Code.

## 🚀 Funcionalidades

- ✨ **Syntax Highlighting Profissional**: Cores otimizadas para temas claros e escuros.
- 📦 **Suporte a Coleções**: Destaque inteligente para listas e arrays `[item1, item2]`.
- 🔍 **APIs Nativas**: Reconhecimento especial para classes `Dados`, `Arquivo`, `Resultado` e `Datas`.
- 📂 **Ícone Personalizado**: Identificação visual rápida de arquivos `.bfc` no explorador.
- 💬 **Comentários Inteligentes**: Suporte total a comentários de linha `//` e blocos `/* */`.
- 🧬 **Groovy-like**: Suporte a closures (`each`), interpolação de strings `${}` e encadeamento de métodos.

## 💻 Exemplo de Código

```bfc
// Definição de filtros em lista
filtros = [
    filDataIni,
    filDataFim,
    filSituacao
]

/* 
   Processamento de dados tributários
*/
Dados.tributos.v2.dividas.busca(filtros).each() { item ->
    imprimir("Valor da dívida: ${item.valor}")
}
```

## 🛠️ Instalação

1. Abra o **Visual Studio Code**
2. Vá em **Extensions** (`Ctrl+Shift+X`)
3. Procure por **BFC**
4. Clique em **Install**
5. (Opcional) Ative o tema de ícones: `Ctrl+Shift+P` -> `File Icon Theme` -> `BFC Icons`.

## 📖 APIs Suportadas

A extensão é otimizada para o ecossistema BFC, incluindo:
- `Dados.tributos.v2...`
- `Arquivo.novo(...)`
- `Resultado.arquivo(...)`
- `Datas.hoje()`

---
Desenvolvido para máxima produtividade em **BFC Script**.
