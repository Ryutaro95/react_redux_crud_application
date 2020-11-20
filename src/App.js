import React, { Component } from 'react';


const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      {/* nameというprops(属性)を与えた */}
      {/* <User name={"Taro"} age={10} />
      <User name={"Hanako"} age={5} /> */}
    </div>
  ); 
}

// props を渡す
const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old!</div>;
}

// デフォルトでageに値を渡しておくことで、ageが存在しないときデフォルト値が設定される
User.defaultProps = {
  age: 1
}

export default App; 