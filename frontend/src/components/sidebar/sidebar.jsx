import React from 'react';
import { useState } from 'react';
import './style.css'

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="sidebar-container">
            <div className={`sidebar open`}>
                <div className="sidebar-content">
                    <h2>Visualization Dashboard</h2>
                    <hr />
                    <h3>Filters</h3>
                    <form>
                        <label>
                            <span>Date Range:</span>
                            <input type="date" />
                            <input type="date" />
                        </label>
                        <br />
                        <label>
                            <span>Category:</span>
                            <select>
                                <option value="">All</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                                <option value="category3">Category 3</option>
                            </select>
                        </label>
                        <br />
                        <button type="submit">Apply Filters</button>
                    </form>

                </div>
            </div>
            <div className={`sidebar-overlay ${sidebarOpen? 'open' : ''}`} onClick={handleSidebarToggle}></div>
            {!sidebarOpen && <button className="show-sidebar-button" onClick={handleSidebarToggle} >
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                <img src="https://cdn-icons-png.flaticon.com/128/5107/5107718.png" alt="" width={20} />
            </button>}
        </div>
    );
};

export default Sidebar;