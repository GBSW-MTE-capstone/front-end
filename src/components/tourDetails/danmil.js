import React from 'react'

export const Danmil = () => {

  const data = [
    {
      name : "의성 낙단보",
      address : "단밀면 생송리",
      desc : "의성군 단밀면 생송리에 위치한 낙단보 입니다.  낙단보는 낙동강을 한눈에 볼 수 있는 야경명소로 유명한데요. 이곳 수변공원에해바라기 단지가 조성되어 있습니다. 낙단보는 상주시와 의성군에 걸쳐 있는데, 해바라기 단지는 의성군 낙단보 강변에 조성되어 있습니다. 주차공간이 따로 마련되어 있지만, 뜨거운 햇볕에 한참 걸어야 하니 해바라기 단지 내에 주차하기를 추천합니다. 낙단보 수변공원에 있던 자투리 땅 5ha(1500평) 키 작은 해바라기 12만 그루를 심어 관광단지를 조성하였는데요. 강렬한 태양아래 구름과 어우러진 보석 같은 해바라기 꽃이 장관을 이루고 있답니다. 다만,한낮에는 햇볕이 따가우니 모자나 양산은 꼭 준비해 가세요.",
      img1 : "./location/nakdan1.png",
      img2 : "./location/nakdan2.png"
    }
]

  return (
    <div>
      <h2># 단밀면</h2>
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