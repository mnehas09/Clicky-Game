import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";


class App extends Component {
  state = {
    friends
  };

render() {
    return (
      <Wrapper>
      <Navbar />
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
