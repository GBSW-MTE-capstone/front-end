import React from 'react'
export const Danbuk = () => {

  const data = [
    {
      name : "한국전통창조박물관",
      address : "단북면 중련길",
      desc : "의성군 단북면 중련길에 위치한 한국전통창조박물관 입니다. 2003년 전통문화창조란 설립목적에 따라 금오민속박물관으로 개관한 한국전통창조박물관은 한국의 근·현대 자료를 통해 전통을 재창조 하는데 그 역량을 기울이고 있는 비영리박물관입니다. 특히 어린이들에게는 인성과 창의력을, 성인에게는 입체적 사고력을 키우는데 그 주안점을 두고 있는 박물관입니다.총 제9전시실까지 있습니다. 그리고 야외전시실도 있습니다. 각 전시실마다 컨셉이 다르기 때문에 보통 박물관과는 다르게 질리지 않고 매 새로운 전시실마다 색다른 경험을 할 수 있습니다.",
      img1 : "./location/create2.png",
    }
]

  return  (
    <div>
      <h2># 단북면</h2>

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