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
      <div className="header">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
            alt="로고"
          />
          <Link to={"/"}>
            <h2>의성군 문화관광 도우미</h2>
          </Link>
        </div>
        <div className="searchForm">
          <input
            type={"text"}
            placeholder="검색어를 입력하세요."
            onChange={onChange}
          />
          <button onClick={search}>
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="nav" id="nav">
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
            <li>음식 · 툭산물</li>
          </Link>
          <Link to={"/tourreview"}>
            <li>여행 후기</li>
          </Link>
          <Link to={"/qna"}>
            <li>QnA</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
