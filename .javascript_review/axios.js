// ✅ API call with axios (example)
// review(async.js): The asynchronous processing code, which is typically the target of await, is an API call function that returns a Promise, such as Axios.
// => This means that axios is an API call function that returns Promise!
/*
    import React, { useState } from 'react';
    import axios from 'axios';
    
    const App = () => {
      const [data, setData] = useState(null);
      const onClick = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
          setData(response.data);
        });
      };
      return (
        <div>
          <div>
            <button onClick={onClick}>불러오기</button>
          </div>
          {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </div>
      );
    };
    
    export default App;
*/

// add syntatic sugar! (async-await)
/*
    import React, { useState } from 'react';
    import axios from 'axios';
    
    const App = () => {
      const [data, setData] = useState(null);
      const onClick = async () => {
        try {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos/1',
          );
          setData(response.data);
        } catch (e) {
          console.log(e);
        }
      };
      return (
        <div>
          <div>
            <button onClick={onClick}>불러오기</button>
          </div>
          {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </div>
      );
    };
    
    export default App;
*/


