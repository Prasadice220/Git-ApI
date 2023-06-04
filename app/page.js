"use client";
import React, { useEffect, useState } from "react";

import Boxc from "./components/boxc/Boxc";
import Loader from "./components/loader/load";

const Home = () => {
  const [isA, setA] = useState(true);
  const [isSearch, setSearch] = useState(false);
  const [isWord, setWord] = useState("");
  const [isquery, setQuer] = useState("");
  const [results, setResult] = useState([]);
  const [Qid, setQid] = useState("");
  const [pagen, setPage] = useState(1);
  const [tresults, setResu] = useState("");
  const [lengh, setLengh] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [apiL, setLimit] = useState(false);
  const [noMatch, setMatch] = useState(false);
  useEffect(() => {
    if (isquery == "") {
      var ele = document.getElementsByClassName("tex");
      var elem = document.getElementsByClassName("radi");
      elem[1].checked = false;
      elem[0].checked = false;
      ele[0].value = "";
    }
  }, [isquery]);

  const setQu = () => {
    if (Qid == "a") {
      setQuer(
        `https://api.github.com/search/users?q=${isWord}&page=${pagen}&per_page=10`
      );
      setResu(`https://api.github.com/search/users?q=${isWord}`);
    } else {
      setQuer(
        `https://api.github.com/search/repositories?q=${isWord}&page=${pagen}&per_page=10`
      );
      setResu(`https://api.github.com/search/repositories?q=${isWord}`);
    }
  };

  useEffect(() => {
    if (tresults != "") {
      fetch(tresults)
        .then((r) => r.json())
        .then((res) => {
          if (res.total_count < 1000) {
            setLengh(res.total_count);
          } else {
            setLengh(1000);
          }
          if (res.total_count == 0) {
            setMatch(true);
          }
        });
    }
  }, [tresults]);

  const setQuery = (sea) => {
    if (isWord != "") {
      setQid(sea.target.id);

      if (sea.target.id == "a") {
        setA(true);

        setQuer(
          `https://api.github.com/search/users?q=${isWord}&page=${pagen}&per_page=10`
        );
      } else if (sea.target.id == "b") {
        setA(false);
        setSearch(false);
        setQuer(
          `https://api.github.com/search/repositories?q=${isWord}&page=${pagen}&per_page=10`
        );
      }
    } else {
      alert("Type Keywords to search");
    }
  };

  useEffect(() => {
    if (isquery != "") {
      setLoading(true);
      setTimeout(() => {
        fetch(isquery)
          .then((r) => r.json())
          .then((res) => {
            if (res.message != null) {
              setLimit(true);
            }
            setResult(res.items);
            setLoading(false);
          });
      }, 1000);
    }
  }, [isquery]);

  const setRes = () => {
    if (isquery != "") {
      setQu();
    } else {
      alert("select option");
    }
  };

  const setSea = (code) => {
    if (code.type == "keyup") {
      setWord(code.target.value);

      if (code.keyCode == 13) {
        setRes();
      }
    } else if (code.type == "click") {
      if (isWord != "" && isquery != "") {
        setSearch(true);

        setRes();
      } else {
        alert("Search/option empty");
      }
    }
  };
  useEffect(() => {}, [lengh]);
  useEffect(() => {
    if (isSearch) {
      setRes();
    }
  }, [pagen]);

  const Counter = (cla) => {
    if (cla.target.className == "prev") {
      if (pagen > 1) {
        setPage(pagen - 1);
      }
    } else {
      if (pagen < lengh / 10) {
        setPage(pagen + 1);
      }
    }
  };

  return (
    <div id="hcon">
      <h1>Home Page</h1>
      <input
        className="tex"
        onKeyUp={setSea}
        type="text"
        placeholder="Search"
      ></input>
      <br></br>
      <br></br>
      <label>Name</label>
      <input
        id="a"
        onClick={setQuery}
        name="same"
        className="radi"
        type="radio"
        required
      ></input>
      <label>Project</label>{" "}
      <input
        id="b"
        onClick={setQuery}
        name="same"
        className="radi"
        type="radio"
        required
      ></input>
      <br></br>
      <br></br>
      <button onClick={setSea}>Search</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {isSearch && (
        <>
          <button className="prev" onClick={Counter}>
            Prev
          </button>
          &nbsp;&nbsp;&nbsp;{pagen != 1 && <span className="page1">1</span>}
          &ensp;{pagen <= 2 ? "" : <span className="pagel">{pagen - 1}</span>}
          &ensp;{<span className="pagecur">{pagen}</span>} •••••{" "}
          {lengh != pagen && <span className="pagel"> {lengh}</span>}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="next" onClick={Counter}>
            Next
          </button>
        </>
      )}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {isA && isSearch && !apiL ? (
        isLoading ? (
          <Loader />
        ) : (
          results.map((res) => (
            <Boxc
              name={res.login}
              key={res.id}
              link={res.html_url}
              imgs={res.avatar_url}
            />
          ))
        )
      ) : (
        ""
      )}
      {!isA && isSearch && !apiL ? (
        isLoading ? (
          <Loader />
        ) : (
          results.map((res) => (
            <Boxc
              name={res.full_name}
              key={res.id}
              link={res.owner.html_url}
              imgs={res.owner.avatar_url}
              Project={res.html_url}
              Desc={res.description}
              Dat={res.updated_at}
              homep={res.homepage}
            />
          ))
        )
      ) : (
        ""
      )}
      {apiL && <h2>Api Limit Reached search after 10s</h2>}
      {!isLoading && noMatch && <h2>No Match Found</h2>}
    </div>
  );
};

export default Home;
