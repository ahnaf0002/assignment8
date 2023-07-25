import React from 'react';

const Income = () => {
    return (
        <div>
            <h1>Income Table</h1>
    <table>
        <tr>
            <th>Month</th>
            <th>Salary</th>
            <th>Bonus</th>
            <th>Total Income</th>
        </tr>
        <tr>
            <td>January</td>
            <td>$5000</td>
            <td>$1000</td>
            <td>$6000</td>
        </tr>
        <tr>
            <td>February</td>
            <td>$5200</td>
            <td>$800</td>
            <td>$6000</td>
        </tr>
        <tr>
            <td>March</td>
            <td>$5500</td>
            <td>$1200</td>
            <td>$6700</td>
        </tr>
        <tr>
            <td>April</td>
            <td>$4800</td>
            <td>$900</td>
            <td>$5700</td>
        </tr>
        <tr>
            <td>May</td>
            <td>$5100</td>
            <td>$1000</td>
            <td>$6100</td>
        </tr>
    </table>
        </div>
    );
};

export default Income;