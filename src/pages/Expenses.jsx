import React from 'react';

const Expenses = () => {
    return (
        <div>
           <h1>Expense Table</h1>
    <table>
        <tr>
            <th>Month</th>
            <th>Rent</th>
            <th>Utilities</th>
            <th>Groceries</th>
            <th>Transportation</th>
            <th>Total Expenses</th>
        </tr>
        <tr>
            <td>January</td>
            <td>$1200</td>
            <td>$200</td>
            <td>$350</td>
            <td>$150</td>
            <td>$1900</td>
        </tr>
        <tr>
            <td>February</td>
            <td>$1150</td>
            <td>$220</td>
            <td>$320</td>
            <td>$130</td>
            <td>$1820</td>
        </tr>
        <tr>
            <td>March</td>
            <td>$1250</td>
            <td>$210</td>
            <td>$360</td>
            <td>$140</td>
            <td>$1960</td>
        </tr>
        <tr>
            <td>April</td>
            <td>$1220</td>
            <td>$230</td>
            <td>$340</td>
            <td>$160</td>
            <td>$1950</td>
        </tr>
        <tr>
            <td>May</td>
            <td>$1300</td>
            <td>$210</td>
            <td>$370</td>
            <td>$140</td>
            <td>$2020</td>
        </tr>
    </table>
        </div>
    );
};

export default Expenses;