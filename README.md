# 💻 Code Challenge - Front End!

## 📝Descrição

Nesse code challenge simples, você só precisa desenvolver uma 'To Do list' com opções de adicionar e deletar um to do na lista (só isso mesmo, mas com código caprichado!).
Todos os pacotes necessários para fazer isso já estão adicionados, mas se achar que tem necessidade, pode adicionar algo a mais (e explicar o motivo depois).

O foco do code challenge é conhecer melhor sua **criatividade, organização, capricho, padrões seguidos, legibilidade do código e bom uso das ferramentas disponíveis** (sem gambiarras! 🤣), por isso, programe como se fosse um projeto profissional sendo feito para um cliente importante. O layout e design é um pequeno diferencial!

## ❗ Importante

É obrigatório o uso das seguintes ferramentas (já instaladas e configuradas):

- redux (para estado global E chamadas á API)
  - [redux-toolkit com o createSlice e funções thunk (async)](https://redux-toolkit.js.org/usage/usage-with-typescript#createslice)
  - duck pattern
- styled components (em conjunto do TS)
- axios
- typescript (**Tudo** bem tipado)
- react hooks
  - useCallback
  - useMemo (opcional)
  - useEffect
  - useDispatch
  - useSelector

🚫 O que não pode? (por favor 🙏😂)

- usar **eslint-disable** em qualquer lugar
- usar tipagem **any** (sem preguiça!)
- deixar qualquer **warning ou erros** no console do servidor (tipo aqueles de react-hooks)
- deixar erros do eslint
- códigos comentados
- console logs
- fazer apenas 1 commit com todo código
- abrir PR de volta sem usar o eslint (`yarn lint:fix`)

## ➕ Mais Informações

### WEB:

Para começar, basta **clonar** esse repositório para a sua conta, se preferir que seja privado, me dar acesso ao repo (@hladf), programar tudo que precisa, depois nos enviar a url do seu repo.
O sistema só precisa adicionar e deletar itens da lista de Todo, ter uma interface amigável, sem ser feia e sem renderizações desnecessárias de componentes/funções (pra isso os hooks), mas se quiser implementar algo mais para poder mostrar melhor como é seu código, fique á vontade.

### API:

Você pode usar a do `json-server` que já está configurada, basta rodar o comando `yarn api:server` que abrirá um servidor no endereço que está configurado no `.env`.
Já vem com as rotas `/example` e `/todos`.

[**Mais informações sobre `json server`** 🌐](https://github.com/typicode/json-server#json-server--)

## 🍀 Dicas

- Uma boa dica pra se fazer um código de qualidade é seguir esse guia de [Object Calisthenics](https://medium.com/@rafaelcruz_48213/desenvolva-um-c%C3%B3digo-melhor-com-object-calisthenics-d5364767a9ba). De nada!
- Seguir padrões conhecidos pela comunidade é uma boa idéia.
- Lógicas extensas no JSX ou Nested-ternaries em excesso podem piorar bastante a legibilidade do seu código.
- Código em outra lingua que não seja ingles são fora do padrão de mercado e da comunidade (variaveis, funções, etc... só textos que não precisam estar em inglês)
- Commits pequenos, descritivos e organizados mostram um pouco de como é sua linha de raciocínio e organização

## 👨‍💻 Scripts prontos

### `yarn start`

### `yarn api:server`

### `yarn lint:fix`

# 🚀🚀
