const vscode = require('vscode');

/**
 * Classe responsável pela lógica de formatação da linguagem BFC.
 * Segue princípios de Clean Code e Separação de Preocupações.
 */
class BFCFormatter {
    constructor(options) {
        this.tabSize = options.tabSize || 4;
        this.insertSpaces = options.insertSpaces || false;
        this.indentChar = this.insertSpaces ? ' '.repeat(this.tabSize) : '\t';
        
        // Estado do formatador durante o processamento
        this.indentLevel = 0;
        this.chainColumn = null;
    }

    /**
     * Calcula a largura visual de uma string considerando o tamanho dos Tabs.
     */
    calculateVisualWidth(text, stopChar = null) {
        let width = 0;
        for (const char of text) {
            if (stopChar && char === stopChar) break;
            width += (char === '\t') ? this.tabSize : 1;
        }
        return width;
    }

    /**
     * Formata o documento completo.
     */
    format(text) {
        // Suporte a diferentes quebras de linha (LF/CRLF)
        const lines = text.split(/\r?\n/);
        return lines
            .map((line) => this.processLine(line))
            .join('\n');
    }

    /**
     * Processa cada linha individualmente, mantendo o estado de indentação.
     */
    processLine(line) {
        const trimmed = line.trim();

        // 1. Linhas vazias ou apenas com espaços
        if (!trimmed) {
            this.chainColumn = null;
            return '';
        }

        // 2. Ajuste de indentação (Outdent) antes de processar a linha
        if (this.isClosingBlock(trimmed)) {
            this.indentLevel = Math.max(0, this.indentLevel - 1);
        }

        let resultLine = '';

        // 3. Aplicação da Indentação ou Alinhamento
        if (this.isChainContinuation(trimmed)) {
            resultLine = this.applyChainAlignment(trimmed);
        } else {
            resultLine = this.applyStandardFormatting(trimmed);
            this.updateChainState(resultLine, trimmed);
        }

        // 4. Ajuste de indentação (Indent) após processar a linha (afeta a próxima)
        if (this.isOpeningBlock(trimmed)) {
            this.indentLevel++;
        }

        return resultLine;
    }

    isOpeningBlock(text) {
        return text.endsWith('{') || text.endsWith('[');
    }

    isClosingBlock(text) {
        return text.startsWith('}') || text.startsWith(']');
    }

    isChainContinuation(text) {
        return text.startsWith('.') && this.chainColumn !== null;
    }

    applyChainAlignment(text) {
        return ' '.repeat(this.chainColumn) + text;
    }

    applyStandardFormatting(text) {
        const indentation = this.indentChar.repeat(this.indentLevel);
        return indentation + text;
    }

    /**
     * Detecta se a linha atual inicia uma cadeia de métodos para alinhar as próximas.
     */
    updateChainState(formattedLine, trimmedText) {
        // Se a linha tem um ponto mas não começa com ele, é um início de chain
        if (trimmedText.includes('.') && !trimmedText.startsWith('.')) {
            this.chainColumn = this.calculateVisualWidth(formattedLine, '.');
        } else {
            // Se a linha não tem ponto ou já é uma continuação processada, reseta se não for chain
            if (!trimmedText.startsWith('.')) {
                this.chainColumn = null;
            }
        }
    }
}

/**
 * Entry point da extensão VS Code
 */
function activate(context) {
    const provider = vscode.languages.registerDocumentFormattingEditProvider('bfc', {
        provideDocumentFormattingEdits(document, options) {
            try {
                const formatter = new BFCFormatter(options);
                const fullText = document.getText();
                const formattedText = formatter.format(fullText);

                const fullRange = new vscode.Range(
                    document.positionAt(0),
                    document.positionAt(fullText.length)
                );

                return [vscode.TextEdit.replace(fullRange, formattedText)];
            } catch (error) {
                console.error('BFC Formatter Error:', error);
                return [];
            }
        }
    });

    context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
