import React from 'react';

class SearchBar extends React.Component {
    state = {
            term: ''
        };
    

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    } 

    render() {
        return (
            <div className="ui segment">
              <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                  <label htmlFor="search">Image Search: </label>
                  <input 
                  name="search"
                  type='text'
                  placeholder='Search'
                  onChange={this.onInputChange}
                  value={this.state.term} />
                </div>
              </form>
            </div>
        );
    }
}

export default SearchBar;