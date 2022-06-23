import React from "react";
import { useState } from "react";
import { Layout } from "../components/layout";

//축제 페이지
export const Event = () => {
  //이거 api를 어떻게 하는지 봐야 되는디
  const sampleData = {
    success: true, //or false
    data: [
      {
        id: 1,
        name: "의성슈퍼푸드마늘축제",
        desc: "마늘이 조아",
        date: "2022-10-03",
        thumnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUgRHxLKuG3_EUYsVSjvX1bRttw5kd9nPoQ&usqp=CAU",
      },
      {
        id: 2,
        name: "의성세계하늘축제",
        desc: "마늘이 조아",
        date: "2022-10-03",
        thumnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-okhlrWS_mWUpt18Nydx3gXn7X2vJT4KkeA&usqp=CAU",
      },
      {
        id: 3,
        name: "산수유마을 꽃마을행사",
        desc: "마늘이 조아",
        date: "2022-10-03",
        thumnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibl3ZzZy5zLdvzYfmK3edKLjjI9AYVQ3A9A&usqp=CAU",
      },
    ],
  };

  const data = {
    success: true, //or false
    data: [
      {
        id: 3,
        name: "산수유마을 꽃마을행사",
        desc: "마늘이 조아",
        date: "2022-10-03",
        thumnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibl3ZzZy5zLdvzYfmK3edKLjjI9AYVQ3A9A&usqp=CAU",
      },
    ],
  };
  return (
    <Layout>
      <div className="festival">
        <div>
          <h2>현재 진행중인 축제</h2>
          {data.data.map((item) => {
            return (
              <div className="eventList" key={item.id}>
                <img src={item.thumnail} width="300px" />
                <div>
                  <h2>{item.name}</h2>
                  <p>일시 : {item.date}</p>
                  <p>설명 : {item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div>
          <h2>의성의 모든 축제</h2>
          {sampleData.success ? (
            sampleData.data.map((item) => {
              return (
                <div key={item.id} className="eventList">
                  <img src={item.thumnail} width="300px" />
                  <div>
                    <h2>제목 : {item.name}</h2>
                    <p>일시 : {item.date}</p>
                    <p>설명 : {item.desc}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </Layout>
  );
};
