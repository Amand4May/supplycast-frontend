# 📦 SupplyCast Web | Dashboard Logístico Preditivo

O **SupplyCast Web** é uma interface moderna e responsiva desenvolvida para transformar previsões geradas por Inteligência Artificial em ações operacionais estratégicas.

Construído com **React.js**, **TypeScript** e **Tailwind CSS**, o dashboard permite que analistas de *Supply Chain* monitorem riscos de ruptura de estoque, acompanhem previsões de demanda e tomem decisões preventivas antes que gargalos afetem a operação.

---

## 👨‍💻 Desenvolvedora

- **Amanda Mayumi Sato de Miranda**
  - GitHub: https://github.com/Amand4May
- **Marco Túlio Duenas**
  - GitHub: https://github.com/marco-rocks

---

## 🚀 Tecnologias

### Principais

- React.js
- TypeScript
- Tailwind CSS

### Bibliotecas e Ferramentas

- Axios
- React Router DOM
- Recharts *(ou Chart.js)*
- Lucide React

---

## ✨ Funcionalidades

- 📊 **Dashboard Inteligente**
  - Visualização centralizada dos principais indicadores logísticos.

- ⚠️ **Alertas de Ruptura**
  - Identifica automaticamente produtos com alto risco de falta de estoque utilizando previsões da IA.

- 📈 **Projeção de Demanda**
  - Gráficos interativos comparando a evolução do estoque com a previsão de consumo.

- 📦 **Monitoramento de SKUs**
  - Exibição detalhada dos produtos, estoque atual, previsão de esgotamento e nível de risco.

- 💰 **KPIs em Tempo Real**
  - Indicadores como:
  - Produtos em risco
  - Precisão do modelo preditivo
  - Custo potencial evitado
  - Nível geral de abastecimento

---

## 📁 Estrutura do Projeto

```text
supplycast-web/
├── package.json
├── tailwind.config.js
├── src/
│   ├── main.tsx              # Entrada da aplicação
│   ├── App.tsx               # Estrutura principal e rotas
│   ├── assets/               # Imagens e arquivos estáticos
│   ├── components/           # Componentes reutilizáveis
│   ├── pages/                # Páginas do sistema
│   ├── services/             # Comunicação com a API
│   ├── hooks/                # Hooks personalizados
│   ├── types/                # Tipagens TypeScript
│   └── utils/                # Funções auxiliares
└── ...
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/Amand4May/supplycast-web.git
```

Acesse a pasta do projeto:

```bash
cd supplycast-web
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3333
```

| Variável | Descrição |
|----------|-----------|
| `VITE_API_URL` | URL base da API do SupplyCast |

---

## 🎯 Objetivo

O objetivo do SupplyCast é reduzir perdas causadas por rupturas de estoque utilizando modelos preditivos de Machine Learning, oferecendo uma visualização intuitiva dos riscos e apoiando a tomada de decisão em operações logísticas.

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e de portfólio.

© 2026 SupplyCast. Todos os direitos reservados.
