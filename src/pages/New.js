import React, { Component } from 'react';
import './New.css';

// import { Container } from './styles';

export default class New extends Component {
  render() {
    return(
        <form id="new-post">
          <input type="file" />
          <input 
            type="text" 
            name="author"
            placeholder="Autor do Post"
          />
          <input 
            type="text" 
            name="place"
            placeholder="Local do Post"
          />
          <input 
            type="text" 
            name="description"
            placeholder="Descrição do Post"
          />
        </form>
    );
  }
}
