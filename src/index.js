import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Game extends React.Component {
  render() {
    return (
      <div>
        <div class="topnav">
          <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="search"></input>
          <button type="submit">go!</button>
        </div>
        <div>
        <div class="row">
          <div class="column" >
            <img src="https://64.media.tumblr.com/67cf12d4c7ea2e25ed1e8cbbb8864ffa/tumblr_ovlvveE8nx1w23459o1_500.jpg"  ></img>
            <img src="https://64.media.tumblr.com/67cf12d4c7ea2e25ed1e8cbbb8864ffa/tumblr_ovlvveE8nx1w23459o1_500.jpg"  ></img>
            <img src="https://64.media.tumblr.com/67cf12d4c7ea2e25ed1e8cbbb8864ffa/tumblr_ovlvveE8nx1w23459o1_500.jpg"  ></img>
          </div>
          <div class="column" >
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F68.media.tumblr.com%2Fc8e09a8e2743c5183bbde59ed14334e9%2Ftumblr_orqceyjBWM1rdeowpo1_500.jpg&f=1&nofb=1"  ></img>
            <img src="https://64.media.tumblr.com/67cf12d4c7ea2e25ed1e8cbbb8864ffa/tumblr_ovlvveE8nx1w23459o1_500.jpg"  ></img>
            <img src="https://64.media.tumblr.com/67cf12d4c7ea2e25ed1e8cbbb8864ffa/tumblr_ovlvveE8nx1w23459o1_500.jpg"  ></img>
          </div>
          <div class="column">
            <img src="https://64.media.tumblr.com/67cf12d4c7ea2e25ed1e8cbbb8864ffa/tumblr_ovlvveE8nx1w23459o1_500.jpg"  ></img>
            <img src="https://64.media.tumblr.com/67cf12d4c7ea2e25ed1e8cbbb8864ffa/tumblr_ovlvveE8nx1w23459o1_500.jpg"  ></img>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F68.media.tumblr.com%2Fc8e09a8e2743c5183bbde59ed14334e9%2Ftumblr_orqceyjBWM1rdeowpo1_500.jpg&f=1&nofb=1"  ></img>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
