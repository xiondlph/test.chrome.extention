import React from 'react';
import { Sortable } from 'react-sortable';

const
    getFaviconFromUrl = (url) => {
        const domain = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);

        return domain ? `${domain[0]}favicon.ico` : '';
    }

class ListItem extends React.Component {
    onClick = (event) => {
        chrome.tabs.update({
            url: this.props.children.url
        });
        console.log(this.props.children.url);
    };

    render() {
        const
            faviconUrl = getFaviconFromUrl(this.props.children.url),
            bgStyle = {
                backgroundImage: `url(${faviconUrl})`
            };

        return (
            <li
                {...this.props}
                onClick={this.onClick}
                className="last-visited__list__item"
                style={bgStyle}
            >
                <span className="last-visited__list__item_title">{
                    this.props.children.title || this.props.children.url
                }</span>
            </li>
        )
    }
}

var SortableListItem = Sortable(ListItem);

class LastVisited extends React.Component {
    state = {
        draggingIndex: null,
        data: {
            items: []
        }
    };

    getListHistory() {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get(['visited'], data => {
                if (!data.visited) {
                    chrome.history.search({
                        text: '',
                        maxResults: 8
                    }, historyItem => {
                        console.log(historyItem);
                        const visited = historyItem.map(item => {
                            return {
                                title: item.title,
                                url: item.url
                            }
                        });

                        chrome.storage.sync.set({ visited });

                        resolve(visited);
                    });
                } else {
                    resolve(data.visited);
                }
            });
        });
    }

    componentDidMount() {
        this.getListHistory().then(items => {
            this.setState({
                data: {items}
            });
        });
    }

    updateState = (changes) => {
        if (changes.items) {
            chrome.storage.sync.set({ visited: changes.items });
        }
        this.setState(changes);
    };

    render() {
        var listItems = this.state.data.items.map(function(item, i) {
            return (
                <SortableListItem
                    key={i}
                    updateState={this.updateState}
                    items={this.state.data.items}
                    draggingIndex={this.state.draggingIndex}
                    sortId={i}
                    outline="list"
                >{item}</SortableListItem>
            );
        }, this);

        return (
            <div className="last-visited"><ul className="last-visited__list">{listItems}</ul></div>
        )
    }
}

export default LastVisited;
