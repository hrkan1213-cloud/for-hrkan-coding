import React, { useState } from 'react';
import { Box, Grid, Repeat, Layers, Plug, Recycle, Maximize2, User, Ruler } from 'lucide-react';

export default function ModularConcepts() {
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [showModulor, setShowModulor] = useState(false);

  const concepts = [
    {
      id: 'independence',
      title: '독립성',
      icon: Box,
      color: 'bg-blue-500',
      description: '각 모듈은 독립적으로 작동하며 자체적인 기능을 가집니다',
      example: '레고 블록처럼 각각이 완전한 단위'
    },
    {
      id: 'interchangeable',
      title: '교체 가능성',
      icon: Repeat,
      color: 'bg-green-500',
      description: '모듈을 쉽게 교체하거나 업그레이드할 수 있습니다',
      example: '스마트폰 배터리, PC 부품'
    },
    {
      id: 'standardized',
      title: '표준화된 인터페이스',
      icon: Plug,
      color: 'bg-purple-500',
      description: '모듈 간 연결을 위한 일관된 규칙과 인터페이스',
      example: 'USB 포트, 전기 플러그'
    },
    {
      id: 'reusable',
      title: '재사용성',
      icon: Recycle,
      color: 'bg-amber-500',
      description: '다양한 시스템에서 같은 모듈을 재사용',
      example: '소프트웨어 라이브러리, 표준 나사'
    },
    {
      id: 'scalable',
      title: '확장성',
      icon: Maximize2,
      color: 'bg-red-500',
      description: '필요에 따라 모듈을 추가하거나 제거하여 시스템 확장',
      example: '선반 시스템, 클라우드 서버'
    },
    {
      id: 'layered',
      title: '계층 구조',
      icon: Layers,
      color: 'bg-indigo-500',
      description: '모듈이 계층적으로 구성되어 복잡성 관리',
      example: '소프트웨어 아키텍처, 건물 구조'
    }
  ];

  const ModuleBox = ({ color, label, size = 'normal' }) => {
    const sizeClasses = {
      small: 'w-12 h-12',
      normal: 'w-16 h-16',
      large: 'w-20 h-20'
    };
    
    return (
      <div className={`${color} ${sizeClasses[size]} rounded-lg shadow-lg flex items-center justify-center text-white font-bold border-2 border-white/30 hover:scale-105 transition-transform`}>
        {label}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">모듈러 시스템의 핵심 개념</h1>
          <p className="text-xl text-slate-300">독립적인 부품들이 모여 완전한 시스템을 만듭니다</p>
        </div>

        {/* Visual Demo */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">모듈러 vs 모놀리식</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Modular System */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-400 text-center">✅ 모듈러 시스템</h3>
              <div className="flex flex-wrap gap-3 justify-center p-6 bg-slate-800/50 rounded-xl">
                <ModuleBox color="bg-blue-500" label="A" />
                <ModuleBox color="bg-green-500" label="B" />
                <ModuleBox color="bg-purple-500" label="C" />
                <ModuleBox color="bg-amber-500" label="D" />
              </div>
              <p className="text-slate-300 text-center text-sm">각 모듈을 독립적으로 수정, 교체, 재사용 가능</p>
            </div>

            {/* Monolithic System */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-400 text-center">❌ 모놀리식 시스템</h3>
              <div className="flex justify-center p-6 bg-slate-800/50 rounded-xl">
                <div className="w-64 h-64 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-4xl border-2 border-white/20">
                  ABCD
                </div>
              </div>
              <p className="text-slate-300 text-center text-sm">모든 것이 하나로 묶여 있어 수정이 어려움</p>
            </div>
          </div>
        </div>

        {/* Core Concepts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {concepts.map((concept) => {
            const Icon = concept.icon;
            return (
              <div
                key={concept.id}
                onClick={() => setSelectedConcept(concept.id === selectedConcept ? null : concept.id)}
                className={`${concept.color} bg-opacity-10 backdrop-blur-sm border-2 ${
                  selectedConcept === concept.id ? 'border-white scale-105' : 'border-transparent'
                } rounded-xl p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-2xl`}
              >
                <div className={`${concept.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{concept.title}</h3>
                <p className="text-slate-300 text-sm mb-3">{concept.description}</p>
                <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                  <p className="text-xs font-semibold text-slate-200 mb-1">예시:</p>
                  <p className="text-sm text-slate-300">{concept.example}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Assembly Example */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">모듈 조합 예시</h2>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <ModuleBox color="bg-blue-500" label="📱" size="large" />
            <span className="text-3xl text-white">+</span>
            <ModuleBox color="bg-green-500" label="🔋" size="large" />
            <span className="text-3xl text-white">+</span>
            <ModuleBox color="bg-purple-500" label="📷" size="large" />
            <span className="text-3xl text-white">=</span>
            <div className="bg-gradient-to-br from-blue-500 via-green-500 to-purple-500 w-24 h-24 rounded-2xl shadow-2xl flex items-center justify-center text-4xl border-4 border-white/30">
              📱
            </div>
          </div>
          <p className="text-center text-slate-300 mt-6">
            독립적인 모듈(화면, 배터리, 카메라)이 결합하여 완전한 제품을 만듭니다
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">모듈러의 장점</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-4xl mb-2">🔧</div>
              <p className="text-white font-semibold">유지보수 용이</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💰</div>
              <p className="text-white font-semibold">비용 절감</p>
            </div>
            <div>
              <div className="text-4xl mb-2">⚡</div>
              <p className="text-white font-semibold">빠른 개발</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🎯</div>
              <p className="text-white font-semibold">유연성 증가</p>
            </div>
          </div>
        </div>

        {/* Le Corbusier's Modulor Section */}
        <div className="mt-8">
          <button
            onClick={() => setShowModulor(!showModulor)}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transition-all text-xl mb-4 flex items-center justify-center gap-3"
          >
            <User size={28} />
            {showModulor ? '▼' : '▶'} 르코르뷔지에의 모듈러(Modulor) 이론
            <Ruler size={28} />
          </button>

          {showModulor && (
            <div className="space-y-8 animate-fade-in">
              {/* Introduction */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
                <h3 className="text-3xl font-bold text-white mb-4 text-center">🏛️ 인간 중심의 건축 치수 체계</h3>
                <p className="text-lg text-slate-200 leading-relaxed text-center max-w-4xl mx-auto">
                  프랑스 건축가 르코르뷔지에(1887-1965)가 1940년대에 개발한 <span className="text-amber-400 font-bold">인체 비례 기반 측정 시스템</span>입니다. 
                  "건축은 인간을 위한 것"이라는 철학으로, <span className="text-amber-400 font-bold">황금비와 인체 치수</span>를 결합하여 
                  조화롭고 인간적인 공간을 만드는 수학적 도구를 제시했습니다.
                </p>
              </div>

              {/* Human Proportions */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h4 className="text-2xl font-bold text-amber-400 mb-6 text-center">📏 기본 개념</h4>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <h5 className="text-white font-bold mb-2">1️⃣ 인체를 기준으로</h5>
                      <p className="text-slate-300 text-sm">
                        키 183cm(6피트) 남성이 팔을 들었을 때 높이 226cm를 기준점으로 설정
                      </p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <h5 className="text-white font-bold mb-2">2️⃣ 황금비 적용</h5>
                      <p className="text-slate-300 text-sm">
                        황금비 φ (파이) = 1.618... 자연과 예술에서 가장 아름다운 비율
                      </p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <h5 className="text-white font-bold mb-2">3️⃣ 피보나치 수열</h5>
                      <p className="text-slate-300 text-sm">
                        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
                        <br/>각 숫자는 이전 두 숫자의 합
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual Human Figure */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col items-center justify-center">
                  <h4 className="text-2xl font-bold text-amber-400 mb-6">🧍 인체 비례</h4>
                  <div className="relative">
                    {/* Human figure representation */}
                    <div className="flex flex-col items-center space-y-1">
                      {/* Arm up - 226cm */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-amber-500 rounded-full"></div>
                        <div className="text-amber-400 font-bold text-sm">226cm (팔 든 높이)</div>
                      </div>
                      <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-blue-500"></div>
                      
                      {/* Head */}
                      <div className="w-16 h-16 bg-blue-500 rounded-full border-4 border-white/30"></div>
                      
                      {/* Body with measurements */}
                      <div className="flex items-center gap-2">
                        <div className="text-blue-400 font-bold text-sm">183cm (키)</div>
                        <div className="w-20 h-32 bg-blue-500 rounded-lg border-4 border-white/30 relative">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-amber-400"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-amber-400"></div>
                        </div>
                      </div>
                      
                      {/* Legs */}
                      <div className="flex gap-2">
                        <div className="w-8 h-24 bg-blue-500 rounded-lg border-4 border-white/30"></div>
                        <div className="w-8 h-24 bg-blue-500 rounded-lg border-4 border-white/30"></div>
                      </div>
                      
                      {/* Ground level */}
                      <div className="w-32 h-1 bg-white/30 mt-2"></div>
                      <div className="text-white/70 text-sm">0cm (지면)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Red and Blue Series */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">🎨 레드 시리즈 & 블루 시리즈</h4>
                <p className="text-slate-300 text-center mb-6">
                  두 개의 조화로운 치수 체계로 모든 건축 요소를 디자인
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Red Series */}
                  <div className="bg-red-500/10 border-2 border-red-500/50 rounded-xl p-6">
                    <h5 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      레드 시리즈 (키 기준)
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-white">배꼽 높이</span>
                        <span className="text-red-400 font-bold">113cm</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-white">키</span>
                        <span className="text-red-400 font-bold">183cm</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-white">손 닿는 높이</span>
                        <span className="text-red-400 font-bold">226cm</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs mt-4">
                      * 각 치수는 황금비(1.618)로 연결됨
                    </p>
                  </div>

                  {/* Blue Series */}
                  <div className="bg-blue-500/10 border-2 border-blue-500/50 rounded-xl p-6">
                    <h5 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      블루 시리즈 (두 배 체계)
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-white">배꼽 높이 × 2</span>
                        <span className="text-blue-400 font-bold">226cm</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-white">키 × 2</span>
                        <span className="text-blue-400 font-bold">366cm</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-white">손 닿는 높이 × 2</span>
                        <span className="text-blue-400 font-bold">453cm</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs mt-4">
                      * 레드 시리즈의 두 배로 더 큰 공간 설계
                    </p>
                  </div>
                </div>
              </div>

              {/* Golden Ratio Visualization */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">✨ 황금비의 마법</h4>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg shadow-2xl mb-2"></div>
                    <p className="text-white font-bold">1</p>
                  </div>
                  <div className="text-4xl text-amber-400">×</div>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-amber-400 mb-2">φ</div>
                    <p className="text-slate-300 text-sm">1.618</p>
                  </div>
                  <div className="text-4xl text-amber-400">=</div>
                  <div className="text-center">
                    <div className="w-52 h-32 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg shadow-2xl mb-2"></div>
                    <p className="text-white font-bold">1.618</p>
                  </div>
                </div>
                <p className="text-center text-slate-300 mt-6">
                  작은 부분 : 큰 부분 = 큰 부분 : 전체 - 가장 조화로운 비율
                </p>
              </div>

              {/* Practical Applications */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">🏗️ 실제 건축 적용 예시</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-3xl mb-2 text-center">🚪</div>
                    <h5 className="text-white font-bold mb-2 text-center">문 높이</h5>
                    <p className="text-slate-300 text-sm text-center">226cm - 손 닿는 높이를 기준으로 설계</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-3xl mb-2 text-center">🪑</div>
                    <h5 className="text-white font-bold mb-2 text-center">의자 높이</h5>
                    <p className="text-slate-300 text-sm text-center">43cm - 앉은 자세의 무릎 높이</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-3xl mb-2 text-center">📐</div>
                    <h5 className="text-white font-bold mb-2 text-center">천장 높이</h5>
                    <p className="text-slate-300 text-sm text-center">226cm 또는 366cm - 공간 규모에 따라</p>
                  </div>
                </div>
              </div>

              {/* Why Important */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">💡 왜 중요한가?</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">👤</div>
                      <div>
                        <h5 className="text-white font-bold">인간 중심 설계</h5>
                        <p className="text-slate-300 text-sm">사람의 움직임과 비례에 맞는 공간</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🎯</div>
                      <div>
                        <h5 className="text-white font-bold">보편적 적용</h5>
                        <p className="text-slate-300 text-sm">전 세계 어디서나 사용 가능한 표준</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">✨</div>
                      <div>
                        <h5 className="text-white font-bold">미적 조화</h5>
                        <p className="text-slate-300 text-sm">황금비를 통한 아름다운 비례</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🔢</div>
                      <div>
                        <h5 className="text-white font-bold">수학적 정확성</h5>
                        <p className="text-slate-300 text-sm">감이 아닌 계산으로 완벽한 치수</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Famous Buildings */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">🌟 대표적인 건축물</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <div className="text-4xl mb-3">🏢</div>
                    <h5 className="text-white font-bold mb-2">위니테 다비타시옹</h5>
                    <p className="text-slate-300 text-sm">마르세유, 프랑스 (1952)</p>
                    <p className="text-amber-400 text-xs mt-2">모듈러 체계 전면 적용</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <div className="text-4xl mb-3">⛪</div>
                    <h5 className="text-white font-bold mb-2">롱샹 성당</h5>
                    <p className="text-slate-300 text-sm">롱샹, 프랑스 (1955)</p>
                    <p className="text-amber-400 text-xs mt-2">곡선에도 모듈러 비율</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <div className="text-4xl mb-3">🏛️</div>
                    <h5 className="text-white font-bold mb-2">샹디가르 계획도시</h5>
                    <p className="text-slate-300 text-sm">인도 (1950년대)</p>
                    <p className="text-amber-400 text-xs mt-2">도시 전체를 모듈러로</p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-amber-500/50">
                <p className="text-xl text-white text-center leading-relaxed">
                  "<span className="text-amber-400 font-bold">건축은 숫자의 게임이 아니라, 인간을 위한 것입니다.</span> 
                  <br/>모듈러는 아름다움과 기능, 그리고 인간의 척도를 하나로 묶는 도구입니다."
                  <br/><span className="text-slate-300 text-base">- 르코르뷔지에</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}