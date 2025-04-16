import React, { useState } from 'react';

// props로 title, description, author를 받습니다
export default function SoftwareIntroPage({ title = "소프트웨어의 세계", description = "현대 사회를 움직이는 소프트웨어에 대한 종합 가이드", author = "클로드" }) {
  // 기존 state
  const [activeTab, setActiveTab] = useState('overview');
  
  // 새로 추가한 state 3개
  const [darkMode, setDarkMode] = useState(false); // 다크모드 설정
  const [fontSize, setFontSize] = useState('medium'); // 글꼴 크기 설정
  const [likeCount, setLikeCount] = useState(0); // 좋아요 수
  
  // 소프트웨어 카테고리 데이터
  const softwareCategories = [
    {
      id: 'operating-systems',
      name: '운영 체제',
      description: '컴퓨터의 하드웨어를 관리하고 응용 프로그램을 실행하기 위한 시스템 소프트웨어',
      examples: ['Windows', 'macOS', 'Linux', 'Android', 'iOS']
    },
    {
      id: 'application-software',
      name: '응용 소프트웨어',
      description: '특정 작업을 수행하기 위해 설계된 프로그램',
      examples: ['Microsoft Office', 'Adobe Photoshop', '게임', '웹 브라우저', '모바일 앱']
    },
    {
      id: 'development-tools',
      name: '개발 도구',
      description: '소프트웨어를 만들고 테스트하기 위한 도구',
      examples: ['Visual Studio Code', 'Git', 'Docker', 'React', 'Python']
    },
    {
      id: 'database-software',
      name: '데이터베이스 소프트웨어',
      description: '데이터를 저장, 관리, 검색하기 위한 시스템',
      examples: ['MySQL', 'MongoDB', 'PostgreSQL', 'Oracle', 'Firebase']
    }
  ];

  // 소프트웨어 개발 단계
  const developmentStages = [
    {
      stage: '기획 및 요구사항 분석',
      description: '소프트웨어가 무엇을 해야 하는지 정의하고 필요 사항을 수집하는 단계'
    },
    {
      stage: '설계',
      description: '소프트웨어의 구조와 구성 요소를 계획하는 단계'
    },
    {
      stage: '개발',
      description: '실제 코드를 작성하고 프로그램을 구현하는 단계'
    },
    {
      stage: '테스트',
      description: '버그를 찾고 소프트웨어가 요구사항을 충족하는지 확인하는 단계'
    },
    {
      stage: '배포',
      description: '완성된 소프트웨어를 사용자에게 제공하는 단계'
    },
    {
      stage: '유지보수',
      description: '소프트웨어를 지속적으로 개선하고 문제를 해결하는 단계'
    }
  ];

  // 폰트 크기 조절 함수
  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  // 다크모드 토글 함수
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // 좋아요 버튼 클릭 함수
  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  // 폰트 크기에 따른 클래스 계산
  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'small': return 'text-sm';
      case 'large': return 'text-lg';
      default: return 'text-base';
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} min-h-screen p-6 ${getFontSizeClass()}`}>
      <div className={`max-w-4xl mx-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
        {/* 헤더 */}
        <header className={`${darkMode ? 'bg-blue-800' : 'bg-blue-600'} text-white p-6`}>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="mt-2 text-blue-100">{description}</p>
            </div>
            <div className="flex items-center space-x-3">
              {/* 다크모드 토글 버튼 */}
              <button 
                onClick={toggleDarkMode}
                className="px-3 py-1 bg-blue-500 hover:bg-blue-400 rounded"
              >
                {darkMode ? '라이트 모드' : '다크 모드'}
              </button>
              
              {/* 좋아요 버튼 */}
              <button 
                onClick={handleLikeClick}
                className="flex items-center px-3 py-1 bg-red-500 hover:bg-red-400 rounded"
              >
                <span>❤️ {likeCount}</span>
              </button>
            </div>
          </div>
        </header>

        {/* 설정 패널 */}
        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} p-3 flex justify-between items-center`}>
          <div className="text-sm">
            <span>글쓴이: {author}</span>
          </div>
          <div className="flex space-x-2">
            <span>글꼴 크기:</span>
            <button 
              onClick={() => handleFontSizeChange('small')} 
              className={`px-2 ${fontSize === 'small' ? 'font-bold underline' : ''}`}
            >
              작게
            </button>
            <button 
              onClick={() => handleFontSizeChange('medium')} 
              className={`px-2 ${fontSize === 'medium' ? 'font-bold underline' : ''}`}
            >
              중간
            </button>
            <button 
              onClick={() => handleFontSizeChange('large')} 
              className={`px-2 ${fontSize === 'large' ? 'font-bold underline' : ''}`}
            >
              크게
            </button>
          </div>
        </div>

        {/* 탭 메뉴 */}
        <div className={`${darkMode ? 'bg-blue-700' : 'bg-blue-500'} text-white flex`}>
          <button 
            className={`px-4 py-3 font-medium ${activeTab === 'overview' ? (darkMode ? 'bg-blue-900' : 'bg-blue-700') : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            소프트웨어 개요
          </button>
          <button 
            className={`px-4 py-3 font-medium ${activeTab === 'categories' ? (darkMode ? 'bg-blue-900' : 'bg-blue-700') : ''}`}
            onClick={() => setActiveTab('categories')}
          >
            소프트웨어 종류
          </button>
          <button 
            className={`px-4 py-3 font-medium ${activeTab === 'development' ? (darkMode ? 'bg-blue-900' : 'bg-blue-700') : ''}`}
            onClick={() => setActiveTab('development')}
          >
            개발 프로세스
          </button>
          <button 
            className={`px-4 py-3 font-medium ${activeTab === 'future' ? (darkMode ? 'bg-blue-900' : 'bg-blue-700') : ''}`}
            onClick={() => setActiveTab('future')}
          >
            미래 전망
          </button>
        </div>

        {/* 콘텐츠 */}
        <div className="p-6">
          {/* 소프트웨어 개요 탭 */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">소프트웨어란 무엇인가?</h2>
              <p className="mb-4">
                소프트웨어는 컴퓨터나 전자 장치가 특정 작업을 수행할 수 있도록 하는 프로그램, 데이터, 정보의 집합입니다. 
                하드웨어가 물리적인 장치라면, 소프트웨어는 그 장치에 생명을 불어넣는 무형의 요소입니다.
              </p>
              
              <div className={`${darkMode ? 'bg-blue-900' : 'bg-blue-50'} p-4 rounded-lg mb-6`}>
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-blue-200' : 'text-blue-700'} mb-2`}>소프트웨어의 특징</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>물리적 형태가 없음</li>
                  <li>쉽게 복제 및 배포 가능</li>
                  <li>시간이 지나도 물리적으로 마모되지 않음</li>
                  <li>다양한 기기에서 실행 가능</li>
                  <li>지속적인 업데이트와 개선 가능</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">소프트웨어의 중요성</h3>
              <p className="mb-4">
                현대 사회에서 소프트웨어는 우리 삶의 모든 영역에 깊숙이 파고들어 있습니다. 
                스마트폰 앱, 웹 서비스, 은행 시스템, 의료 장비, 자동차 제어 시스템 등 
                소프트웨어는 우리가 의식하지 못하는 사이에도 끊임없이 작동하고 있습니다.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">소프트웨어의 역사</h3>
                <div className="relative">
                  <div className={`border-l-2 ${darkMode ? 'border-blue-500' : 'border-blue-300'} ml-4`}>
                    <div className="ml-6 mb-8">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-1"></div>
                      <div className="font-bold">1940-50년대</div>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>최초의 전자식 컴퓨터와 기계어 프로그래밍</p>
                    </div>
                    <div className="ml-6 mb-8">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-1"></div>
                      <div className="font-bold">1960-70년대</div>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>운영체제의 등장과 고급 프로그래밍 언어의 발전</p>
                    </div>
                    <div className="ml-6 mb-8">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-1"></div>
                      <div className="font-bold">1980-90년대</div>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>개인용 컴퓨터의 보급과 그래픽 사용자 인터페이스(GUI)의 등장</p>
                    </div>
                    <div className="ml-6 mb-8">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-1"></div>
                      <div className="font-bold">2000년대</div>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>인터넷의 확산과 웹 애플리케이션의 성장</p>
                    </div>
                    <div className="ml-6">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-1"></div>
                      <div className="font-bold">2010년대-현재</div>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>모바일 앱, 클라우드 컴퓨팅, AI 및 빅데이터 기술의 발전</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 소프트웨어 종류 탭 */}
          {activeTab === 'categories' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">소프트웨어의 종류</h2>
              <p className="mb-6">
                소프트웨어는 그 기능과 용도에 따라 여러 가지 종류로 나눌 수 있습니다. 
                각각의 소프트웨어는 특정 목적을 위해 설계되었으며, 우리 생활의 다양한 영역에서 활용됩니다.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                {softwareCategories.map((category) => (
                  <div key={category.id} className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} rounded-lg p-5 border`}>
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-600'} mb-2`}>{category.name}</h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>{category.description}</p>
                    <div>
                      <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>주요 예시:</h4>
                      <ul className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'} rounded p-3 border`}>
                        {category.examples.map((example, index) => (
                          <li key={index} className="mb-1">{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={`mt-8 ${darkMode ? 'bg-blue-900' : 'bg-blue-50'} p-5 rounded-lg`}>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-200' : 'text-blue-700'} mb-3`}>오픈 소스 vs 독점 소프트웨어</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className={`flex-1 ${darkMode ? 'bg-gray-800 border-blue-800' : 'bg-white border-blue-200'} p-4 rounded border`}>
                    <h4 className="font-bold mb-2">오픈 소스 소프트웨어</h4>
                    <p>소스 코드가 공개되어 누구나 보고, 수정하고, 배포할 수 있는 소프트웨어</p>
                    <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>예: Linux, Firefox, WordPress</p>
                  </div>
                  <div className={`flex-1 ${darkMode ? 'bg-gray-800 border-blue-800' : 'bg-white border-blue-200'} p-4 rounded border`}>
                    <h4 className="font-bold mb-2">독점 소프트웨어</h4>
                    <p>소스 코드가 비공개되어 제작사만이 수정할 수 있는 소프트웨어</p>
                    <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>예: Windows, Photoshop, Microsoft Office</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 개발 프로세스 탭 */}
          {activeTab === 'development' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">소프트웨어 개발 프로세스</h2>
              <p className="mb-6">
                소프트웨어 개발은 단순히 코드를 작성하는 것 이상의 체계적인 과정입니다. 
                아이디어에서 출시까지, 소프트웨어는 여러 단계를 거쳐 만들어집니다.
              </p>
              
              <div className="mb-8">
                {developmentStages.map((item, index) => (
                  <div key={index} className="flex mb-4">
                    <div className="flex-none w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold">{item.stage}</h3>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={`${darkMode ? 'bg-yellow-900 border-yellow-800' : 'bg-yellow-50 border-yellow-200'} p-5 rounded-lg border`}>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-yellow-200' : 'text-yellow-700'} mb-3`}>개발 방법론</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded shadow-sm`}>
                    <h4 className={`font-bold ${darkMode ? 'text-yellow-300' : 'text-yellow-600'} mb-2`}>폭포수 모델(Waterfall)</h4>
                    <p>각 단계가 순차적으로 진행되는 전통적인 방법론</p>
                    <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>특징: 체계적, 문서화 중심, 변경이 어려움</p>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded shadow-sm`}>
                    <h4 className={`font-bold ${darkMode ? 'text-yellow-300' : 'text-yellow-600'} mb-2`}>애자일(Agile)</h4>
                    <p>반복적이고 점진적인 개발을 통해 유연성을 높인 방법론</p>
                    <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>특징: 유연함, 고객 중심, 빠른 피드백</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">개발자에게 필요한 기술</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3 rounded text-center`}>
                    <div className="font-medium">프로그래밍 언어</div>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3 rounded text-center`}>
                    <div className="font-medium">알고리즘 지식</div>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3 rounded text-center`}>
                    <div className="font-medium">데이터베이스</div>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3 rounded text-center`}>
                    <div className="font-medium">버전 관리</div>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3 rounded text-center`}>
                    <div className="font-medium">프레임워크</div>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3 rounded text-center`}>
                    <div className="font-medium">테스팅</div>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3 rounded text-center`}>
                    <div className="font-medium">문제 해결 능력</div>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3 rounded text-center`}>
                    <div className="font-medium">커뮤니케이션</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 미래 전망 탭 */}
          {activeTab === 'future' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">소프트웨어의 미래 전망</h2>
              <p className="mb-6">
                기술이 발전함에 따라 소프트웨어 산업도 빠르게 변화하고 있습니다. 
                미래의 소프트웨어는 더욱 지능적이고, 연결되고, 접근성이 높아질 전망입니다.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className={`${darkMode ? 'bg-purple-900' : 'bg-gradient-to-br from-purple-50 to-blue-50'} p-5 rounded-lg shadow-sm`}>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-purple-200' : 'text-purple-700'} mb-3`}>인공지능과 기계학습</h3>
                  <p>
                    AI와 머신러닝은 소프트웨어가 데이터로부터 학습하고 스스로 개선할 수 있게 합니다. 
                    이는 더 스마트한 애플리케이션, 예측 분석, 자연어 처리 등의 발전으로 이어질 것입니다.
                  </p>
                </div>
                <div className={`${darkMode ? 'bg-green-900' : 'bg-gradient-to-br from-green-50 to-teal-50'} p-5 rounded-lg shadow-sm`}>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-green-200' : 'text-green-700'} mb-3`}>클라우드 컴퓨팅</h3>
                  <p>
                    클라우드 기술의 발전으로 소프트웨어는 어디서든 접근 가능하고 확장성이 높아집니다. 
                    SaaS(Software as a Service) 모델은 계속해서 성장할 것으로 예상됩니다.
                  </p>
                </div>
                <div className={`${darkMode ? 'bg-red-900' : 'bg-gradient-to-br from-red-50 to-orange-50'} p-5 rounded-lg shadow-sm`}>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-red-200' : 'text-red-700'} mb-3`}>사물인터넷(IoT)</h3>
                  <p>
                    더 많은 기기들이 인터넷에 연결되면서, 이들을 제어하고 관리하는 소프트웨어의 
                    중요성이 커질 것입니다. 스마트 홈, 스마트 시티 등의 발전이 예상됩니다.
                  </p>
                </div>
                <div className={`${darkMode ? 'bg-yellow-900' : 'bg-gradient-to-br from-yellow-50 to-amber-50'} p-5 rounded-lg shadow-sm`}>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-yellow-200' : 'text-yellow-700'} mb-3`}>보안과 프라이버시</h3>
                  <p>
                    데이터 보호와 프라이버시에 대한 관심이 높아지면서, 보안 소프트웨어와 
                    암호화 기술이 더욱 중요해질 것입니다.
                  </p>
                </div>
              </div>
              
              <div className={`${darkMode ? 'bg-blue-900' : 'bg-blue-50'} p-5 rounded-lg`}>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-200' : 'text-blue-700'} mb-3`}>미래 소프트웨어 개발자를 위한 조언</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-none w-5 h-5 bg-blue-500 rounded-full mt-1 mr-2"></div>
                    <span>지속적인 학습: 새로운 기술과 언어를 꾸준히 배우세요.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-none w-5 h-5 bg-blue-500 rounded-full mt-1 mr-2"></div>
                    <span>실제 문제 해결: 실생활의 문제를 소프트웨어로 해결해 보세요.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-none w-5 h-5 bg-blue-500 rounded-full mt-1 mr-2"></div>
                    <span>협업 능력: 다른 개발자들과 함께 일하는 방법을 배우세요.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-none w-5 h-5 bg-blue-500 rounded-full mt-1 mr-2"></div>
                    <span>사용자 중심 사고: 항상 최종 사용자의 경험을 고려하세요.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* 푸터 */}
        <footer className={`${darkMode ? 'bg-gray-800 text-gray-400 border-gray-700' : 'bg-gray-100 text-gray-600 border-gray-200'} p-6 text-center border-t`}>
          <p>© 2025 소프트웨어 소개 페이지</p>
          <p className="text-sm mt-1">이 페이지는 학습 목적으로 제작되었습니다.</p>
        </footer>
      </div>
    </div>
  );
}