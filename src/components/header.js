import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Header = () => {
  const [searchText, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const search = () => {
    console.log(searchText);
  };

  return (
    <div className="headerContainer">
      <div className="nav" id="nav">
        <Link to={"/"}>
          <h2>의성군 문화관광 도우미</h2>
        </Link>
        <ul>
          <Link to={"/"}>
            <li>HOME</li>
          </Link>
          <Link to={"/tour"}>
            <li>관광 명소</li>
          </Link>
          <Link to={"/event"}>
            <li>축제</li>
          </Link>
          <Link to={"/foods"}>
            <li>음식 · 특산물</li>
          </Link>
          <Link to={"/tourreview"}>
            <li>여행 후기</li>
          </Link>
          <Link to={"/qna"}>
            <li>QnA</li>
          </Link>
        </ul>
        <button onClick={search}>
          <FaSearch />
        </button>
      </div>
      <hr/>
    </div>
  );
};
