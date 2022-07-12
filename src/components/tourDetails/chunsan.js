import React from 'react'

export const Chunsan = () => {

  const data = [
    {
      name : "빙계계곡",
      address : "춘산면 빙계리",
      desc : "경북 의성군 춘산면, 빙계리에 위치한 빙계계곡 입니다. 빙계계곡은 경북 8승의 하나로 1987년 9월 25일 군립공원으로 지정되었습니다. 얼음구멍과 바람구멍이 있어 빙산이라 하며, 그 산을 감돌아 흐르는 내를 빙계라 하고, 동네를 빙계리라 부른다. 빙계계곡은 빙계(氷溪) 3리 서원(書院) 마을에 위치하고 있습니다. 삼복 때 시원한 바람이 나오며 얼음이 얼고, 엄동설한엔 더운 김이 무럭무럭 솟아나는 신비의 계곡입니다. 빙계계곡은 깎아 세운 듯한 절벽 사이의 골짜기를 따라 시원한 물이 흐르며, 여덟 곳의 이름난 빙계8경이 있습니다. 빙계8경은 계곡 입구에서부터 용추, 물레방아, 바람구멍, 어진바위, 의각, 석탑, 얼음구멍, 부처막입니다.",
      img1 : "./location/Valley1.png"
    }
]

  return (
    <div>
      <h2># 춘산면</h2>
      <ul>
        {data.map(item => {
          return (
            <li className="tourList">
              <div>
              {item.img1 && 1 ? <img src={item.img1} alt={item.name} /> : <></>}
              {item.img2 && 1 ? <img src={item.img2} alt={item.name} /> : <></>}
              </div>
              <h2># {item.name}</h2>
              <h3>{item.address}</h3>
              <p>{item.desc}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}