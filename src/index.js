import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Json from "./json.json";

// API Key     

function RenderJson(json) {
  return json.hits.map((element, i) => <img key={i} src={element.webformatURL}></img>);
}

class Columns extends React.Component {

  render() {
/* get json-images or noting (to handle)
*/
      return (
        <div className="row">
         {RenderJson(Json)}
        </div>
      );
    }
}

class Search extends React.Component {

  render() {
    return (
      <div>
        <div className="topnav">
          <input type="text" id="mySearch" placeholder="Search.." title="search"></input>
          <button>go!</button>
        </div>
            <Columns
            />
      </div>
    );
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
);
