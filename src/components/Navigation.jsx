import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div>
            <h1>Track Your Income and Expenses</h1>
              <nav>
                <ul>
                   <li><NavLink to="/">Home</NavLink></li>
                   <li><NavLink to="/income">Income</NavLink></li>
                   <li> <NavLink to="/expenses">Expense</NavLink></li>
                     
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;