import React from 'react';
import { graphql } from 'react-apollo';
import {getBookQuery } from '../queries/queries'
 
class BookDetails extends React.Component {
    showDetails = () => {
        const book = this.props.data.book;
        if (!book) return <p>Fetching details</p>
        else {
            return (
                <div>
                    <p>{ book.name }</p>
                    <p>{ book.genre }</p>
                    <p>{ book.author.name }</p>
                    <p>All books by this Author</p>
                    <ul className='other-books'> 
                        { book.author.books.map(item => <li key={item.id}>{ item.name} </li>)}
                    </ul>
                </div>
            )
        }
    }

    render() {
        return (
            <div id="book-details">
               { this.showDetails() }
            </div>
        )
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);
