import React, { useState } from 'react';

const Test = ({ data, sendDataToParent}) => {

    const [childData, setChildData] = useState('Data from Child');

    const sendData = () => {
        sendDataToParent('1111111');
    };

    return (
        <div>
            <h2>Cart Component</h2>
            <p>{data}</p>
            <button onClick={sendData}>Send Data to Parent</button>
        </div>
    );
};

export default Test;