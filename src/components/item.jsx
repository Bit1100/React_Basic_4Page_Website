import React, { Component } from 'react';
import { contextBlog } from './context';

class Item extends Component {
    static contextType = contextBlog;
    render() {
        const { fitems } = this.context;
        return (
            <div className="category-items">
                {
                    fitems.map(item => {
                        return (
                            <div key={item.id} category={item.category} className="center category-items-item">{item.category}</div>
                        )
                    })
                }
            </div>
        );
    }

}

export default Item;