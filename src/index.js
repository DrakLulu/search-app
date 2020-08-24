import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState, useEffect } from 'react';
import Json from "./json.json";


function RenderJson(param) {
  console.log(param.hits);
  if(param.hits) {
    return param.hits.map((element) => <img key={element.id} src={element.webformatURL}></img>);
  }else return <p>No images</p>;
}


function useGetData(params) {
  var API_KEY = '18014975-e304a8e046e40ede228cd6197';
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState("false");

    useEffect(() => {
    async function fetchData() {
      try {
        setLoading("true");
        const response = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(params)}`
        );
        const json = await response.json();
        console.log(json);
        setResult (json);
      } catch (error) {
        setLoading("null");
      }
    }
    if (params !== "") {
      fetchData();
    }
  }, [params]);
  return [result, loading];

}

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [result, loading] = useGetData(query);
  return  (
    <div>
      <div className="topnav">
          <form
          onSubmit={e => {
            e.preventDefault();
            setQuery(search);
          }}>
            <input id="text" type="text" onChange={e => setSearch(e.target.value)} />
            <input type="submit" value="search" />
          </form>
        
      </div>
      {loading === "false" ? (<div><p>Search for flowers !</p><div className="row">{RenderJson(Json)}</div></div>
            ) : (
                  <div className="row">
                    {RenderJson(result)}
                  </div>
            )}
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root') 
);

