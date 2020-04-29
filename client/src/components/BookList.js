import React from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries'
import BookDetails from './BookDetails'

 
class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    showDetails = (id) => {
        this.setState({id});
    }

    displayBooks = () => {
        const data = this.props.data;
        if(!data.books) return <div> Loading ....</div>
        else return data.books.map(book => <li key={book.id} onClick={(e) => this.showDetails(book.id)}>{book.name}</li>)
    }

    render() {
        return (
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
                <BookDetails bookId={this.state.id} />
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);
