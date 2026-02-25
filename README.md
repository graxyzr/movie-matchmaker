# 🎬 Movie Matchmaker

**Movie Matchmaker** é uma aplicação web desktop com temática cinematográfica que ajuda você a descobrir e favoritar filmes de forma interativa. Com uma interface elegante e imersiva, você pode navegar por filmes usando botões ou teclado, criando sua própria cinemateca pessoal.

## 🌐 **Link do Projeto**

O projeto está disponível online em:
```
https://movie-matchmaker.vercel.app
```

## ✨ Funcionalidades

- 🎥 **Interface Cinematográfica** - Design escuro e elegante que remete à experiência de cinema
- 🃏 **Cards de Filmes** - Visualização de pôster, título, ano e sinopse
- 👍 **Sistema de Like/Pass** - Decisões rápidas com botões ou teclado
- ⌨️ **Navegação por Teclado** - Use as setas ← (Pass) e → (Like)
- 💾 **Persistência Local** - Favoritos salvos no localStorage do navegador
- 📚 **Cinemateca Pessoal** - Sidebar com histórico de filmes favoritados
- ⚡ **Carregamento Infinito** - Mais filmes carregam automaticamente
- 🎨 **Animações Suaves** - Transições e efeitos visuais cinematográficos

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework CSS para estilização
- **Axios** - Cliente HTTP para requisições à API
- **Lucide React** - Ícones modernos e personalizáveis
- **TVmaze API** - API pública de filmes/séries (sem necessidade de chave)
- **Vercel** - Plataforma de deploy e hospedagem

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

## 🔧 Instalação e Execução Local

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/movie-matchmaker.git
cd movie-matchmaker
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto
```bash
npm run dev
```

### 4. Acesse no navegador
```
http://localhost:5173
```

## 🚢 Deploy

### Deploy Automático com Vercel

O projeto está configurado para deploy fácil na Vercel:

1. Faça fork/push do projeto para seu GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Clique em "Deploy"

Ou use a Vercel CLI:
```bash
npm install -g vercel
vercel
```

## 🎮 Como Usar

### Navegação
- **Clique nos botões** - ❤️ para Like, ✕ para Pass
- **Use o teclado** - ← seta esquerda (Pass) | → seta direita (Like)

### Favoritos
- Os filmes marcados com Like são automaticamente salvos na sidebar lateral
- Acesse sua "Cinemateca" para ver todos os filmes favoritados
- Os dados persistem mesmo após fechar o navegador

### Interface
- **Área Principal** - Card do filme atual com pôster e informações
- **Sidebar Direita** - Histórico de filmes favoritados
- **Controles** - Botões de ação com feedback visual

## 🛠️ Estrutura do Projeto

```
movie-matchmaker/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   ├── ActionButtons.jsx    # Botões de like/pass
│   │   ├── HistorySidebar.jsx   # Sidebar de favoritos
│   │   ├── MovieCard.jsx        # Card do filme
│   │   └── SkeletonCard.jsx     # Loading state
│   ├── services/
│   │   └── tvmazeApi.js         # Integração com API
│   ├── App.jsx                   # Componente principal
│   ├── index.css                 # Estilos globais
│   └── main.jsx                  # Ponto de entrada
├── .env                          # Variáveis de ambiente
├── .gitignore                     # Arquivos ignorados
├── index.html                     # HTML principal
├── package.json                   # Dependências
├── postcss.config.js              # Config do PostCSS
├── tailwind.config.js             # Config do Tailwind
├── vercel.json                    # Config do Vercel
└── vite.config.js                 # Config do Vite
```

## 🎨 Personalização

### Cores e Tema
O projeto usa uma paleta de cores cinematográfica:
- **Fundo Principal**: `#0a0a0f` (cinema-950)
- **Elementos Secundários**: `#14141f` (cinema-900)
- **Destaques**: Roxo (`#a855f7`) e Rosa (`#ec4899`)

### Animações
- `slide-left` - Animação para decisão "Pass"
- `slide-right` - Animação para decisão "Like"
- `fade-in` - Entrada suave de novos cards
- `glow` - Efeito de brilho pulsante
- `pulse-slow` - Pulsação suave para elementos decorativos

## 📦 Dependências Principais

```json
{
  "dependencies": {
    "axios": "^1.6.0",
    "lucide-react": "^0.263.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.0"
  }
}
```

## 📊 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza build localmente
npm run deploy   # Deploy para Vercel (requer CLI)
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Agradecimentos

- [TVmaze](https://www.tvmaze.com/api) pela API gratuita de filmes e séries
- [Tailwind CSS](https://tailwindcss.com) pelo framework incrível
- [Lucide](https://lucide.netlify.app) pelos ícones elegantes
- [Vite](https://vitejs.dev) pela experiência de desenvolvimento
- [Vercel](https://vercel.com) pelo deploy fácil e gratuito

## 📧 Contato

**Live Demo**: [https://movie-matchmaker.vercel.app](https://movie-matchmaker.vercel.app)

**GitHub**: [https://github.com/seu-usuario/movie-matchmaker](https://github.com/graxyzr/movie-matchmaker)

---
