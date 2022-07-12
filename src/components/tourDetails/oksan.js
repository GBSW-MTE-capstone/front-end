import React from 'react'

export const Oksan = () => {

  const data = [
    {
      name : "금봉자연휴양림",
      address : "옥산면 휴양림길",
      desc : "의성군 옥산면 휴양림길에 위치한 금봉자연휴양림입니다. 금봉자연휴양림은 봄이면 사과 꽃이 만개하고, 가을이면 형형색색 단풍으로 갈아입은 길을 따라 금봉산 자락의 때 묻지 않은 신비한 자연경관을 갖춘 천혜의 휴식공간이다. 계곡을 따라 올라가다 다양한 숲속 체험공간을 제공 할 수 있는 시설을 갖추고 있으며 도로 끝에는 팔각정이 있어 시원하게 물줄기를 쏘아 올리는 분수와 무지개다리를 바라보는 풍경도 멋지며 자연속의 느낌을 자아내고 있습니다. 천혜의 절경 속에 휴양림을 감싸고 있는 6.4㎞의 등산로 2코스, 7.4㎞의 청석골 산책로 및 시화산길, 단거리 산책로 등은 조용한 산행의 정취를 느낄 수 있는 자연이 주는 상쾌함을 찾아 떠나는 숲속으로의 여행을 할 수 있는 곳 입니다. 다만 주변에 상가가 없어서 먹을 것을 준비해 오지 못하면 먼 거리를 나가서 사와야 하는 번거로움이 있습니다. 그리고 숲이 살아 있다보니 주변에 뱀이 제법 많이 보이다 보니 등산이나 산행을 할때 상당히 주의를 해야 합니다. 개인적으로 조용하게 가족들과 함께 보낼 수 있는 휴양림 입니다.",
      img1 : "./location/goldbong1.png",
      img2 : "./location/goldbong2.png"
    }
]

  return (
    <div>
      <h2># 옥산면</h2>
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