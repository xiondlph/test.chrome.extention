import React from 'react';
import ReactDOM from 'react-dom';

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
        console.log(this.state);

        event.preventDefault();
        event.stopPropagation();
    };

    render() {
        return <form onSubmit={this.onSubmit}>
            <input onChange={this.onChange} placeholder="Введите строку для поиска"/>
        </form>
    }
}

class Links extends React.Component {
    onHistory() {
        chrome.tabs.create({ "url": "chrome://history", "active": true });
    }

    onBookmarks() {
        chrome.tabs.create({ "url": "chrome://bookmarks", "active": true });
    }

    onDownloads() {
        chrome.tabs.create({ "url": "chrome://downloads", "active": true });
    }

    render() {
        return <div className="footer-links">
            <a href="#" onClick={this.onHistory}>История</a>
            <a href="#" onClick={this.onBookmarks}>Избранное</a>
            <a href="#" onClick={this.onDownloads}>Загрузки</a>
        </div>
    }
}

class Container extends React.Component {
    render() {
        return <div className="container">
            <SearchForm/>
            <Links/>
        </div>
    }
}

ReactDOM.render(<Container/>, document.body);