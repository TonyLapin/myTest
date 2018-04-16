import React, { Component } from 'react';


// split into two components

class Hero extends Component {
  render() {
    return (
      <div>
         <h2>{this.props.title}</h2>
         <p>{this.props.body}</p>
         <br />
         <h3><i>{this.props.author}</i></h3>
         <hr />
         <br />
      </div>
    );
  }
}

class Articles extends Component {
  render() {
    return (
      <div className={this.props.classArticles}>
         {this.props.article.map(function(art){
            return <Hero key={art.id} title={art.title} body={art.body} author={art.author} />;
         })}
      </div>
    );
  }
}

export default Articles;
