import React from 'react';

class FooterLinks extends React.Component {
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
            <a className="footer-links__item" href="#" onClick={this.onHistory}>История</a>
            <a className="footer-links__item" href="#" onClick={this.onBookmarks}>Избранное</a>
            <a className="footer-links__item" href="#" onClick={this.onDownloads}>Загрузки</a>
        </div>
    }
}

export default FooterLinks;
