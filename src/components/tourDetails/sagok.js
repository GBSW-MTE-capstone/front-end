import React from 'react'

export const Sagok = () => {

  const data = [
    {
      name : "달빛공원",
      address : "사곡면 양지리 산",
      desc : "의성군 사곡면 양지리 산에 위치한 달빛공원 입니다. 달빛공원은 2012년 조성되었습니다. 의성 달빛공원 주변에 주월사라는 절이 있습니다. 주월사는 달이 머무는 절이라 하여 지어진 명칭이고, 주월사 인근에 공원을 조성하였다 하여 달빛공원이라 명명되었습니다. 해 질 무렵엔 주월사를 방문하고 어둠이 깔리면 공원으로 나와 별자리를 찾아보면서 지친 마음을 달래기 좋습니다. 날씨가 매우 괜찮을때는 사진만큼은 아니더라도 정말 별들이 잘보이니 힐링이 가능하니 꼭 가보길 추천합니다.",
      img1 : "./location/moonlightpark1.png",
      img2 : "./location/moonlightpark2.png"
    },
    {
      name : "산수유마을",
      address : "사곡면 사미신감로",
      desc : "의성군 사곡면 사미신감로에 위치한 산수유마을 입니다. 의성군 사곡면의 산수유꽃피는마을(이하 산수유마을)은 유구한 역사가 있습니다. 수령 200년이 넘은 산수유나무를 보는 것은 흔한 일이며 주민들은 봄이면 산천에 노란 구름을 띄우는 산수유나무를 잘 지켜냈습니다. 지금의 아름다운 군락 풍경은 2006년 살기 좋은 마을로 지정되면서 대내외로 더욱 알려졌습니다. 주변에 여러가지 꽃도 많고 잘찾아보면 봄나물도 많기 때문에 봄나물 캐러 오셔도 좋을 것 같습니다.",
      img1 : "./location/sansuyou1.png",
      img2 : "./location/sansuyou2.png"
    }
  ]

  return (
    <div>
      <h2># 사곡면</h2>
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