import React, { useState } from 'react';

import Test from './components/Test';

const App = () => {
    const [parentData, setParentData] = useState('Data from Parent');

    const [childData, setChildData] = useState('888888888');

    const handleChildData = (data) => {
        setChildData(data);
        console.log(66,data);
        console.log(childData);
    };
    return (
        <div>
            <h1>Parent Component</h1>

            <Test data={parentData} sendDataToParent={handleChildData} />
        </div>
    );
};

export default App;