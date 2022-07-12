import React from 'react'

export const Angye = ()=> {

  const data = [
    {
      name : "낭만농부",
      address : "안계면 소보안계로",
      desc : "의성군 안계면 소보안계로에 위치한 낭만농부 입니다. 여기는 농촌체험을 할수 있는 곳으로 근처에 숙소가 있어서 1박 2일로 농촌체험을 하기에 가장 적당합니다. 낭만농부에서 농업창업관련 수업도 들을 수 있습니다. 낭만적인 농촌의 삶을 경험하는 농활베이스 캠프의 특징을 잘 살려내서 도시에만 있다가 가도 생각보다 재밌고 현실 동물의 숲을 하는 것 처럼 힐링을 받는 효과도 있었습니다.",
      img1 : "./location/nangma1.png"
    },
    {
      name : "비안향교",
      address : "안계면 교촌리",
      desc : "오른쪽은 비안향교에 외삼문 입니다. 원래 비안읍에 소재였으나 임진왜란 때 소실되어 광해군때 재건 했습니다. 임진왜란 때는 이 지역 사람인 손복이 향교의 위패를 산중 굴속에 숨겨 무사히 피해를 면했다고 전해집니다.",
      img1 : "./location/bian1.png",
      img2 : "./location/bian2.png"
    }
  ]

  return (
    <div>
      <h2># 안계면</h2>
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