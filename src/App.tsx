// import React from 'react';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Comp, CompChild } from './Comp';
import Test1 from './apps/test1';
import Test2 from './apps/test2';
import Test3 from './apps/test3';
import { Divider, Space } from 'antd';

function App() {
  // const [count, setCount] = useState(0);

  // const handleBtnClick = () => {
  //   setCount(prev => prev + 1);
  // }

  useEffect(() => {
    console.log(React.createElement('div', { key: 'aaaa' }, 'this is a div comp'), Comp, CompChild);
  }, []);

  return (
    <Space style={{ width: '100%' }} direction='vertical'>
      <Comp />
      <CompChild />
      <Divider />
      <Test1 />
      <Divider />
      <Test2 />
      <Divider />
      <Test3 />
    </Space>
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>

    //     <p>{count}</p>
    //     <button onClick={handleBtnClick}>count++</button>

    //     <Comp />
    //   </header>
    // </div>
  );
}

export default App;
