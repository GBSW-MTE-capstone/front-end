import React from 'react'

export const Danchon = () => {

  const data = [
    {
      name : "최치원문학관",
      address : "단촌면 고운사길",
      desc : "의성군 단촌면 고운사길에 위치한 최치원문학관 입니다. 최치원문학관은 신라 말기에 태어나 우리나라뿐만 아니라 중국에서까지 당대 최고의 지성으로 손꼽히며, 오늘날에도 한결같이 추앙 받고 있는 고운 최치원 선생의 사상과 문학을 기리고 그의 업적을 널리 알리기 위해 세워졌습니다. 또한 그의 애국정신과 유·불·선 통합 사상을 대한민국의 현재와 미래의 주역들에게 전승시키는 막중한 책무를 안고 있습니다. 최치원문학관은 본래의 건립취지에 충실함은 물론 대강당과 고운문학공원등의 부속시설을 활용하여 방문객들과 지역민들을 위한 다양한 사회교육프로그램을 운영하여 최치원 선생의 애민정신을 구현할 것입니다.",
      img1 : "./location/choichiwon1.png",
      img2 : "./location/choichiwon2.png"
    },
    {
      name : "고운사",
      address : "단촌면 고운사길",
      desc : "고운사는 경상북도 의성군에 있는 대한 불교 조계종 교구 본사입니다. 엘리자베스 여왕의 방문으로 유명한 봉정사도 고운사의 말사입니다. 고운사 홈페이지에는 다음과 같이 소개하고 있습니다. 고운사는 신라 신문왕 원년(서기 681년)에 해동 화엄종의 시조이신 의상대사께서 창건하신 사찰입니다. 부용반개형상의 천하명당에 위치한 이 사찰은원래 高雲寺였습니다. 신라말 불교와 유교ㆍ도교에 모두 통달하여 신선이 되었다는 최치원이 여지ㆍ여사 양대사와 함께 가운루(경북 유형문화재 제151호)와 우화루를 건축한 이후 그의 호인 孤雲을 빌어서 孤雲寺로 바뀌게 되었습니다.",
      img1 : "./location/gounsa1.png",
      img2 : "./location/gounsa2.png"
    }
  ]

  return (
    <div>
      <h2># 단촌면</h2>
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