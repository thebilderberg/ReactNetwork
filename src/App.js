import React from "react";
import Header from "./Header/Header";
import Container from "./Container/Container";


const App = ({states, addPost, addMessage}) => {
  return (
      <div className="app">
          <Header/>
          <Container states={states}
                     addPost={addPost}
                     addMessage={addMessage}/>
      </div>
  );
}


export default App;
