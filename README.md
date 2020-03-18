# estudo04facebook

<h3 align="center">
  Estudo: Introdução ao React
</h3>

<p align="center">
  <a>Sobre o estudo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## Sobre o desafio

Aplicação do zero utilizando **Webpack, Babel, Webpack Dev Server e ReactJS**.

Nessa aplicação você foi desenvolvida uma **interface** semelhante com a do **Facebook** utilizando React.

As informações contidas na interface são **estáticas** e não refletem nenhuma API REST ou back-end.

### Componentes

**Header:** Responsável por exibir a logo e o link para acessar o perfil;

**PostList:** Responsável por armazenar os dados da listagem de post, esses dados devem ficar dentro do `state` do componente e não em uma variável comum, por exemplo:

**Post:** Responsável por exibir os dados do post, esses dados devem vir através de uma propriedade recebida do componente PostList, ou seja, lá no PostList você terá algo assim:

```js
posts.map(post => <Post key={post.id} data={post} />);
```

**Comment:** Responsável por exibir um comentário. Os dados do comentário virão por uma propriedade do componente. Dentro do componente Post você terá um novo `.map` para listar os comentários do post:

```js
data.comments.map(comment => <Comment key={comment.id} data={comment} />);
