import { useState } from "react";
import { FaSearch } from "react-icons/fa";
export const Header = () => {
  const [searchText, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const search = () => {
    // 여행지 검색만 가능하게
  };

  return (
    <div className="headerContainer">
      <div className="header">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
            alt="로고"
          />
          <h2>의성군 문화관광 도우미</h2>
        </div>
        <div className="searchForm">
          <input
            type={"text"}
            placeholder="검색어를 입력하세요."
            onChange={onChange}
          />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="nav" id="nav">
        <ul>
          <li>의성 관광 명소</li>
          <li>축제</li>
          <li>음식·툭산물</li>
          <li>여행 후기</li>
          <li>QnA</li>
          <li>나의 의성지수는?</li>
        </ul>
      </div>
    </div>
  );
};
