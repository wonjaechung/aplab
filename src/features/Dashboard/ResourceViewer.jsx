import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

const ResourceViewer = () => {
    const panelsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const currentPanels = panelsRef.current;
        currentPanels.forEach((panel) => {
            if (panel) {
                observer.observe(panel);
            }
        });

        return () => {
            currentPanels.forEach((panel) => {
                if (panel) {
                    observer.unobserve(panel);
                }
            });
        };
    }, []);

    return (
        <>
            <Helmet>
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+KR:wght@400;700;900&display=swap');
                    :root {
                        --bg-deep-space: #0f0c29;
                        --bg-space-grad: linear-gradient(170deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
                        --text-light: #f0f2f5;
                        --text-dark: #2c3e50;
                        --accent-glow: #4facfe;
                        --accent-warm: #fa709a;
                        --accent-cool: #43e97b;
                        --wonjaemon-color-1: #4ecdc4;
                        --wonjaemon-color-2: #556270;
                        --warn-color: #ff9800;
                    }
                    .webtoon-container { max-width: 800px; margin: 0 auto; background-color: #ffffff; color: var(--text-dark); border-radius: 16px; overflow: hidden; }
                    .panel { padding: 60px 40px; border-bottom: 4px solid #e9ecef; overflow: hidden; opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
                    .panel.is-visible { opacity: 1; transform: translateY(0); }
                    .panel-title { font-family: 'Do Hyeon', sans-serif; font-size: 2.8em; text-align: center; margin-bottom: 40px; line-height: 1.3; }
                    .title-panel { background: var(--bg-space-grad); color: var(--text-light); text-align: center; padding: 80px 20px; position: relative; }
                    .title-panel .panel-title { text-shadow: 0 0 15px rgba(79, 172, 254, 0.7); }
                    .title-panel .subtitle { font-size: 1.2em; opacity: 0.9; margin-top: -20px; }
                    .wonjaemon-character { width: 180px; margin: 40px auto; animation: float 6s ease-in-out infinite; }
                    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
                    #wonjaemon-antenna-light { animation: pulse 2s ease-in-out infinite; }
                    @keyframes pulse { 0%, 100% { fill: #ff6b6b; r: 6; } 50% { fill: #ff8e8e; r: 7; } }
                    .bubble { padding: 25px 30px; border-radius: 25px; margin: 20px 0; position: relative; font-size: 1.1em; line-height: 1.7; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1)); }
                    .speech { background-color: #e3f2fd; }
                    .speech::after { content: ''; position: absolute; bottom: 0; left: 50px; width: 0; height: 0; border: 20px solid transparent; border-top-color: #e3f2fd; border-bottom: 0; margin-left: -20px; margin-bottom: -20px; }
                    .thought { border: 3px dashed #a0c4e4; background-color: #f8f9fa; font-style: italic; }
                    .narration, .explanation-box, .step-by-step, .visual-demo { padding: 25px; border-radius: 20px; margin: 25px 0; font-size: 1.1em; line-height: 1.7; box-shadow: 0 8px 20px rgba(0,0,0,0.05); }
                    .narration { background-color: #f8f9fa; border-left: 5px solid var(--accent-glow); font-style: italic; }
                    .explanation-box { background: linear-gradient(135deg, #e8f5e9, #d4edda); border: 3px solid #28a745; color: #155724; }
                    .step-by-step { background: linear-gradient(135deg, #fff3e0, #ffe0b2); border: 3px solid var(--warn-color); color: #e65100; }
                    .highlight { background: linear-gradient(120deg, #a8edea 0%, #fed6e3 100%); padding: 3px 8px; border-radius: 8px; font-weight: 700; }
                    .math-box { background-color: #fff9db; border: 2px solid #ffe8a3; border-radius: 15px; padding: 25px; margin: 30px 0; text-align: center; font-size: 1.2em; font-family: 'Do Hyeon', sans-serif; color: #594a00; }
                    .bell-curve-container { width: 100%; margin: 30px 0; position: relative; }
                    .curve-comparison-container { display: flex; justify-content: space-around; align-items: flex-end; gap: 20px; height: 220px; }
                    .curve-wrapper { flex: 1; text-align: center; }
                    .curve-wrapper svg { width: 100%; max-width: 300px; }
                    .curve-wrapper p { font-family: 'Do Hyeon', sans-serif; font-size: 1.2em; margin-top: 10px; }
                    .z-table-vis { font-family: monospace; background-color: #f8f9fa; padding: 20px; border-radius: 10px; border: 2px solid #dee2e6; text-align: center; overflow-x: auto; }
                    .z-table-vis .highlight-cell { background-color: #ffe0b2; font-weight: bold; border-radius: 5px; }
                `}</style>
            </Helmet>
            <div className="webtoon-container">
                <svg width="0" height="0" style={{position:'absolute'}}>
                    <defs>
                        <g id="wonjaemon-svg-base"><path d="M 75,25 A 55,55 0 0 1 75,135 A 55,55 0 0 1 75,25" fill="#4ECDC4"/><path d="M 75,25 A 55,55 0 0 0 75,135" fill="#44A08D"/><line x1="75" y1="25" x2="75" y2="0" stroke="#556270" strokeWidth="5"/><circle id="wonjaemon-antenna-light" cx="75" cy="-5" r="6" fill="#ff6b6b"/></g>
                        <g id="wonjaemon-face-normal"><circle cx="55" cy="70" r="10" fill="#FFFFFF"/><circle cx="95" cy="70" r="10" fill="#FFFFFF"/><circle cx="55" cy="70" r="5" fill="#2C3E50"/><circle cx="95" cy="70" r="5" fill="#2C3E50"/><path d="M 65,100 Q 75,110 85,100" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round"/></g>
                        <g id="wonjaemon-face-thinking"><circle cx="55" cy="70" r="10" fill="#FFFFFF"/><circle cx="95" cy="70" r="10" fill="#FFFFFF"/><circle cx="55" cy="70" r="5" fill="#2C3E50"/><circle cx="95" cy="70" r="5" fill="#2C3E50"/><path d="M 65,105 L 85,105" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round"/></g>
                        <g id="wonjaemon-face-surprised"><circle cx="55" cy="70" r="12" fill="#FFFFFF"/><circle cx="95" cy="70" r="12" fill="#FFFFFF"/><circle cx="55" cy="70" r="6" fill="#2C3E50"/><circle cx="95" cy="70" r="6" fill="#2C3E50"/><ellipse cx="75" cy="110" rx="15" ry="10" fill="#FFFFFF"/></g>
                        <g id="wonjaemon-face-detective"><rect x="20" y="55" width="110" height="25" fill="#343a40" rx="10" ry="10"/><path d="M 65,100 Q 75,105 85,100" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round"/></g>
                    </defs>
                </svg>
                <section className="panel title-panel is-visible" ref={el => panelsRef.current[0] = el}>
                    <h1 className="panel-title">👽 외계인 통계학자 원재몬의 모험 📊</h1>
                    <div className="wonjaemon-character"><svg viewBox="0 0 150 150" width="180"><use href="#wonjaemon-svg-base"/><use href="#wonjaemon-face-normal"/></svg></div>
                    <p className="subtitle">7단원 & 8단원 완전 정복!</p>
                </section>
                <section className="panel" ref={el => panelsRef.current[1] = el}><h2 className="panel-title">[1화] 원재몬, 지구에 오다!</h2><div className="narration">멀고 먼 안드로메다 은하에서... 통계학을 정복하기 위해 한 천재 외계인이 지구를 찾아왔다! 그의 이름은 바로 <strong>원재몬!</strong></div><div className="wonjaemon-character"><svg viewBox="0 0 150 150"><use href="#wonjaemon-svg-base"/><use href="#wonjaemon-face-normal"/></svg></div><div className="bubble speech">"안녕, 지구인들! 나의 첫 번째 미션은... <span className="highlight">'지구인 전체의 평균 키'</span>를 알아내는 것이다! 흥미진진하군!"</div></section>
                <section className="panel" ref={el => panelsRef.current[2] = el}><h2 className="panel-title">[2화] 용어 정리 시간!</h2><div className="narration">미션을 시작하기 전, 원재몬은 핵심 용어부터 정리하기로 했다.</div><div className="explanation-box"><p><strong>모수 (Parameter):</strong> 내가 진짜 알고 싶은 모집단(Population) 전체의 값. 이건 비밀에 싸인 '우주의 진리' 같은 거야!</p><ul style={{paddingLeft:'20px', marginTop:'10px'}}><li>Population Mean (μ), Population Proportion (p), Population Standard Deviation (σ)</li></ul></div><div className="step-by-step"><p><strong>통계량 (Statistic):</strong> 내가 뽑은 표본(Sample)으로 계산한 값. 이건 내 손에 쥔 '유일한 단서'지!</p><ul style={{paddingLeft:'20px', marginTop:'10px'}}><li>Sample Mean (x̄), Sample Proportion (p̂), Sample Standard Deviation (s)</li></ul></div><div className="bubble speech">"좋아! 나의 목표는 Statistic(x̄)이라는 단서를 가지고 Parameter(μ)라는 진리를 추리해내는 것이다!"</div></section>
                <section className="panel" ref={el => panelsRef.current[3] = el}><h2 className="panel-title">[3화] 첫 번째 단서와 고민</h2><div className="narration">원재몬은 100명의 표본을 뽑아 평균 키를 계산했다.</div><div className="math-box">Sample Mean (x̄) = 175cm</div><div className="wonjaemon-character"><svg viewBox="0 0 150 150"><use href="#wonjaemon-svg-base"/><use href="#wonjaemon-face-thinking"/></svg></div><div className="bubble thought">"이건 내가 뽑은 100명의 평균일 뿐이잖아! 진짜 Population Mean(μ)이라고 할 수 있을까? 이 <span className="highlight">불확실성</span>... 어떡하지?"</div></section>
                <section className="panel" ref={el => panelsRef.current[4] = el}><h2 className="panel-title">[4화] 외계인의 초능력!</h2><div className="narration">이 불확실성의 패턴을 찾기 위해, 원재몬은 초능력을 사용하기로 결심했다!</div><div className="wonjaemon-character"><svg viewBox="0 0 150 150"><use href="#wonjaemon-svg-base"/><use href="#wonjaemon-face-normal"/></svg></div><div className="bubble speech">"내 초능력으로 <strong>'100명씩 뽑아서 평균 내기'를 100만 번 반복</strong>한다!"</div></section>
                <section className="panel" ref={el => panelsRef.current[5] = el}><h2 className="panel-title">[5화] 위대한 발견!</h2><div className="bell-curve-container"><svg width="100%" height="200" viewBox="0 0 400 200"><path d="M 20,180 C 100,180 120,20 200,20 C 280,20 300,180 380,180" stroke="#4facfe" strokeWidth="6" fill="none"/><text x="200" y="100" textAnchor="middle" fontFamily="'Do Hyeon', sans-serif" fontSize="24px" fill="#4facfe">표집분포!</text></svg></div><div className="wonjaemon-character"><svg viewBox="0 0 150 150"><use href="#wonjaemon-svg-base"/><use href="#wonjaemon-face-surprised"/></svg></div><div className="bubble speech">"이... 이럴 수가! 수많은 Sample Mean(x̄)들이 완벽한 <span className="highlight">Bell Shape</span>을 그리고 있어! 그리고 이 평균들의 평균이... 진짜 Population Mean(μ)과 똑같잖아!"</div></section>
                <section className="panel" ref={el => panelsRef.current[6] = el}><h2 className="panel-title">[6화] 고민 해결의 실마리</h2><div className="narration">원재몬은 이 발견이 자신의 고민에 대한 답이 된다는 것을 깨달았다.</div><div className="explanation-box"><p><strong>🤔 원재몬의 고민:</strong> "내가 뽑은 175cm가 진짜 Population Mean(μ)일까?"</p><p><strong>💡 새로운 발견의 의미:</strong></p><ul style={{margin: '15px 0', paddingLeft: '25px', lineHeight: '1.8'}}><li>내 Sample Mean 175cm는 수많은 가능성 중 <span className="highlight">단 하나</span>일 뿐이다.</li><li>하지만 그 수많은 가능성들은 <span className="highlight">예측 가능한 패턴(Bell Shape)</span>을 따른다.</li><li>그리고 그 패턴의 <span className="highlight">정중앙</span>이 바로 내가 찾던 **Population Mean(μ)**이다!</li></ul></div><div className="bubble speech">"그렇구나! 내 Sample Mean이 진짜 Population Mean과 정확히 같지는 않더라도, 이 Bell Shape 분포 덕분에 <span className="highlight">진짜 평균 근처에 있을 확률이 높다</span>는 걸 알 수 있게 됐어!"</div><div className="narration">이 위대한 발견이 바로 <strong>중심극한정리(Central Limit Theorem, CLT)</strong>다! <br/><strong>핵심:</strong> 표본의 크기가 충분히 크면(n≥30), Sample Mean의 분포(Sampling Distribution)는...<ul style={{marginTop:'10px', paddingLeft:'20px'}}><li><strong>모양:</strong> 정규분포를 따른다.</li><li><strong>중심:</strong> 그 평균은 Population Mean(μ)과 같다.</li><li><strong>퍼짐:</strong> 그 표준편차는 σ/√n 이다.</li></ul></div></section>
                <section className="panel" ref={el => panelsRef.current[7] = el}><h2 className="panel-title">[7화] 믿음직한 추정꾼!</h2><div className="narration">원재몬은 Sample Mean(x̄)이 왜 좋은 단서인지 더 깊이 파고들었다.</div><div className="visual-demo"><p><strong>🎯 과녁 맞히기 비유: 불편추정량(Unbiased Estimator)</strong></p><p>Statistic을 '활'이라고 생각해보세요. 우리의 목표는 Parameter라는 '과녁의 중심'을 맞히는 거예요.</p><ul style={{margin: '15px 0', paddingLeft: '25px', lineHeight: '1.8'}}><li><strong>믿음직한 활 (Unbiased Estimator, 예: x̄, p̂):</strong> 쏠 때마다 과녁 중심을 정확히 맞히진 못해도, 여러 발 쏘면 화살들이 <span className="highlight">과녁 중심 주변에 골고루</span> 박혀요. 평균적으로는 정중앙을 노리는 거죠.</li><li><strong>고장난 활 (Biased Estimator):</strong> 쏠 때마다 <span className="highlight">계속 한쪽으로만 빗나가는</span> 활이에요. 아무리 많이 쏴도 과녁 중심을 맞힐 수 없어요.</li></ul></div><div className="bubble speech">"아하! Sample Mean(x̄)이나 Sample Proportion(p̂)은 '믿음직한 활'이군요! 여러 번 뽑으면 결국 진실(Parameter)에 도달할 수 있으니, 믿고 쓸 수 있는 좋은 단서라는 뜻이네요!"</div></section>
                <section className="panel" ref={el => panelsRef.current[8] = el}><h2 className="panel-title">[8화] 흩어진 정도의 비밀</h2><div className="wonjaemon-character"><svg viewBox="0 0 150 150"><use href="#wonjaemon-svg-base"/><use href="#wonjaemon-face-thinking"/></svg></div><div className="bubble thought">"좋아, 진짜 Population Mean 근처에 있다는 건 알겠어. 그런데 '근처'라는 게 얼마나 가까운 거지? Sample Mean들이 얼마나 흩어져 있는지도 중요하지 않을까?"</div><div className="explanation-box"><p><strong>🎯 바로 그거예요!</strong> 우리의 최종 목표는 **Population Mean(μ)**을 알아내는 것이지만, 그 과정에서 <span className="highlight">"내 Sample Mean(x̄)이 얼마나 믿을만한가?"</span>를 먼저 알아야 해요. 그 '믿음의 정도' 또는 '흩어진 정도'를 측정하는 것이 바로 <span className="highlight">Sampling Distribution의 Standard Deviation(σ_x̄)</span>입니다!</p></div></section>
                <section className="panel" ref={el => panelsRef.current[9] = el}><h2 className="panel-title">[9화] 뾰족한 분포 vs 퍼진 분포</h2><div className="narration">과녁 비유를 정규분포 그래프로 그려보면 이렇습니다.</div><div className="curve-comparison-container"><div className="curve-wrapper"><svg viewBox="0 0 200 150"><path d="M 10,140 C 50,140 60,10 100,10 C 140,10 150,140 190,140" stroke="#28a745" strokeWidth="4" fill="rgba(40, 167, 69, 0.2)"/></svg><p style={{color: '#28a745'}}>표준편차 작음 (뾰족!)<br/>예측이 더 정확해요.</p></div><div className="curve-wrapper"><svg viewBox="0 0 200 150"><path d="M 10,140 C 50,140 80,80 100,80 C 120,80 150,140 190,140" stroke="#ff9800" strokeWidth="4" fill="rgba(255, 152, 0, 0.2)"/></svg><p style={{color: '#ff9800'}}>표준편차 큼 (퍼짐!)<br/>예측이 더 불확실해요.</p></div></div><div className="bubble speech">"아하! 표준편차가 작을수록 제가 뽑은 Sample Mean이 진짜 Population Mean에 가까울 확률이 높다는 뜻이군요! 그럼 이 'Sampling Distribution의 Standard Deviation'을 어떻게 계산하죠?"</div></section>
                <section className="panel" ref={el => panelsRef.current[10] = el}><h2 className="panel-title">[10화] 마법의 주문서 (1/2)</h2><div className="narration">중심극한정리라는 강력한 마법을 쓰기 전, 항상 주문 조건을 확인해야 한다!</div><div className="step-by-step"><p><strong>📜 원재몬의 마법 주문서 (R.I.N 조건) 📜</strong></p><p><strong>✅ R - Random (무작위):</strong> 데이터가 무작위로 수집되었는가?</p><p><strong>✅ I - Independent (독립):</strong> 관측치들이 서로 영향을 주지 않는가? (10% 조건: N > 10n)</p></div></section>
                <section className="panel" ref={el => panelsRef.current[11] = el}><h2 className="panel-title">[11화] 마법의 주문서 (2/2)</h2><div className="step-by-step"><p><strong>✅ N - Normal (정규성):</strong> 표집분포가 정규분포를 따르는가?</p><p><strong>[평균(Means)의 정규성 확인법]</strong> - 셋 중 하나만 OK!</p><ul style={{margin: '10px 0', paddingLeft: '20px'}}><li>1. Population이 정규분포</li><li>2. CLT 마법 (n ≥ 30)</li><li>3. 그래프 확인 (n &lt; 30)</li></ul><p><strong>[비율(Proportions)의 정규성 확인법]</strong></p><ul style={{margin: '10px 0', paddingLeft: '20px'}}><li>큰 표본 조건 (np̂ ≥ 10 and n(1-p̂) ≥ 10)</li></ul></div><div className="bubble speech">"아하! 평균과 비율 모두 마법을 쓰기 위한 조건이 있었군요! 특히 정규성을 확인하는 방법이 조금 다르네요!"</div></section>
                <section className="panel" ref={el => panelsRef.current[12] = el}><h2 className="panel-title">[12화] 두 가지 다른 상황의 등장</h2><div className="narration">조건을 확인했다면, 이제 표집분포의 표준편차를 계산할 차례! 방법은 우리가 가진 정보에 따라 두 가지로 나뉜다!</div><div className="step-by-step"><p><strong>🎪 상황을 나누는 핵심 질문:</strong></p><p style={{fontSize: '1.3em', fontWeight: '700', color: '#e65100', margin: '15px 0', textAlign:'center'}}>"Population Standard Deviation(σ)을 알고 있는가?"</p></div></section>
                <section className="panel" ref={el => panelsRef.current[13] = el}><h2 className="panel-title">💡 상황 1: 전지전능한 존재의 힌트</h2><div className="narration"><strong>신성한 목소리:</strong> "원재몬이여, 비밀을 알려주마. 지구인 전체 키의 <span className="highlight">Population Standard Deviation(σ)은 10cm</span>이다! 이 신성한 정보를 사용하거라."</div><div className="explanation-box"><p><strong>🎓 이론적 상황의 특징:</strong> Population Standard Deviation(σ)를 완벽하게 알고 있다고 가정하는, 주로 CLT의 원리를 확인하는 <strong>이론 문제</strong>에서 나타나는 상황입니다.</p></div><div className="math-box">Sampling Distribution의 Standard Deviation (σ_x̄) = σ / √n <br/>= 10cm / √100 = <strong>1cm</strong></div></section>
                <section className="panel" ref={el => panelsRef.current[14] = el}><h2 className="panel-title">🕵️‍♂️ 상황 2: 외로운 탐정의 현실</h2><div className="wonjaemon-character"><svg viewBox="0 0 150 150"><use href="#wonjaemon-svg-base"/><use href="#wonjaemon-face-detective"/></svg></div><div className="bubble speech">"현실에 신은 없죠... 제가 가진 건 오직 100명의 데이터로 계산한 <span className="highlight">Sample Standard Deviation(s) = 9.5cm</span>가 전부입니다!"</div><div className="step-by-step"><p><strong>🤔 논리의 흐름을 따라와 보세요!</strong></p><ol style={{margin: '15px 0', paddingLeft: '25px', lineHeight: '2'}}><li>우리의 진짜 목표는 <span className="highlight">Sampling Distribution의 Standard Deviation(σ_x̄)</span>을 아는 것입니다.</li><li>공식은 'σ / √n'인데, 가장 큰 문제는 우리가 <span className="highlight">σ를 모른다</span>는 점입니다.</li><li>그래서 탐정처럼, 우리가 가진 유일한 단서인 <span className="highlight">Sample Standard Deviation(s)</span>를 σ 대신 사용해서 **'추정'**하는 것입니다.</li><li>이렇게 '추정한 값'은 더 이상 진짜 'Standard Deviation'이 아니므로, 특별히 **Standard Error(SE)**라는 새 이름을 붙여줍니다.</li></ol></div><div className="math-box">Standard Error (SE_x̄) = s / √n <br/>= 9.5cm / √100 = <strong>0.95cm</strong></div></section>
                <section className="panel" ref={el => panelsRef.current[15] = el}><h2 className="panel-title">[13화] 새로운 미션: 비율의 세계!</h2><div className="narration">평균 키 미션을 마친 원재몬에게 새로운 미션이 주어졌다.</div><div className="wonjaemon-character"><svg viewBox="0 0 150 150"><use href="#wonjaemon-svg-base"/><use href="#wonjaemon-face-normal"/></svg></div><div className="bubble speech">"이번엔 <span className="highlight">'안경 쓴 지구인의 비율'</span>을 알아내야 한다! 원리는 비슷하겠지?"</div><div className="narration">원재몬은 200명의 표본을 뽑아, 그중 60명이 안경을 쓴 것을 발견했다.</div><div className="math-box">Sample Proportion (p̂) = 60 / 200 = 0.3</div></section>
                <section className="panel" ref={el => panelsRef.current[16] = el}><h2 className="panel-title">[14화] 비율의 표집분포</h2><div className="narration">원재몬은 다시 초능력을 사용해 '200명씩 뽑아 비율 구하기'를 100만 번 반복했다.</div><div className="bubble speech">"역시! Sample Proportion(p̂)의 분포도 아름다운 Bell Shape이야! 중심극한정리는 평균뿐만 아니라 비율에도 적용되는구나!"</div><div className="explanation-box"><p><strong>💡 상황 1 (이론):</strong> 진짜 Population Proportion(p)를 알 때, <br/><strong>Standard Deviation (σ_p̂) = √[p(1-p)/n]</strong></p></div><div className="step-by-step"><p><strong>🕵️‍♂️ 상황 2 (실전):</strong> p를 모르므로 p̂으로 추정!<br/><strong>Standard Error (SE_p̂) = √[p̂(1-p̂)/n]</strong></p></div><div className="math-box">우리 미션은 상황 2이므로, <br/>SE_p̂ = √[(0.3)(0.7)/200] ≈ <strong>0.0324</strong></div></section>
                <section className="panel" ref={el => panelsRef.current[17] = el}><h2 className="panel-title">[15화] 8단원 정복: 신뢰구간!</h2><div className="narration">원재몬은 7단원에서 배운 개념을 이용해, Parameter(μ 또는 p)가 어디쯤 있을지 '그물'을 던져보기로 했다. 이것이 바로 8단원의 핵심, **신뢰구간(Confidence Interval)**이다!</div><div className="explanation-box"><p><strong>신뢰구간이란?</strong> "우리가 찾고 있는 진짜 값(Parameter)이 포함될 것이라고 믿는 그럴듯한 값들의 범위"를 의미해요.</p></div><div className="bubble speech">"그럼 그물은 얼마나 넓게 펼쳐야 하죠? 그게 바로 오차범위(Margin of Error)군요!"</div></section>
                <section className="panel" ref={el => panelsRef.current[18] = el}><h2 className="panel-title">[18화] 평균 신뢰구간 (t-interval)</h2><div className="narration">이번엔 지구인 평균 키(μ)에 대한 95% 신뢰구간을 구해보자.</div><div className="bubble speech">"잠깐! 평균의 경우, σ를 모르기 때문에 s를 썼죠? 이렇게 불확실성이 추가되면 더 이상 완벽한 정규분포(z-분포)를 쓸 수 없어요. 대신 꼬리가 더 두꺼운 <span className="highlight">t-분포</span>를 사용해야 합니다!"</div><div className="step-by-step"><p>1. <strong>Statistic (x̄):</strong> 175cm</p><p>2. <strong>Standard Error (SE_x̄):</strong> 0.95cm</p><p>3. <strong>Critical Value (t*):</strong> df = 100 - 1 = 99인 t-분포에서 95% 신뢰수준에 해당하는 t* 값은? → <strong>t-table</strong>에서 찾자!</p></div><div className="math-box"><p>175 ± (1.984 × 0.95) = 175 ± 1.8848</p><p><strong>= (173.1152 cm, 176.8848 cm)</strong></p></div></section>
                {/* --- END OF PREVIOUSLY MISSING CONTENT --- */}
                
                <section className="panel" ref={el => panelsRef.current[19] = el}>
                    <h2 className="panel-title">[19화] 시험 꿀팁: 해석하기!</h2>
                    <div className="narration">원재몬은 신뢰구간을 구하는 것만큼, 그 의미를 정확히 해석하는 것이 중요하다고 강조했다.</div>
                    <div className="explanation-box">
                        <p><strong>⭐ Interpreting Confidence Intervals ⭐</strong></p>
                        <p>To interpret a C% confidence interval for an unknown parameter, say:</p>
                        <p>"We are <span className="highlight">C% confident</span> that the <span className="highlight">interval</span> from ____ to ____ <span className="highlight">captures</span> the <span className="highlight">actual value</span> of the [population parameter in context]."</p>
                    </div>
                </section>
                <section className="panel" ref={el => panelsRef.current[20] = el}>
                    <h2 className="panel-title">[20화] 최종 미션: 쌍둥이 연구?</h2>
                    <div className="narration">원재몬에게 마지막 미션이 도착했다. 바로 오메가-3 보충제의 효과를 분석하는 것!</div>
                    <div className="visual-demo"><p><strong>쌍체 t-검정 (Paired t-test) 이란?</strong></p><p>같은 사람에게 '사전/사후' 검사를 하거나, 'A약/B약'을 모두 투여하는 것처럼, 데이터들이 자연스럽게 '짝'을 이루는 경우에 사용해요.</p><p>핵심은, 각 그룹의 평균을 따로 보는 게 아니라, <span className="highlight">두 값의 '차이(Difference)'</span>를 새로운 데이터로 만들어 분석하는 거예요!</p></div>
                    <div className="bubble speech">"오메가-3를 먹기 전(플라시보)과 후의 짜증 점수 '차이'에만 집중하면, 이건 그냥 1-표본 t-검정(one-sample t-test)이랑 똑같아지겠군요!"</div>
                </section>
                <section className="panel title-panel" ref={el => panelsRef.current[21] = el}>
                    <h2 className="panel-title">[마지막화] 우주로 돌아가는 길</h2>
                    <div className="wonjaemon-character"><svg viewBox="0 0 150 150"><use href="#wonjaemon-svg-base"/><use href="#wonjaemon-face-normal"/></svg></div>
                    <div className="bubble speech" style={{color: 'var(--text-dark)', background: 'var(--text-light)'}}>"고마웠어, 지구인 친구들! 통계학은 불확실성 속에서 최선의 답을 찾는 위대한 학문이야! 너희도 이제 데이터 탐정이라고!"</div>
                    <div className="narration" style={{background:'none', border:'none', color:'white', textAlign:'center', marginTop:'30px'}}>미션을 완수한 원재몬은 새로운 통계적 모험을 찾아 우주로 돌아갔다.</div>
                </section>
            </div>
        </>
    );
};

export default ResourceViewer;