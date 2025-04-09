import React, { useState } from 'react';

// 갤러리 이미지 데이터
const galleryImages = [
  {
    id: 1,
    title: "개(쭈니)",
    src: "./images/image.jpg",
    category: "animal",
    prompt: "검은색 장모 치와와. 성격이 매우 온순하고 겁이 많다. 체구가 작고 털이 매우 부드럽다. 진짜 귀여움."
  },
  {
    id: 2,
    title: "도시 야경",
    src: "./images/denys-nevozhai-D8iZPlX-2fs-unsplash.jpg",
    category: "landscape",
    prompt: "황혼 시간 상하이의 장엄한 항공 전망. 강 중심에 굽이치는 황푸강과 푸동 지역의 빛나는 고층 빌딩들이 어우러짐"
  },
  {
    id: 3,
    title: "추상적 예술 작품",
    src: "./images/steve-johnson-QcmfTb-i3ko-unsplash.jpg",
    category: "abstract",
    prompt: "대조적인 색상의 블록이 특징인 추상 회화. 짙은 청색과 선명한 주황색이 주를 이루며, 흰색 선과 면이 두 색상 사이에서 균형을 잡고 있음"
  },
  {
    id: 4,
    title: "호랑이",
    src: "./images/640px-Siberian_Tiger_by_Malene_Th.jpg",
    category: "animal",
    prompt: "나무 위에서 뻗은 자세를 취하고 있는 시베리아 호랑이. 선명한 주황색과 검은색 줄무늬가 특징적이며, 강인한 앞발과 집중된 시선으로 사냥꾼의 위엄을 보여주고 있음"
  },
  {
    id: 5,
    title: "열대 해변",
    src: "./images/istockphoto-1442179368-612x612.jpg",
    category: "landscape",
    prompt: "열대 천국의 완벽한 해변 풍경. 투명한 터쿠아즈 블루 바닷물이 새하얀 모래사장과 만나는 곳에서 잔잔한 파도가 일렁임"
  },
  {
    id: 6,
    title: "기하학적 패턴",
    src: "./images/george-pagan-iii-BB4teVwxm5k-unsplash.jpg",
    category: "abstract",
    prompt: "3D 입체 효과를 주는 정밀한 기하학적 패턴. 밝은 하늘색, 회색, 검은색의 정육면체가 반복적으로 배열되어 착시 효과를 만들어냄"
  },
  {
    id: 7,
    title: "산과 호수의 풍경",
    src: "./images/odiseo-castrejon-58LP6H8klVw-unsplash.jpg",
    category: "landscape",
    prompt: "캐나다 밴프 국립공원의 모레인 호수와 록키 산맥의 웅장한 풍경. 에메랄드 청록색의 맑은 호수가 눈 덮인 거친 산봉우리와 완벽한 대비를 이룸"
  },
  {
    id: 8,
    title: "나선 은하의 장관",
    src: "./images/SSC_20240909102642_O2.jpg",
    category: "landscape",
    prompt: "우주 공간에 떠 있는 웅장한 나선 은하의 모습. 밝게 빛나는 중심부와 보라색, 푸른색, 금색이 어우러진 나선팔이 우주의 암흑 속에서 장엄하게 빛나고 있으며, 무수한 별들이 은하 주변을 둘러싸고 있음"
  },
  {
    id: 9,
    title: "하얀 당근 토끼",
    src: "./images/rabbit.jpg",
    category: "animal",
    prompt: "푸른 잔디밭 위에서 당근과 함께 있는 귀여운 하얀 토끼. 회색빛 귀와 검은 눈을 가진 아기 토끼가 신선한 당근 옆에서 포즈를 취하고 있음"
  }
];

// 필터 버튼 컴포넌트
// 필터 버튼 컴포넌트
const FilterButton = ({ category, activeCategory, onClick }) => {
  const isActive = category === activeCategory;
  return (
    <button 
      className={`filter-btn ${isActive ? 'active' : ''} bg-white border border-gray-300 px-4 py-2 rounded-full cursor-pointer transition-all hover:bg-blue-100 
      ${isActive ? 'bg-blue-100 text-blue-800 border-blue-300' : ''}`}
      onClick={() => onClick(category)}
    >
      {category === 'all' ? '전체보기' : 
       category === 'landscape' ? '풍경' : 
       category === 'animal' ? '동물' : '추상'}
    </button>
  );
};

// 헤더 컴포넌트
const Header = ({ activeCategory, setActiveCategory }) => {
  const categories = ['all', 'landscape', 'animal', 'abstract'];
  
  return (
    <header className="text-center py-8">
      <h1 className="text-4xl mb-2 text-gray-800">이미지 갤러리</h1>
      <p className="text-xl mb-8 text-gray-600">다양한 이미지를 감상하세요</p>
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(category => (
          <FilterButton 
            key={category}
            category={category}
            activeCategory={activeCategory}
            onClick={setActiveCategory}
          />
        ))}
      </div>
    </header>
  );
};

// 갤러리 아이템 컴포넌트
const GalleryItem = ({ image }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md transition-transform hover:translate-y-1 bg-white">
      <img 
        src={image.src} 
        alt={image.title}
        className="w-full h-72 object-cover block"
      />
      <div className="p-4 bg-white">
        <h3 className="font-semibold mb-1 text-lg">{image.title}</h3>
        <p className="text-gray-600 text-sm">{image.category}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-5 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center">
        <h4 className="text-xl font-bold mb-4">이미지 설명</h4>
        <p className="text-base leading-relaxed">{image.prompt}</p>
      </div>
    </div>
  );
};

// 갤러리 컴포넌트
const Gallery = ({ images }) => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5" id="gallery">
      {images.map(image => (
        <GalleryItem key={image.id} image={image} />
      ))}
    </div>
  );
};

// 푸터 컴포넌트
const Footer = () => {
  return (
    <footer className="text-center mt-10 p-5 text-gray-600">
      <p>생성형 AI 기술을 활용한 간단한 페이지 © 2025</p>
    </footer>
  );
};

// 메인 App 컴포넌트
const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // 카테고리에 따라 이미지 필터링
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Header activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Gallery images={filteredImages} />
      <Footer />
    </div>
  );
};

export default App;