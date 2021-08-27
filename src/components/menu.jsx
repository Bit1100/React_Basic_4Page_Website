import React, { Component } from 'react';
import { contextBlog } from './context';

class Menu extends Component {
    static contextType = contextBlog;
    render() {
        const { onShowAll, onShowConcept, onShowProgress, onShowProject, onShowSolution, categories } = this.context;
        return (
            <div className="menu">
                <div className="center menu-heading">Menu</div>
                <div
                    onClick={() => onShowAll(categories[0].value)}
                    className="btn menu-category center">
                    {categories[0].value}
                </div>
                <div
                    onClick={() => onShowConcept(categories[1].value)}
                    className="btn menu-category center">
                    {categories[1].value}
                </div>
                <div
                    onClick={() => onShowProgress(categories[2].value)}
                    className="btn menu-category center">
                    {categories[2].value}
                </div>
                <div
                    onClick={() => onShowProject(categories[3].value)}
                    className="btn menu-category center">
                    {categories[3].value}
                </div>
                <div
                    onClick={() => onShowSolution(categories[4].value)}
                    className="btn menu-category center">
                    {categories[4].value}
                </div>
            </div>
        );
    }
}

export default Menu;