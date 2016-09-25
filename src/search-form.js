import React from 'react';

class SearchForm extends React.Component {
    state = {
        searchString: ''
    };

    onChange = (event) => {
        this.setState({
            searchString: event.currentTarget.value
        });

        event.preventDefault();
        event.stopPropagation();
    };

    onSubmit = (event) => {
        if(this.state.searchString){
            chrome.tabs.update({
                url: `http://www.ya.ru/?q=${this.state.searchString}`
            });
        }

        event.preventDefault();
        event.stopPropagation();
    };

    render() {
        return <form className="search-form" onSubmit={this.onSubmit}>
            <input className="search-form__input" onChange={this.onChange} placeholder="Введите строку для поиска"/>
        </form>
    }
}

export default SearchForm;
