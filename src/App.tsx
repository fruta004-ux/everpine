import { motion } from 'motion/react';
import { Check, Star, Brain, Smartphone, BookOpen, Shield, Award, PenTool, ArrowRight, Zap, Layers } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Container with max-width 1000px as requested */}
      <div className="mx-auto max-w-[1000px] bg-white shadow-xl overflow-hidden">
        
        {/* ① Hero Section */}
        <section className="relative bg-slate-900 text-white py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1606103836293-0a063ee20566?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="relative z-10 flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 rounded-full bg-orange-500/20 border border-orange-500 text-orange-300 text-sm font-semibold mb-6 tracking-wide"
            >
              단 하나의 프리미엄 퍼즐
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-tight"
            >
              놀이처럼 시작해서<br />
              <span className="text-orange-400">두뇌 성장</span>으로 이어집니다
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 font-medium mb-8"
            >
              Premium BB 공룡 퍼즐
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 mb-10 max-w-lg mx-auto"
            >
              교과과정 연계 + AR 체험 + 증강현실 콘텐츠<br/>
              단순 장난감이 아닌, 성장 설계 퍼즐
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg shadow-orange-500/30 flex items-center gap-2 transition-all"
            >
              👉 지금 우리 아이 두뇌 자극 시작하기
            </motion.button>
          </div>
        </section>

        {/* ② Problem Empathy */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">이런 고민, 한 번쯤 해보셨죠?</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {[
              "퍼즐은 좋아하는데 금방 질려요",
              "스마트폰은 너무 오래 보여주기 싫고",
              "공부는 아직 부담이고",
              "놀면서 배우면 좋겠는데 방법을 모르겠고"
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4"
              >
                <div className="bg-gray-100 p-2 rounded-full text-gray-400">
                  <Check size={20} />
                </div>
                <p className="text-lg font-medium text-gray-700">{text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center bg-blue-50 p-8 rounded-2xl border border-blue-100 max-w-2xl mx-auto"
          >
            <p className="text-xl text-blue-900 font-medium">
              그래서 필요한 건<br/>
              <span className="font-bold text-2xl mt-2 block">놀이와 학습을 자연스럽게 연결하는 도구입니다.</span>
            </p>
          </motion.div>
        </section>

        {/* ③ Product Definition */}
        <section className="py-24 px-6 bg-slate-900 text-white text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-4xl font-light leading-relaxed tracking-tight">
              Premium BB 공룡 퍼즐은<br/>
              교과 과정과 연결된 <span className="font-bold text-orange-400">‘두뇌 성장 퍼즐’</span>입니다.
            </h3>
          </motion.div>
        </section>

        {/* Real Usage Scene (NEW) */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="text-5xl">🧩</span>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-800 mb-12 tracking-tight"
            >
              퍼즐을 맞추다 멈칫하던 아이가<br/>
              <span className="font-bold text-slate-900">스스로 다시 시도합니다.</span>
            </motion.h3>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-800 mb-12 tracking-tight"
            >
              그리고 완성 후<br/>
              <span className="font-bold text-blue-600">“엄마 이 공룡은 육식이야.”</span>
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-orange-50 p-8 rounded-2xl border border-orange-100 inline-block shadow-sm"
            >
              <p className="text-xl font-bold text-orange-800 leading-relaxed">
                그 순간,<br/>
                놀이가 학습으로 연결됩니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ④ Why Premium? */}
        <section className="py-20 px-6">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Why Premium?</span>
            <h2 className="text-3xl font-bold mt-2 tracking-tight">왜 프리미엄인가?</h2>
          </div>

          <div className="space-y-20">
            {/* Point 1 */}
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1 order-2 md:order-1">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center text-orange-600 font-bold text-xl mb-6">1</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">교과과정 연계 학습</h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 shrink-0 mt-1" size={18} />
                    <span>공룡 생태, 특징, 시대 구분</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 shrink-0 mt-1" size={18} />
                    <span>초등 기초 과학 개념 자연스러운 노출</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 shrink-0 mt-1" size={18} />
                    <span>놀이 → 질문 → 학습 확장 구조</span>
                  </li>
                </ul>
                <p className="text-lg font-medium text-slate-800 border-l-4 border-orange-500 pl-4">
                  단순 그림 맞추기가 아니라<br/>지식이 연결되는 퍼즐
                </p>
              </div>
              <div className="flex-1 order-1 md:order-2 bg-gray-100 rounded-2xl h-64 w-full flex items-center justify-center overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1550948537-130a1ce83314?q=80&w=2072&auto=format&fit=crop" alt="Education" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1 bg-gray-100 rounded-2xl h-64 w-full flex items-center justify-center overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1626241606336-60144e645995?q=80&w=2070&auto=format&fit=crop" alt="AR Experience" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl mb-6">2</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">AR / 증강현실 체험</h3>
                
                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-sm text-slate-500 mb-2 uppercase">사용 흐름</h4>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span>퍼즐 완성</span>
                    <ArrowRight size={14} className="text-gray-400" />
                    <span>전용 앱 실행</span>
                    <ArrowRight size={14} className="text-gray-400" />
                    <span className="text-blue-600">공룡이 화면 속에서 등장</span>
                  </div>
                </div>

                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2"><Star size={16} className="text-yellow-500" /> 아이의 몰입도 상승</li>
                  <li className="flex items-center gap-2"><Star size={16} className="text-yellow-500" /> 완성에 대한 보상 강화</li>
                  <li className="flex items-center gap-2"><Star size={16} className="text-yellow-500" /> 학습 동기 자극</li>
                </ul>
                
                <p className="text-lg font-medium text-blue-600 italic">
                  “내가 맞춘 공룡이 살아 움직여요.”
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1 order-2 md:order-1">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 font-bold text-xl mb-6">3</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">단계별 성장 설계</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 p-3 rounded-lg text-center">
                    <Layers className="mx-auto text-purple-500 mb-2" size={24} />
                    <span className="text-sm font-medium">공간 지각 능력</span>
                  </div>
                  <div className="bg-white border border-gray-200 p-3 rounded-lg text-center">
                    <Zap className="mx-auto text-yellow-500 mb-2" size={24} />
                    <span className="text-sm font-medium">문제 해결 능력</span>
                  </div>
                  <div className="bg-white border border-gray-200 p-3 rounded-lg text-center">
                    <PenTool className="mx-auto text-green-500 mb-2" size={24} />
                    <span className="text-sm font-medium">소근육 발달</span>
                  </div>
                  <div className="bg-white border border-gray-200 p-3 rounded-lg text-center">
                    <Brain className="mx-auto text-blue-500 mb-2" size={24} />
                    <span className="text-sm font-medium">집중력 향상</span>
                  </div>
                </div>
                <p className="text-lg font-medium text-slate-800">
                  퍼즐 한 판이<br/>아이 두뇌를 단계적으로 자극합니다.
                </p>
              </div>
              <div className="flex-1 order-1 md:order-2 bg-gray-100 rounded-2xl h-64 w-full flex items-center justify-center overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2064&auto=format&fit=crop" alt="Growth" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Premium Design Details (NEW) */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">프리미엄 설계에는 이유가 있습니다</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-600 font-bold">Q</div>
                  <h3 className="text-xl font-bold tracking-tight">왜 23조각인가요?</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  너무 쉬우면 지루하고, 너무 어려우면 포기합니다.<br/>
                  <span className="font-bold text-slate-800">23조각</span>은 아이가 '몰입'을 경험하고<br/>
                  '성취감'을 느끼기에 가장 최적화된 조각 수입니다.<br/>
                  <span className="text-sm text-gray-400 mt-4 block pt-4 border-t border-gray-100">*아이 연령별 인지 발달 단계 반영</span>
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600 font-bold">Q</div>
                  <h3 className="text-xl font-bold tracking-tight">왜 공룡인가요?</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  공룡은 아이들의 호기심을 자극하는 최고의 소재입니다.<br/>
                  단순한 흥미를 넘어 <span className="font-bold text-slate-800">생태, 과학, 역사</span>로<br/>
                  지식을 확장하기 가장 좋은 주제를 선정했습니다.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Age Guide (NEW) */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">연령별 활용 가이드</h2>
              <p className="text-gray-500">아이의 성장에 맞춰 활용법이 달라집니다</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { age: "3~4세", title: "공간 인지 훈련", desc: "조각의 모양을 관찰하고 맞추며 소근육과 공간 감각을 키웁니다.", color: "bg-yellow-100 text-yellow-700", border: "hover:border-yellow-300" },
                { age: "5~6세", title: "질문 확장", desc: "AR로 공룡을 관찰하며 '왜?'라는 질문을 던지고 호기심을 키웁니다.", color: "bg-green-100 text-green-700", border: "hover:border-green-300" },
                { age: "7세 이상", title: "학습 연결", desc: "공룡의 특징을 교과 과정과 연결하여 과학적 사고력을 완성합니다.", color: "bg-blue-100 text-blue-700", border: "hover:border-blue-300" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-gray-50 rounded-2xl p-8 border border-gray-100 transition-colors ${item.border}`}
                >
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-4 ${item.color}`}>{item.age}</span>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainable Usage (NEW) */}
        <section className="py-24 px-6 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-16 tracking-tight">"이거 사면 며칠이나 쓸까?"</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Layers size={60} />
                </div>
                <div className="text-orange-400 font-bold mb-2 text-sm tracking-wider">STEP 1</div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">난이도 3단계 도전</h3>
                <p className="text-gray-400 text-sm leading-relaxed">처음엔 그림 보고 맞추기, 익숙해지면 그림 없이, 마지막엔 타임 어택까지!</p>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Smartphone size={60} />
                </div>
                <div className="text-orange-400 font-bold mb-2 text-sm tracking-wider">STEP 2</div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">AR 확장 체험</h3>
                <p className="text-gray-400 text-sm leading-relaxed">퍼즐은 끝이 아닙니다. 앱을 켜는 순간 새로운 공룡 세계가 열립니다.</p>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Brain size={60} />
                </div>
                <div className="text-orange-400 font-bold mb-2 text-sm tracking-wider">STEP 3</div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">반복 질문 유도</h3>
                <p className="text-gray-400 text-sm leading-relaxed">"이 공룡은 뭘 먹을까?" 끊임없는 질문으로 아이의 흥미를 지속시킵니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ⑤ Comparison */}
        <section className="py-20 px-6 bg-slate-50">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">기존 퍼즐 vs BB 퍼즐</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-800 text-white py-4 text-center font-bold">
              <div className="col-span-1">구분</div>
              <div className="col-span-1 text-gray-300">일반 퍼즐</div>
              <div className="col-span-1 text-orange-400">Premium BB</div>
            </div>
            {[
              ["단순 그림 맞추기", "교과 연계 학습"],
              ["완성 후 끝", "AR 확장 체험"],
              ["반복 흥미 감소", "지식 확장 구조"],
              ["놀이 중심", "놀이+학습 통합"]
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-gray-100 last:border-0">
                <div className="col-span-1 py-4 px-2 text-center text-gray-500 text-sm md:text-base bg-gray-50 flex items-center justify-center">
                  {i === 0 ? "학습 방식" : i === 1 ? "완성 후" : i === 2 ? "지속성" : "핵심 가치"}
                </div>
                <div className="col-span-1 py-4 px-2 text-center text-gray-500 border-r border-gray-100">{row[0]}</div>
                <div className="col-span-1 py-4 px-2 text-center font-bold text-slate-800 bg-orange-50/30">{row[1]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ⑥ 5 Growth Effects */}
        <section className="py-20 px-6 bg-slate-900 text-white">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">5가지 성장 효과</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: "01", title: "공간 인지 능력", icon: <Layers size={24} /> },
              { num: "02", title: "초등 교과과정", icon: <BookOpen size={24} /> },
              { num: "03", title: "자기주도 학습", icon: <Brain size={24} /> },
              { num: "04", title: "집중력 향상", icon: <Zap size={24} /> },
              { num: "05", title: "학습 동기 자극", icon: <Star size={24} /> },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700 hover:border-orange-500 transition-colors group"
              >
                <div className="text-orange-500 font-mono text-sm mb-2 opacity-50">{item.num}</div>
                <div className="bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:bg-orange-500 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ⑦ Learning Effect Emphasis */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              기존 퍼즐 경험 + AR 증강현실 = <span className="text-blue-600">학습 효과 UP</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="relative w-full md:w-5/12 aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop" alt="Puzzle" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white font-bold text-xl">퍼즐 맞추기</div>
              </div>
              
              <div className="hidden md:flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white shadow-lg z-10">
                <span className="font-bold text-xl">+</span>
              </div>
              
              <div className="relative w-full md:w-5/12 aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-lg border-2 border-blue-400">
                <img src="https://images.unsplash.com/photo-1633511090164-b43840ea1607?q=80&w=2070&auto=format&fit=crop" alt="AR" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-900/40 text-white font-bold text-xl">AR 체험</div>
              </div>
            </div>
            
            <div className="mt-8 text-center bg-white py-4 px-8 rounded-full shadow-md inline-block relative left-1/2 -translate-x-1/2 border border-blue-100">
              <p className="text-blue-800 font-bold text-lg">학습 효과 상승 / 장기 기억력 자극</p>
            </div>
          </div>
        </section>

        {/* ⑧ Safety & Trust */}
        <section className="py-20 px-6 bg-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">안전성 & 신뢰 확보</h2>
              <p className="text-xl text-gray-600 mb-8">
                아이가 사용하는 제품,<br/>
                <span className="text-slate-900 font-bold">안전성과 신뢰를 먼저 생각했습니다.</span>
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Shield className="text-green-600" size={24} />
                  <span className="font-medium">KC 안전 인증 획득</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Award className="text-orange-500" size={24} />
                  <span className="font-medium">2022 미래창조경영우수기업 대상</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <PenTool className="text-purple-500" size={24} />
                  <span className="font-medium">한국 대표하는 유망 작가 협업</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Check className="text-blue-500" size={24} />
                  <span className="font-medium">100% 국내 디자인 및 기획</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center overflow-hidden">
               <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop" alt="Safe Play" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* ⑨ Emotional Closing */}
        <section className="py-24 px-6 bg-slate-50 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium leading-relaxed">
              지금 시작하는 작은 차이가<br/>
              <span className="text-slate-900 font-bold">1년 뒤 아이의 사고력을 만듭니다.</span>
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              오늘,<br/>
              그냥 퍼즐이 아니라<br/>
              <span className="text-blue-600">성장</span>을 선택하세요.
            </h2>
          </motion.div>
        </section>

        {/* ⑩ CTA */}
        <section className="py-20 px-6 bg-slate-900 text-center">
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-5 px-8 rounded-xl shadow-lg shadow-orange-500/20 transition-all"
            >
              우리 아이 프리미엄 퍼즐 선택하기
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white hover:bg-gray-50 text-slate-900 text-lg font-bold py-4 px-8 rounded-xl border border-gray-200 transition-all"
            >
              지금 AR 체험 시작하기
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-transparent hover:bg-slate-800 text-gray-400 text-base font-medium py-3 px-8 rounded-xl transition-all"
            >
              성장형 퍼즐 구매하기
            </motion.button>
          </div>
          
          <p className="mt-12 text-gray-500 text-sm">
            © 2024 Premium BB Puzzle. All rights reserved.
          </p>
        </section>

      </div>
    </div>
  );
}
