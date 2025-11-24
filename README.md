# **Desafio AVB — Sistema de Autenticação**

Sistema de autenticação completo com login, cadastro, logout e rotas privadas protegidas com JWT.  
O projeto utiliza cookies HTTP-only para segurança e segue boas práticas de arquitetura com separação clara entre rotas, controladores e serviços.

---

## 🚀 **Tecnologias Utilizadas**

### **Back-end**
- **TypeScript**
- **Node.js + Express**
- **MongoDB**
- **Mongoose (ODM)**

### **Front-end**
- **HTML**
- **CSS**
- **JavaScript (Vanilla)**  
→ Os arquivos do front-end ficam em: `src/public/`

---

## 🔐 **Funcionalidades**

- Cadastro de usuário  
- Login  
- Logout  
- Rotas privadas protegidas com token  
- Cookies **HTTP-only** para armazenar o JWT  
- Criptografia de senhas com bcrypt

---

## 🛡️ **Segurança Implementada**

- Senhas armazenadas usando **hash com bcrypt**
- JWT gerado com **jsonwebtoken**
- Token enviado em cookie **HTTP-only**, mais seguro que:
  - `localStorage`
  - `sessionStorage`

Isso evita que scripts maliciosos acessem o token via JavaScript, reduzindo riscos de XSS.

---

## 📁 **Estrutura do Projeto**
│
├── dist/ # Arquivos compilados do TypeScript
├── node_modules/
├── package.json
├── tsconfig.json
│
└── src/
├── index.ts # Ponto de entrada da aplicação
├── config/ # Configuração de conexão com o MongoDB
├── controller/ # Controladores das rotas
├── middleware/ # Middlewares (ex: verificação de token)
├── models/ # Schemas do Mongoose
├── routes/ # Rotas da API
├── service/ # Regras de negócio
├── utils/ # Funções utilitárias
├── @types/ # Tipagens personalizadas
│
└── public/ # 🟦 Front-end (HTML, CSS, JS)
├── css/
├── js/
├── images/
└── *.html # Páginas front-end

