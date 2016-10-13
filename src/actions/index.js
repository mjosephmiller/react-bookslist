export function selectBook(book){
//selectBook is an Action Creator, it needs to return an action,
//an object with a property called type
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}
