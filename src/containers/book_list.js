import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
          </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

}
//Anything returned from this function will end up as props on the BookList container
function mapStateToProps(state){
  //whatever is returned will show up as props inside of BookList. This is the glue between React and Redux
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all our reducers
  //when we click on the book to select it, the key will call the selectBook function
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//Promote BookList from a component to a container - it needs to know about
//this new dispatch method, selectBook. Make it available as a prop. Check out
//the React-Redux docs for more info
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
