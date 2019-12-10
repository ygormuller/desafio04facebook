import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
    state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Julio Alcantara",
            avatar: require('../assets/im1.png')
          },
          date: "04 Jun 2019",
          content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
          comments: [
            {
              id: 1,
              author: {
                name: "Diego Fernandes",
                avatar: require('../assets/burns.jpeg')
              },
              content: "Conteúdo do comentário"
            }
          ]
        },
        {
          id: 2,
          author: {
              name: "Nina Bruna",
              avatar: require('../assets/im2.png')
          },
          date: "24 Dez 2019",
          content: "Em pleno Natal aqui!",
          comments: [
              {
                id: 1,
                author: {
                  name: "Diego Fernandes",
                  avatar: require('../assets/burns.jpeg')
                },
                content: "Isso ai Nina, manda ver!"
              }
          ]
        }
      ]
    };
    render() {
      //console.log(this.state);
       return (
        <div>
          {this.state.posts.map(post => (<PostItem key={post.id}  post={post}/>))}
        </div>
       );
    }
  }

  export default PostList;

