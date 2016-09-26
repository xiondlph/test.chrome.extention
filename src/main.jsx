import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './search-form';
import LastVisited from './last-visited';
import FooterLinks from './footer-links';

import './main.less';

class Container extends React.Component {
    render() {
        return <div className="container">
            <h1 className="extention-title">Тестовое расширение для задания от Mail.Ru Groupee</h1>
            <SearchForm/>
            <LastVisited/>
            <FooterLinks/>
        </div>
    }
}

ReactDOM.render(<Container/>, document.getElementById('wrapper'));
