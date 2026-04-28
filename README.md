# BFC Script Support for VS Code

Este projeto adiciona suporte especializado à linguagem **BFC Script** (com integração Groovy) no Visual Studio Code. Desenvolvido para oferecer uma experiência de desenvolvimento fluida, com foco em legibilidade e produtividade.

## 🚀 Funcionalidades

- **Syntax Highlighting:** Realce de sintaxe completo e preciso para BFC Script e elementos Groovy.
- **Smart Formatting:** Formatador de código inteligente que respeita as configurações do seu editor.
- **Vertical Alignment (Method Chaining):** Alinhamento automático e preciso de chamadas de métodos encadeadas (o ponto `.` fica perfeitamente alinhado verticalmente).
- **Format on Save:** Configurado para organizar seu código automaticamente sempre que você salvar.
- **Iconografia Personalizada:** Identidade visual exclusiva para arquivos `.bfc` no explorador do VS Code.

## 🛠️ Como usar

1. Instale a extensão através do VS Code Marketplace.
2. Abra qualquer arquivo com a extensão `.bfc`.
3. Para formatar manualmente, use o atalho `Shift + Alt + F`.
4. O **Format on Save** já vem habilitado por padrão para esta linguagem.

## 🔗 Links

- **Repositório:** [GitHub - bfc-script](https://github.com/hallef/bfc-script)
- **Reportar Bugs:** [Issues](https://github.com/hallef/bfc-script/issues)

## 📂 Estrutura do Projeto

- `syntaxes/`: Definições da gramática para realce de sintaxe.
- `src/extension.js`: Lógica do provedor de formatação (Engine de alinhamento vertical).
- `icon/`: Recursos visuais da extensão.

---
Desenvolvido por [Hallef Lima](https://github.com/hallef)
