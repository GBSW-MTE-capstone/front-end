import React from 'react'

export const Bongyang = () => {

  const data = [
    {
      name : "탑산약수온천",
      address : "봉양면 구산리",
      desc : "경상북도 의성군 봉양면 구산리에 위치한 탑산약수온천 입니다. 탑산약수온천은 세계적으로 희귀한 수질을 가진 약수온천입니다. 몸에 기를 넣어 건강을 증진시키는 유기 게르마늄 성분이 72.4 ㎍/ℓ로 세계 최고 게르마늄 함유 온천이며, 이외에도 셀레늄, 리튬, 유리탄산, 유황, 유화수소, 화산염이 다량 함유되어있는 한국 유일의 복합약수온천입니다. 약수온천 때문에 의성 오신분들을 위해 숙소도 구비가 되어 있기때문에 편하게 온천을 즐기고 1박2일 여행이 가능합니다.",
      img1 : "./location/topsanmed1.png",
      img2 : "./location/topsanmed2.png"
    },
    {
      name : "의성해피데이 흑마늘카페",
      address : "봉양면 화전리",
      desc : "의성군 봉양면 화전리에 위치한 해피데이 흑마늘카페 입니다. 입구에 들어서면 오른쪽에 계단이 있는데요. 이 계단은 2층으로 올라가는 계단이고 2층은 세미나실로 활용되고 있다고 합니다. 의성에서 생산되는 마늘을 가공한 흑마늘을 활용하여 음식 및 음료등을 만드는 의성흑마늘 6차산업 카페 & 레스토랑 입니다. 메뉴판을 보시면 온통 흑마늘인데 일반 음식점과 카페에서는 볼 수 없는 흑마늘 카페에 매력입니다.",
      img1 : "./location/happy1.png",
      img2 : "./location/happy2.png"
    }
  ]

  return (
    <div>
      <h2># 봉양면</h2>
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