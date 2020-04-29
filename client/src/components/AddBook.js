import React from 'react';
import { graphql } from 'react-apollo';
import * as Compose from 'lodash.flowright';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'
 
class AddBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
    }

    populateAuthors = () => {
        const data = this.props.getAuthorsQuery;
        if(!data.authors) return null
        else return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
    }

    addBook = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        })
    }

    render() {
        return (
            <form id="add-book" onSubmit={ this.addBook}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={(e) => this.setState({name: e.target.value})} />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e) => this.setState({genre: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e) => this.setState({authorId: e.target.value})}>
                        <option>Select author</option>
                        { this.populateAuthors() }
                    </select>
                </div>
                <button >+</button>

            </form>
        )
    }
}

export default Compose(
    graphql(getAuthorsQuery, { name: 'getAuthorsQuery'}),
    graphql(addBookMutation, {name: 'addBookMutation'})
)(AddBook);
