import React, { Component } from 'react';

// AppクラスがComponentを継承している
// Appのことをクラスコンポーネントと呼ぶ
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={ () => {console.log("I am clicked.")} }/>;

//       </div>
//     );
//   }
// }

// 関数コンポーネント
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  ); 
}

const Cat = () => {
  return <div>Meow!</div>;
}

export default App; 