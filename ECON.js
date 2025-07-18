import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, ScatterChart, Scatter, LineChart, Line } from 'recharts';
import { ChevronDown, Search, X, BookOpen, Target, BarChart2, Check, AlertCircle, Home, FileText, BrainCircuit, Languages, DollarSign, Landmark } from 'lucide-react';

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, ScatterChart, Scatter, LineChart, Line } from 'recharts';
import { ChevronDown, Search, X, BookOpen, Target, BarChart2, Check, AlertCircle, Home, FileText, BrainCircuit, Languages, DollarSign, Landmark } from 'lucide-react';

// --- 데이터베이스 (AP Macroeconomics 2013 Questions) ---
const allQuestions = [
  // Questions 1-10
  {
    id: "2013-01", year: 2013, questionNumber: 1,
    questionText: "Which of the following combinations of economic policies would be most effective to correct a severe recession?",
    answerOptions: [
      { text: "Taxes: Increase, Money Supply: Increase", isCorrect: false }, { text: "Taxes: Decrease, Money Supply: Increase", isCorrect: true },
      { text: "Taxes: No change, Money Supply: Increase", isCorrect: false }, { text: "Taxes: Increase, Money Supply: Decrease", isCorrect: false },
      { text: "Taxes: Decrease, Money Supply: Decrease", isCorrect: false },
    ],
    explanation: {
      ko: { concept: "📉 경기 침체 대응을 위한 확장적 경제 정책", steps: ["심각한 경기 침체(severe recession)는 총수요(Aggregate Demand)가 부족한 상태입니다.", "총수요를 증가시키기 위해서는 확장적 재정정책과 확장적 통화정책이 필요합니다.", "확장적 재정정책은 '세금 감면(Decrease Taxes)' 또는 '정부 지출 증가'를 의미합니다.", "확장적 통화정책은 '통화 공급 증가(Increase Money Supply)'를 의미합니다.", "따라서 세금을 감면하고 통화 공급을 늘리는 조합이 가장 효과적입니다."], distractors: ["A, D: 세금 인상은 총수요를 감소시키는 긴축 재정정책으로, 경기 침체를 악화시킵니다.", "E: 통화 공급 감소는 이자율을 높여 투자를 위축시키는 긴축 통화정책입니다.", "C: 세금 불변은 재정정책을 사용하지 않는 것이므로, 세금 감면보다 효과가 작습니다."], summary: "경기 침체를 극복하기 위해서는 총수요를 진작시키는 확장적 재정정책(세금 감면, 정부지출 증가)과 확장적 통화정책(통화량 증가)을 함께 사용하는 것이 가장 효과적입니다." },
      en: { concept: "📉 Expansionary Policies to Combat a Recession", steps: ["A severe recession is a state of deficient aggregate demand (AD).", "To increase AD, both expansionary fiscal policy and expansionary monetary policy are needed.", "Expansionary fiscal policy involves 'decreasing taxes' or 'increasing government spending'.", "Expansionary monetary policy involves 'increasing the money supply'.", "Therefore, the combination of decreasing taxes and increasing the money supply is the most effective."], distractors: ["A, D: Increasing taxes is a contractionary fiscal policy that reduces AD and worsens a recession.", "E: Decreasing the money supply is a contractionary monetary policy that raises interest rates and discourages investment.", "C: No change in taxes means not using fiscal policy, which is less effective than a tax cut."], summary: "To overcome a recession, the most effective approach is to use a combination of expansionary fiscal policy (tax cuts, government spending increase) and expansionary monetary policy (money supply increase) to boost aggregate demand." }
    }, tags: ['재정정책', '통화정책', '경기안정화정책'], difficulty: '쉬움'
  },
  {
    id: "2013-02", year: 2013, questionNumber: 2,
    questionText: "Any point inside a production possibilities curve is",
    answerOptions: [
      { text: "better than points on the production possibilities curve", isCorrect: false }, { text: "allocatively efficient but technologically inefficient", isCorrect: false },
      { text: "associated with inefficient use or unemployment of some resources", isCorrect: true }, { text: "associated with movements along the production possibilities curve", isCorrect: false },
      { text: "associated with constant opportunity costs", isCorrect: false },
    ],
    explanation: {
      ko: { concept: "📊 생산가능곡선(PPC)의 이해", steps: ["생산가능곡선(PPC)은 주어진 자원과 기술을 사용하여 최대한 효율적으로 생산할 수 있는 두 재화의 조합을 나타내는 곡선입니다.", "곡선 위의 점들은 모든 자원이 효율적으로 사용되고 있음을 의미합니다 (생산적 효율성).", "곡선 안쪽의 점은 자원이 비효율적으로 사용되거나, 실업 상태인 자원이 존재함을 의미합니다.", "곡선 바깥쪽의 점은 현재의 자원과 기술로는 도달할 수 없는 생산 수준을 의미합니다."], distractors: ["A: 곡선 위의 점들이 더 효율적이므로 더 좋습니다.", "B: 곡선 안쪽의 점은 생산적으로 비효율적입니다. 배분적 효율성은 알 수 없습니다.", "D: 곡선 위의 한 점에서 다른 점으로의 이동이 '움직임'에 해당합니다.", "E: PPC가 직선일 때 기회비용이 일정합니다. 곡선 안의 점과는 관련이 없습니다."], summary: "생산가능곡선(PPC) 내부의 점은 실업이나 자원의 비효율적 사용을 나타내며, 곡선 위의 점은 생산적 효율성을 달성한 상태를 나타냅니다." },
      en: { concept: "📊 Understanding the Production Possibilities Curve (PPC)", steps: ["The Production Possibilities Curve (PPC) shows the maximum efficient combinations of two goods that can be produced with available resources and technology.", "Points on the curve represent efficient use of all resources (productive efficiency).", "Points inside the curve signify that resources are being used inefficiently or that there is unemployment.", "Points outside the curve are unattainable with current resources and technology."], distractors: ["A: Points on the curve are better as they are more efficient.", "B: A point inside the curve is productively inefficient. We cannot determine allocative efficiency.", "D: Movements are from one point to another on the curve itself.", "E: Constant opportunity cost is represented by a straight-line PPC, not a point inside it."], summary: "A point inside the PPC represents unemployment or inefficiency, while a point on the PPC represents productive efficiency." }
    }, tags: ['기본 경제 개념', '생산가능곡선'], difficulty: '쉬움'
  },
  {
    id: "2013-03", year: 2013, questionNumber: 3,
    questionText: "If nominal gross domestic product in a country is $1,600 and the money supply is $400, what is the velocity of money?",
    answerOptions: [ { text: "400", isCorrect: false }, { text: "10", isCorrect: false }, { text: "4", isCorrect: true }, { text: "2", isCorrect: false }, { text: "0.5", isCorrect: false }, ],
    explanation: {
      ko: { concept: "💰 화폐유통속도와 화폐수량설", steps: ["화폐수량설 방정식은 MV = PQ 입니다.", "M = 통화량 (Money Supply)", "V = 화폐유통속도 (Velocity of Money)", "P = 물가 수준 (Price Level)", "Q = 실질 GDP (Real Output)", "PQ = 명목 GDP (Nominal GDP)", "따라서 V = (명목 GDP) / M 입니다.", "V = $1,600 / $400 = 4"], distractors: ["다른 값들은 공식을 잘못 적용한 결과입니다."], summary: "화폐유통속도(V)는 명목 GDP(PQ)를 통화량(M)으로 나눈 값으로, 일정 기간 동안 한 단위의 화폐가 거래에 사용된 평균 횟수를 나타냅니다." },
      en: { concept: "💰 Velocity of Money and the Quantity Theory", steps: ["The Quantity Theory of Money equation is MV = PQ.", "M = Money Supply", "V = Velocity of Money", "P = Price Level", "Q = Real Output", "PQ = Nominal GDP", "Therefore, V = (Nominal GDP) / M.", "V = $1,600 / $400 = 4"], distractors: ["The other values are the result of misapplying the formula."], summary: "The velocity of money (V) is calculated by dividing Nominal GDP (PQ) by the Money Supply (M). It represents the average number of times a unit of money is used in transactions during a period." }
    }, tags: ['통화정책', '화폐수량설', 'GDP'], difficulty: '쉬움'
  },
  {
    id: "2013-04", year: 2013, questionNumber: 4,
    questionText: "An increase in which of the following would most likely cause the gross domestic product of a country to decrease in the short run?",
    answerOptions: [ { text: "Government spending", isCorrect: false }, { text: "Imports", isCorrect: true }, { text: "Money supply", isCorrect: false }, { text: "Consumption spending by households", isCorrect: false }, { text: "Investment spending by domestic firms", isCorrect: false }, ],
    explanation: {
      ko: { concept: "📈 GDP 구성요소와 순수출", steps: ["GDP(Y)의 지출 접근법 공식은 Y = C + I + G + (X - M) 입니다.", "C = 소비 (Consumption)", "I = 투자 (Investment)", "G = 정부지출 (Government spending)", "X = 수출 (Exports)", "M = 수입 (Imports)", "이 공식에서 수입(M)은 빼는 항목입니다. 따라서 수입이 증가하면 순수출(X-M)이 감소하고, 결과적으로 GDP가 감소합니다."], distractors: ["A, D, E: 정부지출(G), 소비(C), 투자(I)는 GDP의 구성요소로, 이들이 증가하면 GDP도 증가합니다.", "C: 통화 공급이 증가하면 이자율이 하락하여 소비(C)와 투자(I)가 촉진되므로 단기적으로 GDP가 증가할 가능성이 높습니다."], summary: "GDP 계산 시 수입(Imports)은 국내 생산이 아니므로 총지출에서 제외됩니다. 따라서 수입 증가는 순수출을 감소시켜 GDP를 감소시키는 요인으로 작용합니다." },
      en: { concept: "📈 GDP Components and Net Exports", steps: ["The expenditure approach formula for GDP (Y) is Y = C + I + G + (X - M).", "C = Consumption", "I = Investment", "G = Government spending", "X = Exports", "M = Imports", "In this formula, imports (M) are subtracted. Therefore, an increase in imports decreases net exports (X-M), which in turn decreases GDP."], distractors: ["A, D, E: Government spending (G), consumption (C), and investment (I) are components of GDP, so an increase in them would increase GDP.", "C: An increase in the money supply would likely lower interest rates, stimulating consumption (C) and investment (I), thus increasing GDP in the short run."], summary: "In GDP calculation, imports are subtracted because they are not domestically produced. Thus, an increase in imports reduces net exports and causes GDP to decrease." }
    }, tags: ['국민소득', 'GDP'], difficulty: '쉬움'
  },
  {
    id: "2013-05", year: 2013, questionNumber: 5,
    questionText: "A country's infrastructure refers to its",
    answerOptions: [ { text: "natural resources", isCorrect: false }, { text: "private financial institutions", isCorrect: false }, { text: "proportion of population with postsecondary education", isCorrect: false }, { text: "public capital goods such as highways", isCorrect: true }, { text: "internal, as opposed to external, debt", isCorrect: false }, ],
    explanation: {
      ko: { concept: "🏗️ 사회기반시설(Infrastructure)의 정의", steps: ["사회기반시설(인프라)은 한 국가나 지역의 경제 활동에 필수적인 기초가 되는 공공 시설 및 서비스를 의미합니다.", "여기에는 도로, 항만, 공항, 철도, 통신 시설, 전력망, 수도 시스템 등이 포함됩니다.", "이러한 자산들은 주로 공공 자본재(public capital goods)의 형태를 띱니다.", "따라서 고속도로와 같은 공공 자본재가 사회기반시설의 대표적인 예입니다."], distractors: ["A: 천연자원은 생산요소이지만 인프라는 아닙니다.", "B: 민간 금융기관은 경제의 중요한 부분이지만, 공공재적 성격의 인프라와는 구분됩니다.", "C: 교육 수준은 인적 자본(human capital)에 해당합니다.", "E: 국가 부채는 금융적인 개념입니다."], summary: "사회기반시설(인프라)은 경제의 원활한 작동을 위해 필수적인 도로, 다리, 통신망 등과 같은 공공 자본재를 지칭합니다." },
      en: { concept: "🏗️ Definition of Infrastructure", steps: ["Infrastructure refers to the basic public facilities and services essential for the economic activity of a country or region.", "This includes roads, ports, airports, railways, communication facilities, power grids, and water systems.", "These assets typically take the form of public capital goods.", "Therefore, public capital goods such as highways are a prime example of infrastructure."], distractors: ["A: Natural resources are factors of production but not infrastructure.", "B: Private financial institutions are a crucial part of the economy but are distinct from infrastructure, which often has public good characteristics.", "C: Educational attainment relates to human capital.", "E: National debt is a financial concept."], summary: "Infrastructure refers to public capital goods like roads, bridges, and communication networks that are essential for the smooth functioning of an economy." }
    }, tags: ['경제성장', '기본 경제 개념'], difficulty: '쉬움'
  },
  {
    id: "2013-06", year: 2013, questionNumber: 6,
    questionText: "In the short run, which of the following will most likely result if wages in an economy rise faster than workers' productivity?",
    answerOptions: [ { text: "An increase in the price level", isCorrect: true }, { text: "An increase in firms' profits", isCorrect: false }, { text: "An increase in efficiency in labor-intensive industries", isCorrect: false }, { text: "A larger increase in property income than in labor income", isCorrect: false }, { text: "A decrease in import prices", isCorrect: false }, ],
    explanation: {
      ko: { concept: "📈 비용인상 인플레이션 (Cost-Push Inflation)", steps: ["임금은 기업의 주요 생산 비용 중 하나입니다.", "생산성 향상 속도보다 임금 상승 속도가 더 빠르면, 단위 생산 비용(per-unit cost of production)이 증가합니다.", "생산 비용의 증가는 단기 총공급(SRAS) 곡선을 왼쪽으로 이동시킵니다.", "SRAS 곡선이 왼쪽으로 이동하면, 물가 수준은 상승하고 실질 GDP는 감소합니다. 이를 비용인상 인플레이션이라고 합니다."], distractors: ["B: 생산 비용이 증가하므로 기업의 이윤은 감소할 가능성이 높습니다.", "C: 비용 증가는 효율성을 저해할 수 있습니다.", "D: 임금 소득이 재산 소득보다 더 크게 증가하는 상황입니다.", "E: 이는 국내 요인이며, 수입 물가와는 직접적인 관련이 없습니다."], summary: "생산성을 초과하는 임금 인상은 기업의 생산 비용을 증가시켜 단기 총공급을 감소시키고, 이는 물가 상승(비용인상 인플레이션)으로 이어집니다." },
      en: { concept: "📈 Cost-Push Inflation", steps: ["Wages are a primary input cost for firms.", "If wages rise faster than productivity, the per-unit cost of production increases.", "An increase in production costs shifts the Short-Run Aggregate Supply (SRAS) curve to the left.", "A leftward shift of the SRAS curve leads to a higher price level and lower real GDP. This is known as cost-push inflation."], distractors: ["B: With higher production costs, firms' profits are likely to decrease.", "C: Rising costs could hinder efficiency.", "D: This situation describes labor income rising more than property income.", "E: This is a domestic factor and is not directly related to import prices."], summary: "Wage increases that outpace productivity gains raise firms' production costs, which decreases short-run aggregate supply and leads to a higher price level (cost-push inflation)." }
    }, tags: ['총공급', '인플레이션'], difficulty: '중간'
  },
  {
    id: "2013-07", year: 2013, questionNumber: 7,
    questionText: "When the central bank sells government bonds on the open market, which of the following will most likely increase?",
    answerOptions: [ { text: "Bank reserves", isCorrect: false }, { text: "Price of bonds", isCorrect: false }, { text: "Money supply", isCorrect: false }, { text: "Nominal interest rates", isCorrect: true }, { text: "The required reserve ratio", isCorrect: false }, ],
    explanation: {
      ko: { concept: "🏦 긴축적 통화정책: 공개시장매각", steps: ["중앙은행이 공개시장에서 국채를 '매각(sells)'하는 것은 긴축적 통화정책입니다.", "중앙은행은 시중은행에 국채를 파는 대가로, 시중은행의 지급준비금을 회수합니다. 이로 인해 은행 보유 지급준비금(Bank reserves)이 감소합니다.", "지급준비금이 감소하면 은행의 대출 여력이 줄어들어 통화 공급(Money supply)이 감소합니다.", "통화 공급이 감소하면, 화폐 시장에서 명목 이자율(Nominal interest rates)이 상승합니다.", "공개시장에서 국채 공급이 증가하므로 채권 가격(Price of bonds)은 하락합니다."], distractors: ["A, C: 은행 지급준비금과 통화 공급은 감소합니다.", "B: 채권 가격은 하락합니다.", "E: 지급준비율은 중앙은행이 별도로 결정하는 정책 도구이며, 공개시장조작과 직접 연동되지 않습니다."], summary: "중앙은행의 공개시장매각은 시중 통화량을 줄여 이자율을 상승시키는 대표적인 긴축 통화정책 수단입니다." },
      en: { concept: "🏦 Contractionary Monetary Policy: Open Market Sales", steps: ["When the central bank 'sells' government bonds on the open market, it is conducting contractionary monetary policy.", "The central bank receives payment from commercial banks for the bonds, which reduces the banks' reserves. Thus, bank reserves decrease.", "A decrease in reserves reduces the banks' ability to lend, causing the money supply to decrease.", "A decrease in the money supply leads to an increase in the nominal interest rate in the money market.", "The supply of bonds in the open market increases, so the price of bonds decreases."], distractors: ["A, C: Bank reserves and the money supply decrease.", "B: The price of bonds decreases.", "E: The required reserve ratio is a separate policy tool set by the central bank and is not directly changed by open market operations."], summary: "The central bank's sale of government bonds is a primary tool of contractionary monetary policy, designed to reduce the money supply and raise interest rates." }
    }, tags: ['통화정책', '공개시장조작', '이자율'], difficulty: '중간'
  },
  {
    id: "2013-08", year: 2013, questionNumber: 8,
    questionText: "If one-fourth of a nation's wheat crop is destroyed by a flood in a given season, then the price of wheat and the quantity sold will change in the short run in which of the following ways?",
    answerOptions: [ { text: "Price: Decrease, Quantity Sold: No change", isCorrect: false }, { text: "Price: Decrease, Quantity Sold: Increase", isCorrect: false }, { text: "Price: Increase, Quantity Sold: Decrease", isCorrect: true }, { text: "Price: Increase, Quantity Sold: Increase", isCorrect: false }, { text: "Price: No change, Quantity Sold: Increase", isCorrect: false }, ],
    explanation: {
      ko: { concept: "📉 공급 감소와 시장 균형의 변화", steps: ["밀 수확량의 파괴는 밀의 공급(supply) 감소를 의미합니다.", "수요-공급 그래프에서 공급 곡선이 왼쪽으로 이동합니다.", "수요 곡선이 그대로인 상태에서 공급 곡선이 왼쪽으로 이동하면, 새로운 균형점은 기존 균형점보다 위쪽, 그리고 왼쪽에 위치하게 됩니다.", "이는 균형 가격(Price)은 상승하고, 균형 거래량(Quantity Sold)은 감소함을 의미합니다."], distractors: ["다른 모든 선택지는 공급 감소의 효과를 잘못 설명하고 있습니다."], summary: "다른 조건이 일정할 때, 한 재화의 공급이 감소하면 그 재화의 가격은 상승하고 거래량은 감소합니다." },
      en: { concept: "📉 Decrease in Supply and Change in Market Equilibrium", steps: ["The destruction of the wheat crop means a decrease in the supply of wheat.", "On a supply-and-demand graph, the supply curve shifts to the left.", "With the demand curve remaining unchanged, a leftward shift of the supply curve results in a new equilibrium point that is higher and to the left of the original equilibrium.", "This means the equilibrium price will increase, and the equilibrium quantity sold will decrease."], distractors: ["All other options incorrectly describe the effects of a decrease in supply."], summary: "Ceteris paribus, a decrease in the supply of a good will lead to an increase in its price and a decrease in the quantity sold." }
    }, tags: ['수요와 공급', '시장균형'], difficulty: '쉬움'
  },
  {
    id: "2013-09", year: 2013, questionNumber: 9,
    questionText: "Which of the following is a determinant of the amount of money the commercial banking system can create?",
    answerOptions: [ { text: "The marginal propensity to consume", isCorrect: false }, { text: "The marginal propensity to save", isCorrect: false }, { text: "The total number of banks", isCorrect: false }, { text: "The size of the federal debt", isCorrect: false }, { text: "The reserve requirement", isCorrect: true }, ],
    explanation: {
      ko: { concept: "💸 신용창조와 지급준비율", steps: ["상업은행 시스템은 예금의 일부만 지급준비금으로 남기고 나머지를 대출하는 과정을 반복하며 통화를 창출합니다. 이를 신용창조(money creation)라고 합니다.", "이 과정에서 창출될 수 있는 통화의 최대량은 통화승수(money multiplier)에 의해 결정됩니다.", "통화승수의 공식은 '1 / 지급준비율(Reserve Requirement)' 입니다.", "따라서, 중앙은행이 설정하는 지급준비율이 은행 시스템 전체의 신용창조 규모를 결정하는 핵심적인 요인입니다."], distractors: ["A, B: 한계소비성향과 한계저축성향은 재정정책의 승수효과와 관련이 있습니다.", "C: 은행의 총 수가 아니라, 시스템 전체의 지급준비금과 지급준비율이 중요합니다.", "D: 연방 정부 부채는 재정정책과 관련이 있습니다."], summary: "지급준비율은 은행이 예금 중 의무적으로 보유해야 하는 비율로, 이 비율이 낮을수록 은행은 더 많이 대출할 수 있어 신용창조 규모가 커집니다." },
      en: { concept: "💸 Money Creation and the Reserve Requirement", steps: ["The commercial banking system creates money by holding a fraction of deposits as reserves and lending out the rest. This process is called money creation.", "The maximum amount of money that can be created through this process is determined by the money multiplier.", "The formula for the money multiplier is '1 / Reserve Requirement'.", "Therefore, the reserve requirement set by the central bank is the key determinant of the amount of money the banking system can create."], distractors: ["A, B: The marginal propensity to consume and save are related to the fiscal policy multiplier effect.", "C: The key factors are the system's total reserves and the reserve ratio, not the number of banks.", "D: The federal debt is related to fiscal policy."], summary: "The reserve requirement is the fraction of deposits that banks are required to hold. The lower the ratio, the more banks can lend out, leading to a larger potential for money creation." }
    }, tags: ['통화정책', '신용창조'], difficulty: '쉬움'
  },
  {
    id: "2013-10", year: 2013, questionNumber: 10,
    questionText: "A discretionary fiscal policy action to reduce inflation in the short run would be to",
    answerOptions: [ { text: "increase transfer payments to those on fixed incomes", isCorrect: false }, { text: "increase taxes or decrease government spending", isCorrect: true }, { text: "decrease taxes or increase government spending", isCorrect: false }, { text: "increase taxes and the money supply", isCorrect: false }, { text: "decrease taxes and interest rates", isCorrect: false }, ],
    explanation: {
      ko: { concept: "🔥 인플레이션 억제를 위한 긴축 재정정책", steps: ["인플레이션은 총수요가 총공급을 초과하여 발생하는 경우가 많습니다 (수요견인 인플레이션).", "인플레이션을 줄이기 위해서는 총수요를 감소시키는 긴축 재정정책(contractionary fiscal policy)이 필요합니다.", "긴축 재정정책의 수단은 '세금 인상(increase taxes)' 또는 '정부 지출 감소(decrease government spending)'입니다.", "이러한 정책들은 가계의 가처분소득이나 정부의 직접적인 지출을 줄여 총수요를 억제하는 효과를 가집니다."], distractors: ["A, C: 이전지출 증가, 세금 감면, 정부지출 증가는 모두 총수요를 늘리는 확장 재정정책으로, 인플레이션을 악화시킵니다.", "D, E: 통화 공급이나 이자율 조정은 통화정책의 영역입니다."], summary: "인플레이션을 억제하기 위한 재량적 재정정책은 세금을 인상하거나 정부 지출을 줄여 총수요를 감소시키는 것입니다." },
      en: { concept: "🔥 Contractionary Fiscal Policy to Reduce Inflation", steps: ["Inflation often occurs when aggregate demand exceeds aggregate supply (demand-pull inflation).", "To reduce inflation, a contractionary fiscal policy is needed to decrease aggregate demand.", "The tools of contractionary fiscal policy are to 'increase taxes' or 'decrease government spending'.", "These policies work by reducing households' disposable income or by directly reducing spending, thereby curbing aggregate demand."], distractors: ["A, C: Increasing transfer payments, decreasing taxes, or increasing government spending are all expansionary fiscal policies that would worsen inflation.", "D, E: Adjusting the money supply or interest rates falls under the domain of monetary policy."], summary: "A discretionary fiscal policy action to reduce inflation involves decreasing aggregate demand by either increasing taxes or decreasing government spending." }
    }, tags: ['재정정책', '인플레이션', '경기안정화정책'], difficulty: '쉬움'
  },
  // Questions 11-20
  {
    id: "2013-11", year: 2013, questionNumber: 11,
    questionText: "The money demanded for the purpose of purchasing goods and services is known as",
    answerOptions: [ { text: "an asset demand", isCorrect: false }, { text: "a derived demand", isCorrect: false }, { text: "excess reserves", isCorrect: false }, { text: "a transactions demand", isCorrect: true }, { text: "balance of payments", isCorrect: false } ],
    explanation: {
      ko: { concept: "💰 화폐 수요의 동기", steps: ["화폐 수요는 크게 세 가지 동기로 나뉩니다: 거래적 동기, 예비적 동기, 투기적 동기.", "상품과 서비스를 구매하기 위해 화폐를 보유하려는 동기는 '거래적 동기'에 해당하며, 이를 '거래적 수요(transactions demand)'라고 합니다."], distractors: ["A: 자산 수요(asset demand)는 이자율 변화에 따른 자본 이득을 얻기 위해 화폐를 보유하려는 투기적 동기입니다.", "B: 파생 수요는 다른 재화나 서비스의 수요로부터 발생하는 수요입니다.", "C: 초과지급준비금은 은행이 보유한 지급준비금 중 법정지급준비금을 초과하는 부분입니다.", "E: 국제수지는 한 국가의 모든 국제 거래를 기록한 것입니다."], summary: "재화와 용역을 구매하기 위한 화폐 수요를 거래적 수요(transactions demand)라고 합니다." },
      en: { concept: "💰 Motives for Money Demand", steps: ["The demand for money is typically broken down into three motives: transactions, precautionary, and speculative.", "The motive for holding money to purchase goods and services is the 'transactions motive', known as 'transactions demand'."], distractors: ["A: Asset demand is the speculative motive for holding money to gain from changes in interest rates.", "B: Derived demand is demand that arises from the demand for another good or service.", "C: Excess reserves are bank reserves held above the required amount.", "E: Balance of payments is a record of all international transactions of a country."], summary: "The demand for money for the purpose of purchasing goods and services is known as transactions demand." }
    }, tags: ['화폐 시장', '화폐 수요'], difficulty: '쉬움'
  },
  {
    id: "2013-12", year: 2013, questionNumber: 12,
    questionText: "Which of the following will increase the United States trade deficit?",
    answerOptions: [ { text: "United States firms buying technologically advanced computers from Germany", isCorrect: true }, { text: "European citizens traveling in large numbers to the United States", isCorrect: false }, { text: "A United States company being hired to build a production plant in another country", isCorrect: false }, { text: "The United States dollar depreciating in the foreign exchange market", isCorrect: false }, { text: "The United States selling one million tons of wheat to China", isCorrect: false } ],
    explanation: {
      ko: { concept: "🌍 무역수지 적자", steps: ["무역수지는 (수출 - 수입)으로 계산됩니다. 무역수지 적자는 수입이 수출보다 많은 상태를 의미합니다.", "미국 기업이 독일로부터 컴퓨터를 '구매'하는 것은 미국의 '수입'을 증가시킵니다.", "수입이 증가하면 무역수지 적자가 확대됩니다."], distractors: ["B: 유럽 시민의 미국 여행은 서비스 수출에 해당하여 무역수지를 개선시킵니다.", "C: 미국 회사가 해외에 공장을 짓는 것은 금융계정(financial account)에 기록될 수 있습니다.", "D: 달러 가치 하락(depreciation)은 미국 상품의 가격 경쟁력을 높여 수출을 늘리고 수입을 줄여 무역수지를 개선시킵니다.", "E: 미국이 중국에 밀을 판매하는 것은 '수출'이므로 무역수지를 개선시킵니다."], summary: "무역수지 적자는 수입이 수출을 초과할 때 발생하며, 외국 상품의 구매(수입)는 무역수지 적자를 증가시킵니다." },
      en: { concept: "🌍 Trade Deficit", steps: ["The trade balance is calculated as (Exports - Imports). A trade deficit means imports are greater than exports.", "United States firms 'buying' computers from Germany increases U.S. 'imports'.", "An increase in imports widens the trade deficit."], distractors: ["B: European citizens traveling to the U.S. is a service export, improving the trade balance.", "C: A U.S. company building a plant abroad could be recorded in the financial account.", "D: Dollar depreciation makes U.S. goods cheaper, increasing exports and decreasing imports, which improves the trade balance.", "E: The U.S. selling wheat to China is an 'export', improving the trade balance."], summary: "A trade deficit occurs when imports exceed exports. Buying foreign goods (imports) increases the trade deficit." }
    }, tags: ['국제무역', '환율'], difficulty: '쉬움'
  },
  {
    id: "2013-13", year: 2013, questionNumber: 13,
    questionText: "If producing each additional unit of good X required giving up ever-increasing amounts of good Y, the production possibilities curve between X and Y would be",
    answerOptions: [ { text: "bowed outward", isCorrect: true }, { text: "bowed inward", isCorrect: false }, { text: "a straight line", isCorrect: false }, { text: "horizontal", isCorrect: false }, { text: "upward sloping", isCorrect: false } ],
    explanation: {
      ko: { concept: "📈 기회비용 체증의 법칙", steps: ["X재 한 단위를 추가로 생산하기 위해 포기해야 하는 Y재의 양이 점점 늘어난다는 것은 '기회비용 체증의 법칙'을 의미합니다.", "기회비용이 체증하는 이유는 자원이 특정 재화 생산에 더 특화되어 있기 때문입니다.", "기회비용 체증의 법칙이 적용될 때, 생산가능곡선(PPC)은 원점에 대해 오목한(바깥쪽으로 볼록한, bowed outward) 형태를 가집니다."], distractors: ["B: 안쪽으로 볼록한 PPC는 기회비용 체감을 의미하며 비현실적입니다.", "C: 직선 PPC는 기회비용이 일정함을 의미합니다.", "D, E: PPC는 우하향하는 형태를 가집니다."], summary: "기회비용 체증의 법칙은 생산가능곡선이 원점에 대해 오목한(bowed outward) 형태로 나타나는 원인입니다." },
      en: { concept: "📈 Law of Increasing Opportunity Cost", steps: ["The fact that producing an additional unit of good X requires giving up ever-increasing amounts of good Y describes the 'law of increasing opportunity cost'.", "Increasing opportunity cost occurs because resources are not perfectly adaptable to producing both goods.", "When the law of increasing opportunity cost applies, the production possibilities curve (PPC) is 'bowed outward' (concave to the origin)."], distractors: ["B: A bowed-inward PPC implies decreasing opportunity cost, which is unrealistic.", "C: A straight-line PPC implies constant opportunity cost.", "D, E: A PPC is downward sloping."], summary: "The law of increasing opportunity cost is the reason the production possibilities curve is bowed outward." }
    }, tags: ['기본 경제 개념', '생산가능곡선', '기회비용'], difficulty: '쉬움'
  },
  {
    id: "2013-14", year: 2013, questionNumber: 14,
    questionText: "The unemployment rate is calculated as",
    answerOptions: [ { text: "the number of people not working divided by the population", isCorrect: false }, { text: "the number of people not working divided by the number of people working both full-time and part-time", isCorrect: false }, { text: "the number of people working part-time but actively seeking full-time employment divided by the number of people in the labor force", isCorrect: false }, { text: "the number of people not working but actively seeking employment divided by the number of people in the labor force", isCorrect: true }, { text: "the number of people in the labor force divided by the population", isCorrect: false } ],
    explanation: {
      ko: { concept: "🧑‍💼 실업률의 정의", steps: ["실업률은 경제활동인구 중에서 실업자가 차지하는 비율을 나타냅니다.", "실업률(%) = (실업자 수 / 경제활동인구 수) * 100", "실업자(unemployed)는 '일하고 있지 않지만 적극적으로 구직 활동을 하는 사람'입니다.", "경제활동인구(labor force)는 '취업자 수 + 실업자 수'입니다."], distractors: ["A, E: 전체 인구가 아닌 경제활동인구를 분모로 사용합니다.", "B: 취업자 수가 아닌 경제활동인구를 분모로 사용합니다.", "C: 파트타임 근로자는 실업자가 아닌 취업자로 분류됩니다."], summary: "실업률은 경제활동인구 중 구직 의사가 있는 실업자의 비율을 나타내는 지표입니다." },
      en: { concept: "🧑‍💼 Definition of Unemployment Rate", steps: ["The unemployment rate measures the percentage of the labor force that is unemployed.", "Unemployment Rate (%) = (Number of Unemployed / Labor Force) * 100", "The 'unemployed' are people who are 'not working but actively seeking employment'.", "The 'labor force' is the sum of the 'employed + unemployed'."], distractors: ["A, E: The denominator is the labor force, not the total population.", "B: The denominator is the labor force, not the number of employed people.", "C: Part-time workers are classified as employed, not unemployed."], summary: "The unemployment rate is the percentage of the labor force that is jobless but actively looking for work." }
    }, tags: ['실업', '경제지표'], difficulty: '쉬움'
  },
  {
    id: "2013-15", year: 2013, questionNumber: 15,
    questionText: "Crowding out is most likely to occur with which of the following changes?",
    answerOptions: [ { text: "Decrease in government spending", isCorrect: false }, { text: "Increase in budget surplus", isCorrect: false }, { text: "Increase in budget deficit", isCorrect: true }, { text: "Decrease in the real interest rate", isCorrect: false }, { text: "Decrease in trade deficit", isCorrect: false } ],
    explanation: {
      ko: { concept: " crowding-out effect", steps: ["'밀어내기 효과(Crowding out)'는 정부의 재정적자 확대가 이자율을 상승시켜 민간 투자를 위축시키는 현상입니다.", "정부의 재정적자(budget deficit)가 증가하면, 정부는 자금 조달을 위해 대부자금 시장에서 차입을 늘립니다.", "이는 대부자금에 대한 수요를 증가시켜 실질 이자율을 상승시킵니다.", "이자율이 상승하면 기업의 투자 비용이 증가하여 민간 투자가 감소합니다."], distractors: ["A, B: 정부지출 감소나 재정흑자 증가는 오히려 이자율을 하락시켜 민간 투자를 촉진하는 '밀어넣기 효과(crowding-in)'를 유발할 수 있습니다.", "D: 이자율 하락은 투자를 증가시킵니다."], summary: "밀어내기 효과는 정부의 확장적 재정정책(재정적자 증가)이 이자율 상승을 통해 민간 투자를 감소시키는 부작용을 의미합니다." },
      en: { concept: "Crowding-Out Effect", steps: ["'Crowding out' is the phenomenon where increased government budget deficits lead to higher interest rates, which in turn reduces private investment.", "An increase in the government budget deficit means the government must borrow more from the loanable funds market.", "This increases the demand for loanable funds, causing the real interest rate to rise.", "Higher interest rates increase the cost of borrowing for firms, leading to a decrease in private investment."], distractors: ["A, B: A decrease in government spending or an increase in a budget surplus could lead to 'crowding in' by lowering interest rates and stimulating investment.", "D: A decrease in the real interest rate would increase investment."], summary: "The crowding-out effect refers to the side effect of expansionary fiscal policy (increased budget deficit) where rising interest rates reduce private investment." }
    }, tags: ['재정정책', '이자율', '대부자금시장'], difficulty: '중간'
  },
  {
    id: "2013-16", year: 2013, questionNumber: 16,
    questionText: "A change in which of the following can affect the long-run economic growth of a country?\n\nI. The quantity and quality of a country's labor force\nII. Technology\nIII. Spending on capital goods",
    answerOptions: [ { text: "I only", isCorrect: false }, { text: "III only", isCorrect: false }, { text: "I and II only", isCorrect: false }, { text: "II and III only", isCorrect: false }, { text: "I, II, and III", isCorrect: true } ],
    explanation: {
      ko: { concept: "🌱 장기 경제 성장 요인", steps: ["장기 경제 성장은 한 국가의 생산 능력이 지속적으로 확대되는 것을 의미하며, 이는 장기 총공급(LRAS) 곡선의 오른쪽 이동으로 나타납니다.", "LRAS를 이동시키는 요인은 생산요소의 양과 질, 그리고 기술 수준입니다.", "I. 노동력의 양과 질(인적 자본) 증가는 생산 능력을 향상시킵니다.", "II. 기술 진보는 동일한 자원으로 더 많은 생산을 가능하게 합니다.", "III. 자본재(기계, 설비)에 대한 지출 증가는 물적 자본 스톡을 늘려 생산 능력을 향상시킵니다.", "따라서 세 가지 모두 장기 경제 성장에 영향을 미칩니다."], distractors: [], summary: "장기 경제 성장은 노동, 자본(물적, 인적), 기술과 같은 생산 능력 자체를 결정하는 요인들에 의해 좌우됩니다." },
      en: { concept: "🌱 Factors of Long-Run Economic Growth", steps: ["Long-run economic growth refers to the sustained expansion of a country's productive capacity, represented by a rightward shift of the Long-Run Aggregate Supply (LRAS) curve.", "Factors that shift the LRAS are changes in the quantity or quality of factors of production and technology.", "I. An increase in the quantity and quality (human capital) of the labor force enhances productive capacity.", "II. Technological advancement allows for more output with the same resources.", "III. Increased spending on capital goods (machinery, equipment) increases the physical capital stock, enhancing productive capacity.", "Therefore, all three affect long-run economic growth."], distractors: [], summary: "Long-run economic growth is determined by factors that affect productive capacity itself, such as labor, capital (physical and human), and technology." }
    }, tags: ['경제성장', '총공급'], difficulty: '쉬움'
  },
  {
    id: "2013-17", year: 2013, questionNumber: 17,
    questionText: "With an upward-sloping aggregate supply curve, an increase in the money supply will affect the price level and real gross domestic product (GDP) in the short run in which of the following ways?",
    answerOptions: [ { text: "Price Level: Decrease, Real GDP: Decrease", isCorrect: false }, { text: "Price Level: Decrease, Real GDP: Increase", isCorrect: false }, { text: "Price Level: Increase, Real GDP: Decrease", isCorrect: false }, { text: "Price Level: Increase, Real GDP: Increase", isCorrect: true }, { text: "Price Level: No change, Real GDP: No change", isCorrect: false } ],
    explanation: {
      ko: { concept: "🏦 확장적 통화정책의 단기 효과", steps: ["통화 공급 증가는 확장적 통화정책입니다.", "통화 공급이 증가하면 명목 이자율이 하락합니다.", "이자율이 하락하면 이자율에 민감한 소비와 투자가 증가하여 총수요(AD)가 증가합니다.", "총수요 곡선이 오른쪽으로 이동합니다.", "우상향하는 단기 총공급(SRAS) 곡선을 따라 AD 곡선이 오른쪽으로 이동하면, 균형점은 더 높은 물가 수준과 더 높은 실질 GDP 수준으로 이동합니다."], distractors: ["다른 모든 선택지는 총수요 증가의 효과를 잘못 설명하고 있습니다."], summary: "확장적 통화정책은 단기적으로 총수요를 증가시켜 물가 수준과 실질 GDP를 모두 상승시킵니다." },
      en: { concept: "🏦 Short-Run Effects of Expansionary Monetary Policy", steps: ["An increase in the money supply is an expansionary monetary policy.", "This leads to a decrease in the nominal interest rate.", "A lower interest rate stimulates interest-sensitive consumption and investment, causing aggregate demand (AD) to increase.", "The AD curve shifts to the right.", "With an upward-sloping Short-Run Aggregate Supply (SRAS) curve, a rightward shift of the AD curve moves the equilibrium to a point with a higher price level and higher real GDP."], distractors: ["All other options incorrectly describe the effects of an increase in aggregate demand."], summary: "In the short run, expansionary monetary policy increases aggregate demand, leading to a rise in both the price level and real GDP." }
    }, tags: ['통화정책', '총수요', 'AD-AS 모형'], difficulty: '쉬움'
  },
  {
    id: "2013-18", year: 2013, questionNumber: 18,
    questionText: "Assume that with a proportional tax system, the government always sets the tax rate at a level that yields a balanced budget at full employment. Which of the following is necessarily true?",
    answerOptions: [ { text: "The government budget will balance every year.", isCorrect: false }, { text: "The government budget will be in deficit over the business cycle.", isCorrect: false }, { text: "The national debt will increase in any year the economy operates below full employment.", isCorrect: true }, { text: "Crowding out of private investment will occur whenever the economy operates at full employment.", isCorrect: false }, { text: "The tax system will be destabilizing.", isCorrect: false } ],
    explanation: {
      ko: { concept: "⚖️ 자동안정화장치와 재정", steps: ["완전고용 상태에서 균형재정을 달성하도록 세율이 설정되어 있습니다.", "경제가 완전고용 수준 이하(경기 침체)에서 운영되면, 국민 소득이 감소합니다.", "비례세 시스템 하에서 소득이 감소하면 세수(Tax Revenue)도 감소합니다.", "정부 지출이 일정하다고 가정할 때, 세수가 감소하면 재정적자가 발생하고, 이는 국가 부채를 증가시킵니다."], distractors: ["A: 경기가 변동하므로 매년 예산이 균형을 이루지는 않습니다.", "B: 경기 침체 시에는 적자, 호황 시에는 흑자가 발생할 수 있으므로 전체 비즈니스 사이클에 걸쳐 적자라고 단정할 수 없습니다.", "D: 완전고용에서 균형재정이므로 정부 차입이 없어 밀어내기 효과가 발생하지 않습니다.", "E: 비례세는 소득이 증가하면 세수가 늘고, 소득이 감소하면 세수가 주는 자동안정화장치 역할을 하므로, 불안정화시킨다고 볼 수 없습니다."], summary: "완전고용 균형재정을 목표로 하는 조세제도 하에서, 경제가 완전고용보다 낮은 수준에서 운영되면 세수 감소로 인해 재정적자가 발생하고 국가 부채가 증가합니다." },
      en: { concept: "⚖️ Automatic Stabilizers and the Budget", steps: ["The tax rate is set to achieve a balanced budget at full employment.", "When the economy operates below full employment (in a recession), national income decreases.", "Under a proportional tax system, a decrease in income leads to a decrease in tax revenue.", "Assuming government spending is constant, the decrease in tax revenue will create a budget deficit, which increases the national debt."], distractors: ["A: The budget will not balance every year due to business cycles.", "B: It will be in deficit during recessions and potentially in surplus during booms, so we cannot say it will be in deficit over the entire cycle.", "D: At full employment, the budget is balanced, so there is no government borrowing to cause crowding out.", "E: A proportional tax system acts as an automatic stabilizer, it is not destabilizing."], summary: "Under a tax system designed for a balanced budget at full employment, a recession (operating below full employment) will cause a budget deficit and an increase in the national debt due to lower tax revenues." }
    }, tags: ['재정정책', '자동안정화장치', '국가부채'], difficulty: '어려움'
  },
  {
    id: "2013-19", year: 2013, questionNumber: 19,
    questionText: "A bank has $800 million in demand deposits and $100 million in reserves. If the reserve requirement is 10 percent, the bank's excess reserves equal",
    answerOptions: [ { text: "$10 million", isCorrect: false }, { text: "$20 million", isCorrect: true }, { text: "$80 million", isCorrect: false }, { text: "$100 million", isCorrect: false }, { text: "$200 million", isCorrect: false } ],
    explanation: {
      ko: { concept: "🏦 초과지급준비금 계산", steps: ["법정지급준비금(Required Reserves) = 요구불예금(Demand Deposits) × 법정지급준비율(Reserve Requirement)", "법정지급준비금 = $800 million × 0.10 = $80 million", "초과지급준비금(Excess Reserves) = 실제지급준비금(Actual Reserves) - 법정지급준비금(Required Reserves)", "초과지급준비금 = $100 million - $80 million = $20 million"], distractors: ["C는 법정지급준비금의 액수입니다.", "다른 선택지들은 계산이 틀렸습니다."], summary: "초과지급준비금은 은행이 법적으로 보유해야 하는 금액을 초과하여 보유하고 있는 지급준비금으로, 대출 가능한 자금을 의미합니다." },
      en: { concept: "🏦 Calculating Excess Reserves", steps: ["Required Reserves = Demand Deposits × Reserve Requirement", "Required Reserves = $800 million × 0.10 = $80 million", "Excess Reserves = Actual Reserves - Required Reserves", "Excess Reserves = $100 million - $80 million = $20 million"], distractors: ["C is the amount of required reserves.", "The other options are incorrect calculations."], summary: "Excess reserves are the reserves held by a bank beyond what is legally required, representing the funds available for lending." }
    }, tags: ['통화정책', '지급준비금', '은행'], difficulty: '쉬움'
  },
  {
    id: "2013-20", year: 2013, questionNumber: 20,
    questionText: "Which of the following describes a typical business cycle in the correct sequence?",
    answerOptions: [ { text: "Peak, trough, recession, and expansion", isCorrect: false }, { text: "Peak, trough, expansion, and recession", isCorrect: false }, { text: "Peak, recession, trough, and expansion", isCorrect: true }, { text: "Peak, recession, expansion, and trough", isCorrect: false }, { text: "Peak, expansion, trough, and recession", isCorrect: false } ],
    explanation: {
      ko: { concept: "🔄 경기 순환의 국면", steps: ["경기 순환은 경제 활동 수준이 주기적으로 상승하고 하강하는 현상을 말합니다.", "일반적인 순서는 다음과 같습니다:", "1. 정점(Peak): 경제 활동이 최고조에 달한 상태.", "2. 후퇴/침체(Recession/Contraction): 정점 이후 경제 활동이 위축되는 국면.", "3. 저점(Trough): 경제 활동이 최저점에 도달한 상태.", "4. 확장/회복(Expansion/Recovery): 저점 이후 경제 활동이 다시 활발해지는 국면. 이 확장이 다시 정점으로 이어집니다."], distractors: ["다른 선택지들은 경기 순환의 순서를 잘못 나열하고 있습니다."], summary: "경기 순환은 정점(peak), 후퇴(recession), 저점(trough), 확장(expansion)의 순서로 반복됩니다." },
      en: { concept: "🔄 Phases of the Business Cycle", steps: ["The business cycle refers to the periodic fluctuation of economic activity.", "The typical sequence is as follows:", "1. Peak: The highest point of economic activity.", "2. Recession/Contraction: The period of economic decline following a peak.", "3. Trough: The lowest point of economic activity.", "4. Expansion/Recovery: The period of economic growth following a trough, leading back to a new peak."], distractors: ["The other options list the phases of the business cycle in an incorrect order."], summary: "The business cycle repeats in the order of peak, recession, trough, and expansion." }
    }, tags: ['경기변동', '기본 경제 개념'], difficulty: '쉬움'
  },
  // Questions 21-30
  {
    id: "2013-21", year: 2013, questionNumber: 21,
    questionText: "If the international value of the United States dollar depreciates in comparison with the Japanese yen, which of the following is most likely to occur?",
    answerOptions: [ { text: "United States exports to Japan will increase.", isCorrect: true }, { text: "The United States government will increase the tariff on Japanese imports.", isCorrect: false }, { text: "The United States balance-of-trade deficit with Japan will become even larger.", isCorrect: false }, { text: "United States tourists can be expected to visit Japan in greater numbers.", isCorrect: false }, { text: "Trade between the United States and Japan will not be affected.", isCorrect: false } ],
    explanation: {
      ko: { concept: "💵 환율 변동과 순수출", steps: ["미국 달러 가치가 일본 엔화에 비해 '하락(depreciates)'하면, 일본 소비자 입장에서 미국 상품 가격이 더 저렴해집니다.", "따라서 일본의 미국 상품에 대한 수요가 증가하여, 미국의 대일 수출(United States exports to Japan)이 증가할 것입니다.", "반대로 미국 소비자 입장에서 일본 상품 가격은 더 비싸지므로, 미국의 일본 상품 수입은 감소할 것입니다."], distractors: ["C: 수출 증가와 수입 감소는 무역수지 적자를 줄이는 방향으로 작용합니다.", "D: 달러 가치가 하락하면 미국 관광객의 일본 여행 경비가 더 비싸지므로, 일본 방문은 줄어들 것입니다."], summary: "자국 통화의 가치 하락(환율 상승)은 수출품의 가격 경쟁력을 높여 수출을 증가시키고, 수입품 가격을 높여 수입을 감소시킵니다." },
      en: { concept: "💵 Exchange Rates and Net Exports", steps: ["When the U.S. dollar 'depreciates' relative to the Japanese yen, U.S. goods become cheaper for Japanese consumers.", "This will increase Japan's demand for U.S. goods, leading to an increase in United States exports to Japan.", "Conversely, Japanese goods become more expensive for U.S. consumers, which will decrease U.S. imports from Japan."], distractors: ["C: Increased exports and decreased imports will reduce the trade deficit.", "D: With a weaker dollar, it becomes more expensive for U.S. tourists to travel to Japan, so they would visit in smaller numbers."], summary: "A depreciation of a country's currency makes its exports cheaper and its imports more expensive, leading to an increase in exports and a decrease in imports." }
    }, tags: ['환율', '국제무역'], difficulty: '중간'
  },
  {
    id: "2013-22", year: 2013, questionNumber: 22,
    questionText: "Expansionary monetary policy will most likely cause interest rates and investment to change in which of the following ways in the short run?",
    answerOptions: [ { text: "Interest Rates: Increase, Investment: Increase", isCorrect: false }, { text: "Interest Rates: Increase, Investment: Decrease", isCorrect: false }, { text: "Interest Rates: Decrease, Investment: Increase", isCorrect: true }, { text: "Interest Rates: Decrease, Investment: Decrease", isCorrect: false }, { text: "Interest Rates: No change, Investment: Increase", isCorrect: false } ],
    explanation: {
      ko: { concept: "🏦 확장적 통화정책의 파급 경로", steps: ["확장적 통화정책은 중앙은행이 통화 공급을 늘리는 것입니다.", "통화 공급이 증가하면 화폐 시장에서 명목 이자율(Interest Rates)이 하락합니다.", "이자율 하락은 기업의 차입 비용을 낮추어 투자(Investment)를 촉진합니다."], distractors: ["다른 모든 선택지는 확장적 통화정책의 효과를 잘못 설명하고 있습니다."], summary: "확장적 통화정책은 이자율을 낮추고 투자를 증가시켜 총수요를 확대하는 것을 목표로 합니다." },
      en: { concept: "🏦 Transmission Mechanism of Expansionary Monetary Policy", steps: ["Expansionary monetary policy is when the central bank increases the money supply.", "An increase in the money supply causes the nominal interest rate to decrease in the money market.", "Lower interest rates reduce the cost of borrowing for firms, which stimulates investment spending."], distractors: ["All other options incorrectly describe the effects of expansionary monetary policy."], summary: "Expansionary monetary policy aims to boost aggregate demand by lowering interest rates and increasing investment." }
    }, tags: ['통화정책', '이자율', '투자'], difficulty: '쉬움'
  },
  {
    id: "2013-23", year: 2013, questionNumber: 23,
    questionText: "The value of which of the following would be included in the United States gross domestic product?",
    answerOptions: [ { text: "Time spent volunteering at a local hospital", isCorrect: false }, { text: "A United States savings bond received as a birthday gift", isCorrect: false }, { text: "A movie ticket purchased at a local theater", isCorrect: true }, { text: "A new handbag made in Italy by a United States firm", isCorrect: false }, { text: "A used car sold at the same price paid for it", isCorrect: false } ],
    explanation: {
      ko: { concept: "📈 GDP의 정의와 측정", steps: ["GDP(국내총생산)는 '일정 기간 동안 한 국가 내에서 생산된 모든 최종 재화와 서비스의 시장 가치'입니다.", "C: 영화 티켓 구매는 최종 서비스(오락)에 대한 소비 지출이므로 GDP에 포함됩니다."], distractors: ["A: 자원봉사는 시장에서 거래되지 않으므로 GDP에 포함되지 않습니다.", "B: 저축 채권은 금융 자산의 이전이며, 생산 활동이 아닙니다.", "D: 이탈리아에서 생산되었으므로 미국의 GDP가 아닌 이탈리아의 GDP에 포함됩니다 (미국의 GNP에는 포함될 수 있습니다).", "E: 중고차 판매는 그 해에 생산된 재화가 아니므로 GDP에 포함되지 않습니다. (중고차 딜러의 중개 수수료는 서비스 제공으로 GDP에 포함됩니다.)"], summary: "GDP는 특정 국가의 영토 내에서 그 해에 생산된 최종 재화와 서비스의 가치만을 포함합니다." },
      en: { concept: "📈 Definition and Measurement of GDP", steps: ["Gross Domestic Product (GDP) is 'the market value of all final goods and services produced within a country in a given period'.", "C: The purchase of a movie ticket is consumption spending on a final service (entertainment) and is therefore included in GDP."], distractors: ["A: Volunteer work is a non-market transaction and is not included in GDP.", "B: A savings bond is a financial transfer, not a productive activity.", "D: Since it was made in Italy, it is included in Italy's GDP, not the U.S. GDP (though it would be in U.S. GNP).", "E: The sale of a used car is not included because it was not produced in the current year. (The commission earned by a used car dealer would be included as a service.)"], summary: "GDP includes only the value of final goods and services produced within a country's borders during the current year." }
    }, tags: ['국민소득', 'GDP'], difficulty: '쉬움'
  },
  {
    id: "2013-24", year: 2013, questionNumber: 24,
    questionText: "Which of the following will lead to an increase in the money supply?",
    answerOptions: [ { text: "A decrease in income tax rates", isCorrect: false }, { text: "A decrease in government spending", isCorrect: false }, { text: "Open-market purchase of securities by the central bank", isCorrect: true }, { text: "Increased borrowing by the federal government by issuing new bonds", isCorrect: false }, { text: "An increase in the discount rate", isCorrect: false } ],
    explanation: {
      ko: { concept: "🏦 통화 공급 증가 요인", steps: ["중앙은행의 공개시장 '매입(purchase)'은 확장적 통화정책입니다.", "중앙은행이 시중은행으로부터 증권을 사들이면, 그 대가로 은행에 지급준비금을 공급합니다.", "은행의 지급준비금이 증가하면 대출 여력이 커져, 신용창조 과정을 통해 통화 공급이 증가합니다."], distractors: ["A, B, D: 세금, 정부지출, 정부 차입은 재정정책과 관련된 변수입니다.", "E: 할인율(discount rate) 인상은 은행이 중앙은행으로부터 돈을 빌리는 비용을 높여, 오히려 통화 공급을 감소시키는 긴축 정책입니다."], summary: "중앙은행의 공개시장매입은 시중은행의 지급준비금을 늘려 통화 공급을 증가시키는 가장 일반적인 방법입니다." },
      en: { concept: "🏦 Factors Increasing Money Supply", steps: ["An open-market 'purchase' of securities by the central bank is an expansionary monetary policy.", "When the central bank buys securities from commercial banks, it pays for them by crediting the banks' reserve accounts.", "This increase in bank reserves expands their ability to lend, which increases the money supply through the process of money creation."], distractors: ["A, B, D: Taxes, government spending, and government borrowing are variables related to fiscal policy.", "E: An increase in the discount rate makes it more expensive for banks to borrow from the central bank, which is a contractionary policy that decreases the money supply."], summary: "An open-market purchase by the central bank is the most common way to increase the money supply by increasing bank reserves." }
    }, tags: ['통화정책', '공개시장조작'], difficulty: '쉬움'
  },
  {
    id: "2013-25", year: 2013, questionNumber: 25,
    questionText: "When an economy is in equilibrium at potential gross domestic product, the actual unemployment rate is",
    answerOptions: [ { text: "equal to the cyclical rate", isCorrect: false }, { text: "greater than the natural rate", isCorrect: false }, { text: "less than the natural rate", isCorrect: false }, { text: "equal to the natural rate", isCorrect: true }, { text: "equal to zero", isCorrect: false } ],
    explanation: {
      ko: { concept: "✨ 완전고용과 자연실업률", steps: ["잠재 GDP(Potential GDP)는 한 경제가 모든 자원을 정상적으로 활용하여 달성할 수 있는 최대 생산 수준으로, '완전고용' 상태에 해당합니다.", "완전고용 상태란 경기적 실업(cyclical unemployment)이 0인 상태를 의미합니다. 즉, 실제 실업률이 자연실업률과 같은 상태입니다.", "자연실업률(natural rate of unemployment)은 마찰적 실업(frictional)과 구조적 실업(structural)의 합으로, 0이 될 수 없습니다."], distractors: ["A: 경기적 실업률은 0입니다.", "B: 실제 실업률 > 자연실업률은 경기 침체 상태를 의미합니다.", "C: 실제 실업률 < 자연실업률은 경기 과열 상태를 의미합니다.", "E: 마찰적, 구조적 실업이 존재하므로 실업률은 0이 될 수 없습니다."], summary: "경제가 잠재 GDP 수준(장기 균형)에 있을 때, 실제 실업률은 자연실업률과 같습니다." },
      en: { concept: "✨ Full Employment and the Natural Rate of Unemployment", steps: ["Potential GDP represents the maximum level of output an economy can sustain at full employment.", "Full employment is defined as a situation where there is zero cyclical unemployment. This means the actual unemployment rate is equal to the natural rate.", "The natural rate of unemployment is the sum of frictional and structural unemployment and is always greater than zero."], distractors: ["A: The cyclical rate of unemployment is zero.", "B: Actual rate > natural rate signifies a recession.", "C: Actual rate < natural rate signifies an inflationary boom.", "E: The unemployment rate cannot be zero due to the existence of frictional and structural unemployment."], summary: "When the economy is at its potential GDP (in long-run equilibrium), the actual rate of unemployment is equal to the natural rate of unemployment." }
    }, tags: ['실업', 'AD-AS 모형', '경제지표'], difficulty: '쉬움'
  },
  {
    id: "2013-26", year: 2013, questionNumber: 26,
    questionText: "Structural unemployment is best described as unemployment arising from",
    answerOptions: [ { text: "the elimination of jobs as a result of technological change", isCorrect: true }, { text: "an increase in the number of workers searching for better-paying jobs", isCorrect: false }, { text: "an increase in the number of jobs demanding unskilled labor", isCorrect: false }, { text: "the temporary reduction of jobs during a downturn in the business cycle", isCorrect: false }, { text: "the reduction in jobs due to seasonal changes in demand", isCorrect: false } ],
    explanation: {
      ko: { concept: "🧑‍🔧 구조적 실업의 원인", steps: ["구조적 실업(Structural unemployment)은 경제 구조의 변화로 인해 발생하는 실업입니다.", "이는 특정 산업의 사양화, 기술 변화, 국제 경쟁 등으로 인해 노동 수요와 공급의 불일치(mismatch)가 발생할 때 생깁니다.", "기술 변화로 인해 특정 직업이 사라지는 것은 구조적 실업의 대표적인 예입니다."], distractors: ["B: 더 나은 직장을 찾는 과정에서 발생하는 실업은 '마찰적 실업'입니다.", "D: 경기 침체기 동안 발생하는 실업은 '경기적 실업'입니다.", "E: 계절적 요인에 의한 실업은 '계절적 실업'이며, 보통 마찰적 실업의 일부로 봅니다."], summary: "구조적 실업은 기술 발전이나 산업 구조의 변화로 인해 노동자의 기술이 더 이상 요구되지 않을 때 발생하는 장기적인 실업입니다." },
      en: { concept: "🧑‍🔧 Causes of Structural Unemployment", steps: ["Structural unemployment arises from fundamental shifts in the economy.", "It occurs when there is a mismatch between the skills that workers have and the skills needed by employers, often due to technological changes, international competition, or shifts in consumer demand.", "The elimination of jobs due to technological change is a classic example of structural unemployment."], distractors: ["B: Unemployment from workers searching for better jobs is 'frictional unemployment'.", "D: Unemployment during a recession is 'cyclical unemployment'.", "E: Unemployment due to seasonal changes is 'seasonal unemployment', often considered a type of frictional unemployment."], summary: "Structural unemployment is long-term unemployment caused by shifts in the economy, such as technological advancements, that make certain workers' skills obsolete." }
    }, tags: ['실업'], difficulty: '쉬움'
  },
  {
    id: "2013-27", year: 2013, questionNumber: 27,
    questionText: "Which of the following would cause both the aggregate demand and aggregate supply curves to shift to the right?",
    answerOptions: [ { text: "A decrease in corporate income taxes", isCorrect: true }, { text: "A decrease in government spending", isCorrect: false }, { text: "A decrease in natural resource prices", isCorrect: false }, { text: "A decrease in the stock market prices", isCorrect: false }, { text: "An increase in the international value of the domestic currency", isCorrect: false } ],
    explanation: {
      ko: { concept: "↔️ 총수요와 총공급 동시 이동", steps: ["총수요(AD)와 총공급(AS) 곡선을 모두 오른쪽으로 이동시키는 요인을 찾아야 합니다.", "법인세(corporate income taxes) 인하는 기업의 세후 이윤을 증가시킵니다.", "이는 기업의 투자(Investment)를 촉진하여 AD 곡선을 오른쪽으로 이동시킵니다.", "동시에, 법인세 인하는 기업의 생산 비용을 줄여주는 효과가 있어 단기 총공급(SRAS) 곡선도 오른쪽으로 이동시킵니다."], distractors: ["B: 정부지출 감소는 AD를 왼쪽으로 이동시킵니다.", "C: 천연자원 가격 하락은 SRAS를 오른쪽으로 이동시키지만 AD에는 직접적인 영향이 적습니다.", "D: 주가 하락은 부의 효과(wealth effect)를 통해 소비를 감소시켜 AD를 왼쪽으로 이동시킵니다.", "E: 통화가치 상승은 순수출을 감소시켜 AD를 왼쪽으로 이동시킵니다."], summary: "법인세 인하는 기업의 투자(총수요 측면)와 생산(총공급 측면)을 동시에 촉진하여 AD와 SRAS 곡선을 모두 오른쪽으로 이동시킬 수 있습니다." },
      en: { concept: "↔️ Simultaneous Shifts in AD and AS", steps: ["We need to find a factor that shifts both the Aggregate Demand (AD) and Aggregate Supply (AS) curves to the right.", "A decrease in corporate income taxes increases firms' after-tax profits.", "This stimulates business investment, which shifts the AD curve to the right.", "At the same time, a tax cut for businesses can be seen as a reduction in production costs, which shifts the Short-Run Aggregate Supply (SRAS) curve to the right."], distractors: ["B: A decrease in government spending shifts AD to the left.", "C: A decrease in resource prices shifts SRAS to the right but has little direct effect on AD.", "D: A decrease in stock prices reduces wealth, shifting AD to the left.", "E: An appreciation of the currency reduces net exports, shifting AD to the left."], summary: "A decrease in corporate income taxes can stimulate both business investment (an AD component) and production (an AS factor), causing both curves to shift to the right." }
    }, tags: ['AD-AS 모형', '재정정책'], difficulty: '어려움'
  },
  {
    id: "2013-28", year: 2013, questionNumber: 28,
    questionText: "Which of the following would directly increase the capital stock of an economy?",
    answerOptions: [ { text: "An individual purchases shares of corporate stock.", isCorrect: false }, { text: "An individual purchases high-risk corporate bonds.", isCorrect: false }, { text: "A business firm expands its production facilities.", isCorrect: true }, { text: "A bank uses cash reserves to purchase short- and long-term government securities.", isCorrect: false }, { text: "The government implements a spending program to cover prescription drugs for Medicare recipients.", isCorrect: false } ],
    explanation: {
      ko: { concept: "🏗️ 자본 스톡의 증가", steps: ["자본 스톡(capital stock)은 한 경제에 존재하는 기계, 장비, 건물 등 물적 자본의 총량을 의미합니다.", "자본 스톡을 직접적으로 증가시키는 행위는 새로운 자본재를 생산하거나 구매하는 '투자(Investment)'입니다.", "기업이 생산 시설을 확장하는 것은 새로운 건물이나 기계를 추가하는 것이므로, 자본 스톡을 직접적으로 증가시킵니다."], distractors: ["A, B: 주식이나 채권 구매는 기존 자산의 소유권을 이전하는 금융 거래이며, 새로운 자본재를 창출하지 않습니다.", "D: 은행이 정부 증권을 구매하는 것도 금융 거래입니다.", "E: 처방약에 대한 정부 지출은 이전지출 또는 정부 소비에 해당하며, 자본 스톡을 직접 늘리지 않습니다."], summary: "자본 스톡은 새로운 기계, 장비, 건물 등을 만드는 실물 투자를 통해 직접적으로 증가합니다." },
      en: { concept: "🏗️ Increasing the Capital Stock", steps: ["The capital stock refers to the total amount of physical capital—machinery, equipment, buildings—in an economy.", "An act that directly increases the capital stock is 'investment', which is the creation or purchase of new capital goods.", "A business firm expanding its production facilities is building new structures and buying new equipment, which directly increases the capital stock."], distractors: ["A, B: Purchasing stocks or bonds is a financial transaction that transfers ownership of existing assets; it does not create new capital goods.", "D: A bank purchasing government securities is also a financial transaction.", "E: Government spending on prescription drugs is a transfer payment or government consumption, not an increase in the capital stock."], summary: "The capital stock is directly increased through physical investment in new machinery, equipment, and buildings." }
    }, tags: ['경제성장', '투자', '자본'], difficulty: '중간'
  },
  {
    id: "2013-29", year: 2013, questionNumber: 29,
    questionText: "The recent popularity of job search Web sites that enable job seekers and potential employers to more efficiently contact each other is most likely to cause",
    answerOptions: [ { text: "a reduction in the labor force participation rate", isCorrect: false }, { text: "a reduction in structural, but not in frictional, unemployment rates", isCorrect: false }, { text: "a reduction in the frictional unemployment rate", isCorrect: true }, { text: "an increase in the overall unemployment rate", isCorrect: false }, { text: "a reduction in cyclical, but not in frictional, unemployment rates", isCorrect: false } ],
    explanation: {
      ko: { concept: "🧑‍💻 마찰적 실업과 정보", steps: ["마찰적 실업(Frictional unemployment)은 노동자들이 자신에게 맞는 직장을 찾는 과정에서 일시적으로 발생하는 실업입니다.", "구직 웹사이트는 구직자와 기업 간의 정보 흐름을 원활하게 하여, 탐색 과정을 더 효율적으로 만듭니다.", "탐색 기간이 단축되면 마찰적 실업률이 감소하게 됩니다."], distractors: ["A: 구직이 쉬워지면 오히려 경제활동참가율이 높아질 수 있습니다.", "B, E: 이 기술은 직업 탐색 과정에 영향을 미치므로 마찰적 실업에 영향을 줍니다. 구조적 실업이나 경기적 실업과는 직접적인 관련이 적습니다.", "D: 전체 실업률은 감소할 것입니다."], summary: "구직자와 구인자 간의 정보 비대칭을 줄이는 기술은 직업 탐색 기간을 단축시켜 마찰적 실업을 감소시킵니다." },
      en: { concept: "🧑‍💻 Frictional Unemployment and Information", steps: ["Frictional unemployment is the temporary unemployment that occurs as workers search for jobs that best suit their skills and tastes.", "Job search websites improve the flow of information between job seekers and employers, making the matching process more efficient.", "A shorter search period leads to a reduction in the frictional unemployment rate."], distractors: ["A: Easier job searching might even increase the labor force participation rate.", "B, E: This technology directly affects the job search process, thus impacting frictional unemployment, not structural or cyclical unemployment.", "D: The overall unemployment rate would decrease."], summary: "Technology that reduces information asymmetry between job seekers and employers reduces the job search time, thereby lowering frictional unemployment." }
    }, tags: ['실업'], difficulty: '쉬움'
  },
  {
    id: "2013-30", year: 2013, questionNumber: 30,
    questionText: "Which of the following is most likely to be caused by an adverse supply shock?",
    answerOptions: [ { text: "Structural unemployment", isCorrect: false }, { text: "Frictional unemployment", isCorrect: false }, { text: "Demand-pull inflation", isCorrect: false }, { text: "Cost-push inflation", isCorrect: true }, { text: "Deflation", isCorrect: false } ],
    explanation: {
      ko: { concept: "⚡ 부정적 공급충격과 스태그플레이션", steps: ["부정적 공급충격(adverse supply shock)은 생산 비용을 급격히 상승시키는 사건을 말합니다. (예: 유가 급등)", "이는 단기 총공급(SRAS) 곡선을 왼쪽으로 이동시킵니다.", "SRAS 곡선이 왼쪽으로 이동하면 물가 수준은 상승하고 실질 GDP는 감소합니다.", "이처럼 비용 상승으로 인해 발생하는 인플레이션을 '비용인상 인플레이션(Cost-push inflation)'이라고 합니다. 경기 침체(GDP 감소)와 인플레이션이 동시에 발생하는 스태그플레이션(stagflation) 상황이 됩니다."], distractors: ["A, B: 실업 유형과는 직접적인 관련이 적습니다.", "C: 수요견인 인플레이션은 총수요 증가로 인해 발생합니다.", "E: 디플레이션은 물가 하락을 의미하며, 공급 충격은 물가 상승을 유발합니다."], summary: "부정적 공급충격은 생산 비용을 증가시켜 비용인상 인플레이션과 경기 침체를 동시에 유발합니다." },
      en: { concept: "⚡ Adverse Supply Shocks and Stagflation", steps: ["An adverse supply shock is an event that sharply increases production costs (e.g., a sudden rise in oil prices).", "This shifts the Short-Run Aggregate Supply (SRAS) curve to the left.", "A leftward shift of the SRAS curve leads to a higher price level and lower real GDP.", "Inflation caused by rising costs is called 'cost-push inflation'. This situation, with both recession (falling GDP) and inflation, is known as stagflation."], distractors: ["A, B: Not directly related to these types of unemployment.", "C: Demand-pull inflation is caused by an increase in aggregate demand.", "E: Deflation is a decrease in the price level; a supply shock causes an increase."], summary: "An adverse supply shock increases production costs, leading to cost-push inflation and a recession simultaneously." }
    }, tags: ['총공급', '인플레이션', 'AD-AS 모형'], difficulty: '쉬움'
  },
  // Questions 31-40
  {
    id: "2013-31", year: 2013, questionNumber: 31,
    questionText: "Which of the following policy combinations could reduce a government deficit without changing aggregate demand?",
    answerOptions: [ { text: "An increase in taxes and a decrease in the money supply", isCorrect: false }, { text: "An increase in taxes and an increase in the money supply", isCorrect: true }, { text: "A decrease in taxes and a decrease in the money supply", isCorrect: false }, { text: "A decrease in government spending and a decrease in the money supply", isCorrect: false }, { text: "An increase in government spending and a decrease in the money supply", isCorrect: false } ],
    explanation: {
      ko: { concept: "🔄 정책 조합(Policy Mix)", steps: ["정부 재정적자를 줄이려면 긴축 재정정책이 필요합니다. (세금 인상 또는 정부지출 감소)", "세금 인상(An increase in taxes)은 총수요(AD)를 감소시킵니다.", "총수요를 변화시키지 않으려면(without changing aggregate demand), 감소된 총수요를 상쇄할 확장적 통화정책이 필요합니다.", "확장적 통화정책은 통화 공급 증가(an increase in the money supply)입니다. 이는 이자율을 낮춰 투자를 촉진하고 AD를 다시 증가시킵니다.", "따라서 '세금 인상'과 '통화 공급 증가'의 조합이 정답입니다."], distractors: ["A, D: 통화 공급 감소는 AD를 더욱 감소시킵니다.", "C: 세금 감면은 재정적자를 악화시킵니다.", "E: 정부지출 증가는 재정적자를 악화시킵니다."], summary: "긴축 재정정책과 확장 통화정책을 조합하면, 총수요 수준을 유지하면서 재정적자를 줄이고 경제 구성을 변화시킬 수 있습니다." },
      en: { concept: "🔄 Policy Mix", steps: ["To reduce a government deficit, a contractionary fiscal policy is needed (increase taxes or decrease government spending).", "An increase in taxes will decrease aggregate demand (AD).", "To keep AD unchanged, this decrease must be offset by an expansionary monetary policy.", "Expansionary monetary policy is an increase in the money supply, which lowers interest rates, stimulates investment, and increases AD.", "Therefore, the combination of an increase in taxes and an increase in the money supply is the correct policy mix."], distractors: ["A, D: A decrease in the money supply would further decrease AD.", "C: A decrease in taxes would worsen the deficit.", "E: An increase in government spending would worsen the deficit."], summary: "A policy mix of contractionary fiscal policy and expansionary monetary policy can reduce a budget deficit while keeping aggregate demand stable, changing the composition of the economy." }
    }, tags: ['재정정책', '통화정책', '정책조합'], difficulty: '어려움'
  },
  {
    id: "2013-32", year: 2013, questionNumber: 32,
    questionText: "Which of the following is illustrated by the relationship depicted in the graph above?",
    chartType: 'LineChart',
    chartData: { xAxisLabel: "UNEMPLOYMENT RATE", yAxisLabel: "INFLATION RATE", points: [ { x: 2, y: 10 }, { x: 3, y: 7 }, { x: 5, y: 4 }, { x: 8, y: 2.5 }, { x: 12, y: 2 } ] },
    answerOptions: [ { text: "Aggregate demand curve", isCorrect: false }, { text: "Long-run Phillips curve", isCorrect: false }, { text: "Short-run Phillips curve", isCorrect: true }, { text: "Long-run aggregate supply curve", isCorrect: false }, { text: "Short-run aggregate supply curve", isCorrect: false }, ],
    explanation: {
      ko: { concept: "📉 단기 필립스 곡선(Short-Run Phillips Curve)", steps: ["그래프는 가로축의 실업률(Unemployment Rate)과 세로축의 인플레이션율(Inflation Rate) 사이의 관계를 보여줍니다.", "그래프는 우하향하는 곡선으로, 실업률과 인플레이션율 사이에 역의 관계(trade-off)가 있음을 나타냅니다.", "이러한 단기적인 상충 관계를 나타내는 곡선이 바로 '단기 필립스 곡선(Short-run Phillips curve)'입니다."], distractors: ["A, D, E: 총수요 및 총공급 곡선은 물가 수준과 실질 GDP 사이의 관계를 나타냅니다.", "B: 장기 필립스 곡선(Long-run Phillips curve)은 자연실업률 수준에서 수직선 형태를 띱니다."], summary: "단기 필립스 곡선은 인플레이션과 실업률 사이의 단기적인 상충 관계를 보여주는 우하향하는 곡선입니다." },
      en: { concept: "📉 Short-Run Phillips Curve (SRPC)", steps: ["The graph shows the relationship between the unemployment rate on the horizontal axis and the inflation rate on the vertical axis.", "The curve is downward-sloping, indicating an inverse relationship or trade-off between unemployment and inflation.", "This curve, which represents this short-run trade-off, is the 'Short-run Phillips curve'."], distractors: ["A, D, E: The aggregate demand and aggregate supply curves show the relationship between the price level and real GDP.", "B: The long-run Phillips curve is a vertical line at the natural rate of unemployment."], summary: "The short-run Phillips curve is a downward-sloping curve showing the short-run trade-off between inflation and unemployment." }
    }, tags: ['필립스 곡선', '인플레이션', '실업'], difficulty: '쉬움'
  },
  {
    id: "2013-33", year: 2013, questionNumber: 33,
    questionText: "Which of the following is most likely to benefit from an appreciation in the United States dollar in the short run?",
    answerOptions: [ { text: "United States investors holding European bonds", isCorrect: false }, { text: "Importers in foreign countries seeking raw inputs at a lower price", isCorrect: false }, { text: "United States exporters selling capital equipment", isCorrect: false }, { text: "United States tourists traveling to foreign countries", isCorrect: true }, { text: "European consumers buying United States goods", isCorrect: false } ],
    explanation: {
      ko: { concept: "💵 통화가치 상승(Appreciation)의 효과", steps: ["미국 달러 가치 상승(appreciation)은 1달러로 더 많은 외화를 교환할 수 있음을 의미합니다.", "따라서 미국인 입장에서 해외여행이나 수입품 구매가 더 저렴해집니다.", "미국 관광객이 해외로 여행갈 때, 강해진 달러로 더 많은 현지 통화를 얻을 수 있으므로 경비가 절감되어 이익을 봅니다."], distractors: ["A: 미국 투자자가 보유한 유럽 채권의 가치는 달러로 환산할 때 감소하므로 손해입니다.", "B, E: 달러 가치 상승은 미국 상품을 더 비싸게 만들므로, 미국 상품을 수입하는 외국인이나 유럽 소비자는 불리합니다.", "C: 미국 수출업자는 해외 시장에서 가격 경쟁력이 약화되어 불리합니다."], summary: "자국 통화 가치 상승은 자국민의 해외 구매력을 높여주므로 해외여행객과 수입업자에게 유리합니다." },
      en: { concept: "💵 Effects of Currency Appreciation", steps: ["An appreciation of the U.S. dollar means that one dollar can be exchanged for more foreign currency.", "This makes foreign travel and imported goods cheaper for Americans.", "U.S. tourists traveling to foreign countries will benefit because their stronger dollars can buy more of the local currency, reducing their travel costs."], distractors: ["A: The value of European bonds, when converted back to dollars, will be lower, so U.S. investors lose.", "B, E: A stronger dollar makes U.S. goods more expensive for foreigners, so foreign importers and European consumers are at a disadvantage.", "C: U.S. exporters are at a disadvantage because their goods become less competitive in foreign markets."], summary: "A currency appreciation increases the purchasing power of domestic citizens abroad, benefiting tourists and importers." }
    }, tags: ['환율', '국제무역'], difficulty: '중간'
  },
  {
    id: "2013-34", year: 2013, questionNumber: 34,
    questionText: "Following a decrease in exports, what fiscal policy would restore the economy to the original equilibrium?",
    answerOptions: [ { text: "An increase in the income tax rate", isCorrect: false }, { text: "An increase in government transfer payments", isCorrect: true }, { text: "A reduction in the government budget deficit", isCorrect: false }, { text: "An open-market purchase of bonds by the central bank", isCorrect: false }, { text: "An open-market sale of bonds by the central bank", isCorrect: false } ],
    explanation: {
      ko: { concept: "📉 총수요 감소에 대한 재정정책 대응", steps: ["수출 감소는 순수출(X-M)을 감소시켜 총수요(AD)를 감소시킵니다. AD 곡선이 왼쪽으로 이동합니다.", "경제를 원래 균형으로 되돌리려면, 감소한 AD를 다시 증가시키는 확장적 재정정책이 필요합니다.", "확장적 재정정책의 수단은 정부지출 증가, 세금 감면, 또는 이전지출(transfer payments) 증가입니다.", "따라서 정부 이전지출 증가는 가계의 가처분 소득을 늘려 소비를 촉진하고 AD를 오른쪽으로 이동시켜 경제를 회복시킬 수 있습니다."], distractors: ["A: 소득세율 인상은 AD를 더욱 감소시키는 긴축 정책입니다.", "C: 재정적자 감축은 긴축 정책입니다.", "D, E: 공개시장조작은 통화정책이며, 재정정책이 아닙니다."], summary: "수출 감소와 같은 부정적 총수요 충격에 대응하기 위해, 정부는 이전지출 증가와 같은 확장적 재정정책을 사용하여 총수요를 원래 수준으로 회복시킬 수 있습니다." },
      en: { concept: "📉 Fiscal Policy Response to a Decrease in Aggregate Demand", steps: ["A decrease in exports reduces net exports (X-M), which decreases Aggregate Demand (AD). The AD curve shifts to the left.", "To restore the economy to its original equilibrium, an expansionary fiscal policy is needed to shift the AD curve back to the right.", "The tools of expansionary fiscal policy are increasing government spending, decreasing taxes, or increasing transfer payments.", "Therefore, an increase in government transfer payments will raise household disposable income, boost consumption, and shift AD to the right, restoring the economy."], distractors: ["A: An increase in the income tax rate is a contractionary policy that would further decrease AD.", "C: A reduction in the budget deficit is a contractionary policy.", "D, E: Open-market operations are monetary policy, not fiscal policy."], summary: "To counteract a negative aggregate demand shock like a decrease in exports, the government can use expansionary fiscal policy, such as increasing transfer payments, to restore aggregate demand." }
    }, tags: ['재정정책', 'AD-AS 모형', '경기안정화정책'], difficulty: '중간'
  },
  {
    id: "2013-35", year: 2013, questionNumber: 35,
    questionText: "If the annual interest rate is 5 percent, then the present value of $1.00 received one year from now is closest to",
    answerOptions: [ { text: "$1.50", isCorrect: false }, { text: "$1.05", isCorrect: false }, { text: "$1.00", isCorrect: false }, { text: "$0.95", isCorrect: true }, { text: "$0.05", isCorrect: false } ],
    explanation: {
      ko: { concept: "⏳ 현재가치(Present Value) 계산", steps: ["현재가치(PV)는 미래의 특정 금액을 현재 시점의 가치로 환산한 것입니다.", "공식: PV = FV / (1 + r)^n", "FV = 미래가치 ($1.00)", "r = 이자율 (0.05)", "n = 기간 (1년)", "PV = $1.00 / (1 + 0.05)^1 = $1.00 / 1.05 ≈ $0.9523", "가장 가까운 값은 $0.95입니다."], distractors: ["다른 선택지들은 계산이 틀렸습니다."], summary: "미래 금액의 현재가치는 그 금액을 (1 + 이자율)로 할인하여 계산합니다." },
      en: { concept: "⏳ Calculating Present Value", steps: ["Present Value (PV) is the current worth of a future sum of money, given a specified rate of return.", "Formula: PV = FV / (1 + r)^n", "FV = Future Value ($1.00)", "r = interest rate (0.05)", "n = number of periods (1 year)", "PV = $1.00 / (1 + 0.05)^1 = $1.00 / 1.05 ≈ $0.9523", "The closest value is $0.95."], distractors: ["The other options are incorrect calculations."], summary: "The present value of a future sum is calculated by discounting it by (1 + the interest rate)." }
    }, tags: ['이자율', '금융'], difficulty: '쉬움'
  },
  {
    id: "2013-36", year: 2013, questionNumber: 36,
    questionText: "Which of the following can be concluded from the data above?\n\n| Period | Real Gross Domestic Product | Nominal Gross Domestic Product |\n|---|---|---|\n| Year 1 | $100 billion | $70 billion |\n| Year 2 | $120 billion | $120 billion |\n| Year 3 | $130 billion | $150 billion |",
    answerOptions: [ { text: "The base year for the price index was year 1.", isCorrect: false }, { text: "The base year for the price index was year 3.", isCorrect: false }, { text: "The economy was producing higher-quality goods and services in years 2 and 3 than in year 1.", isCorrect: false }, { text: "The economy was experiencing inflation during years 2 and 3.", isCorrect: true }, { text: "The economy was experiencing deflation during years 1, 2, and 3.", isCorrect: false } ],
    explanation: {
      ko: { concept: "📈 명목/실질 GDP와 인플레이션", steps: ["GDP 디플레이터(물가 지수) = (명목 GDP / 실질 GDP) * 100", "기준 연도에는 명목 GDP와 실질 GDP가 같으므로, GDP 디플레이터는 100입니다.", "Year 2: ($120 / $120) * 100 = 100. 따라서 Year 2가 기준 연도입니다.", "Year 3: ($150 / $130) * 100 ≈ 115.4. 물가 지수가 100에서 115.4로 상승했으므로, Year 2와 Year 3 사이에 인플레이션이 발생했습니다."], distractors: ["A, B: Year 2가 기준 연도입니다.", "C: 데이터만으로는 상품의 질을 판단할 수 없습니다.", "E: Year 1의 물가 지수는 (70/100)*100=70으로 기준 연도보다 낮았고, Year 2에서 Year 3 사이에는 인플레이션이 있었습니다."], summary: "실질 GDP와 명목 GDP 데이터를 이용하여 기준 연도를 찾고, GDP 디플레이터의 변화를 통해 인플레이션 또는 디플레이션 여부를 판단할 수 있습니다." },
      en: { concept: "📈 Nominal/Real GDP and Inflation", steps: ["GDP Deflator (Price Index) = (Nominal GDP / Real GDP) * 100", "In the base year, Nominal GDP equals Real GDP, so the GDP deflator is 100.", "Year 2: ($120 / $120) * 100 = 100. Therefore, Year 2 is the base year.", "Year 3: ($150 / $130) * 100 ≈ 115.4. The price index rose from 100 to 115.4, meaning there was inflation between Year 2 and Year 3."], distractors: ["A, B: Year 2 is the base year.", "C: The data does not provide information about the quality of goods.", "E: The price level in Year 1 was lower than the base year (deflator=70), and there was inflation between years 2 and 3."], summary: "By comparing real and nominal GDP, we can identify the base year and calculate the GDP deflator to determine if the economy is experiencing inflation or deflation." }
    }, tags: ['국민소득', 'GDP', '물가', '인플레이션'], difficulty: '중간'
  },
  {
    id: "2013-37", year: 2013, questionNumber: 37,
    questionText: "An increase in inflationary expectations will most likely affect nominal interest rates and bond prices in which of the following ways in the short run?",
    answerOptions: [ { text: "Nominal Interest Rates: Increase, Bond Prices: No change", isCorrect: false }, { text: "Nominal Interest Rates: Increase, Bond Prices: Decrease", isCorrect: true }, { text: "Nominal Interest Rates: No change, Bond Prices: Increase", isCorrect: false }, { text: "Nominal Interest Rates: Decrease, Bond Prices: Increase", isCorrect: false }, { text: "Nominal Interest Rates: Decrease, Bond Prices: Decrease", isCorrect: false } ],
    explanation: {
      ko: { concept: "🔥 기대 인플레이션과 이자율", steps: ["피셔 효과(Fisher Effect)에 따르면, 명목이자율 = 실질이자율 + 기대 인플레이션율 입니다.", "기대 인플레이션이 상승하면, 대출자는 인플레이션으로 인한 구매력 손실을 보상받기 위해 더 높은 명목이자율을 요구하고, 차입자도 이를 받아들입니다. 따라서 명목이자율이 상승합니다.", "채권 가격과 이자율은 역의 관계에 있습니다.", "명목이자율이 상승하면, 기존에 발행된 낮은 이자율의 채권의 매력이 떨어져 채권 가격은 하락합니다."], distractors: ["다른 선택지들은 기대 인플레이션 상승의 효과를 잘못 설명하고 있습니다."], summary: "기대 인플레이션 상승은 명목이자율을 상승시키고, 이는 다시 채권 가격을 하락시키는 요인으로 작용합니다." },
      en: { concept: "🔥 Inflationary Expectations and Interest Rates", steps: ["According to the Fisher Effect, Nominal Interest Rate = Real Interest Rate + Expected Inflation Rate.", "When inflationary expectations increase, lenders demand a higher nominal interest rate to compensate for the loss of purchasing power, and borrowers accept this. Thus, the nominal interest rate increases.", "Bond prices and interest rates have an inverse relationship.", "When nominal interest rates rise, existing bonds with lower fixed interest rates become less attractive, causing their prices to decrease."], distractors: ["The other options incorrectly describe the effects of rising inflationary expectations."], summary: "An increase in inflationary expectations leads to a higher nominal interest rate, which in turn causes the prices of existing bonds to fall." }
    }, tags: ['인플레이션', '이자율', '금융'], difficulty: '중간'
  },
  {
    id: "2013-38", year: 2013, questionNumber: 38,
    questionText: "Which of the following concepts can be illustrated using the production possibilities curve?\n\nI. Choice\nII. Scarcity\nIII. Price level\nIV. Opportunity cost",
    answerOptions: [ { text: "II only", isCorrect: false }, { text: "I and III only", isCorrect: false }, { text: "III and IV only", isCorrect: false }, { text: "I, II, and IV only", isCorrect: true }, { text: "II, III, and IV only", isCorrect: false } ],
    explanation: {
      ko: { concept: "📊 생산가능곡선(PPC)의 경제적 의미", steps: ["PPC는 여러 가지 기본적인 경제 개념을 시각적으로 보여줍니다.", "I. 선택(Choice): 곡선 위의 여러 점들 중 하나를 선택해야 함을 보여줍니다.", "II. 희소성(Scarcity): 곡선 밖의 점은 도달 불가능하며, 이는 자원의 희소성을 의미합니다.", "IV. 기회비용(Opportunity cost): 한 재화를 더 생산하기 위해 다른 재화를 얼마나 포기해야 하는지(곡선의 기울기)를 보여줍니다.", "III. 물가 수준(Price level)은 PPC로 알 수 없는 거시경제 변수입니다."], distractors: ["III. 물가 수준은 PPC와 관련이 없습니다."], summary: "생산가능곡선은 희소성, 선택, 기회비용이라는 경제학의 세 가지 핵심 개념을 설명하는 데 사용되는 중요한 모델입니다." },
      en: { concept: "📊 Economic Concepts Illustrated by the PPC", steps: ["The PPC visually demonstrates several fundamental economic concepts.", "I. Choice: It shows that one must choose among various points on the curve.", "II. Scarcity: The unattainable points outside the curve represent the concept of scarcity.", "IV. Opportunity Cost: The slope of the curve shows how much of one good must be given up to produce more of another.", "III. Price level is a macroeconomic variable that cannot be illustrated by a PPC."], distractors: ["III. Price level is not related to the PPC."], summary: "The production possibilities curve is a key model used to illustrate three core economic concepts: scarcity, choice, and opportunity cost." }
    }, tags: ['기본 경제 개념', '생산가능곡선'], difficulty: '쉬움'
  },
  {
    id: "2013-39", year: 2013, questionNumber: 39,
    questionText: "The consumer price index (CPI) measures the",
    answerOptions: [ { text: "value of current gross domestic product in base-year dollars", isCorrect: false }, { text: "prices of all consumer goods and services produced in the economy", isCorrect: false }, { text: "prices of selected raw materials purchased by firms", isCorrect: false }, { text: "prices of a specific group of goods and services purchased by consumers", isCorrect: true }, { text: "prices of imports, but not exports", isCorrect: false } ],
    explanation: {
      ko: { concept: "🛒 소비자물가지수(CPI)의 정의", steps: ["소비자물가지수(CPI)는 도시 소비자가 일상생활에서 구매하는 '특정 상품 및 서비스 묶음(market basket)'의 가격 변동을 측정하는 지표입니다.", "이 상품 묶음은 고정되어 있으며, 기준 연도의 가격을 100으로 하여 비교 연도의 가격 수준을 나타냅니다.", "CPI는 인플레이션을 측정하는 대표적인 지표로 사용됩니다."], distractors: ["A: 이는 실질 GDP의 정의입니다.", "B: 모든 소비재가 아닌, 대표적인 상품 묶음의 가격을 측정합니다.", "C: 이는 생산자물가지수(PPI)와 관련이 있습니다.", "E: CPI 바스켓에는 수입품도 포함될 수 있습니다."], summary: "CPI는 대표적인 소비재와 서비스로 구성된 고정된 시장 바스켓의 비용 변화를 측정하여, 생활비와 인플레이션을 파악하는 데 사용됩니다." },
      en: { concept: "🛒 Definition of the Consumer Price Index (CPI)", steps: ["The Consumer Price Index (CPI) measures the change in prices paid by urban consumers for a 'fixed market basket of consumer goods and services'.", "This basket is held constant, and its cost in a given year is compared to its cost in a base year, which is set to 100.", "CPI is a primary measure of inflation."], distractors: ["A: This is the definition of real GDP.", "B: It measures the prices of a representative basket, not all consumer goods.", "C: This relates to the Producer Price Index (PPI).", "E: The CPI basket can include imported goods."], summary: "The CPI measures the changing cost of a fixed market basket of goods and services, and is used to track the cost of living and inflation." }
    }, tags: ['물가', '인플레이션', '경제지표'], difficulty: '쉬움'
  },
  {
    id: "2013-40", year: 2013, questionNumber: 40,
    questionText: "An increase in which of the following is most likely to cause the short-run aggregate supply curve to shift to the left?",
    answerOptions: [ { text: "Consumers' incomes", isCorrect: false }, { text: "The money supply", isCorrect: false }, { text: "Government spending", isCorrect: false }, { text: "The optimism of business firms", isCorrect: false }, { text: "The per unit cost of production", isCorrect: true } ],
    explanation: {
      ko: { concept: "⬅️ 단기 총공급(SRAS) 감소 요인", steps: ["단기 총공급(SRAS) 곡선은 생산 비용이 변할 때 이동합니다.", "SRAS 곡선이 왼쪽으로 이동하는 것은 동일한 물가 수준에서 공급량이 감소함을 의미하며, 이는 생산 비용의 증가 때문입니다.", "단위당 생산 비용(per unit cost of production)의 증가는 기업의 이윤을 감소시키고 생산을 위축시켜 SRAS 곡선을 왼쪽으로 이동시킵니다. (예: 임금 인상, 원자재 가격 상승)"], distractors: ["A, B, C, D: 모두 총수요(AD)에 영향을 미치는 요인들입니다."], summary: "단기 총공급 곡선은 임금, 원자재 가격 등 생산 비용의 변화에 따라 이동합니다. 생산 비용이 증가하면 SRAS 곡선은 왼쪽으로 이동합니다." },
      en: { concept: "⬅️ Factors that Decrease Short-Run Aggregate Supply (SRAS)", steps: ["The Short-Run Aggregate Supply (SRAS) curve shifts when there are changes in the costs of production.", "A leftward shift of the SRAS curve means that less output is supplied at any given price level, which is caused by an increase in production costs.", "An increase in the per-unit cost of production reduces firms' profitability and discourages production, shifting the SRAS curve to the left. (e.g., higher wages, higher raw material prices)"], distractors: ["A, B, C, D: These are all factors that affect Aggregate Demand (AD)."], summary: "The SRAS curve shifts due to changes in production costs, such as wages and raw material prices. An increase in production costs shifts the SRAS curve to the left." }
    }, tags: ['총공급', 'AD-AS 모형'], difficulty: '쉬움'
  },
  // Questions 41-50
  {
    id: "2013-41", year: 2013, questionNumber: 41,
    questionText: "The aggregate demand curve is downward sloping because an increase in the general price level will cause the demand for money, interest rates, and investment to change in which of the following ways?",
    answerOptions: [
        { text: "Demand for Money: Increase, Interest Rates: Increase, Investment: Increase", isCorrect: false },
        { text: "Demand for Money: Increase, Interest Rates: Increase, Investment: Decrease", isCorrect: true },
        { text: "Demand for Money: Increase, Interest Rates: Decrease, Investment: Increase", isCorrect: false },
        { text: "Demand for Money: Decrease, Interest Rates: Increase, Investment: Decrease", isCorrect: false },
        { text: "Demand for Money: Decrease, Interest Rates: Decrease, Investment: Increase", isCorrect: false }
    ],
    explanation: {
        ko: { concept: "📉 총수요 곡선의 우하향 이유: 이자율 효과", steps: ["총수요(AD) 곡선이 우하향하는 이유 중 하나는 '이자율 효과(interest-rate effect)'입니다.", "1. 물가 수준이 상승하면, 동일한 거래를 위해 더 많은 화폐가 필요해져 화폐 수요(Demand for Money)가 증가합니다.", "2. 화폐 공급이 일정할 때 화폐 수요가 증가하면, 화폐의 가격인 명목이자율(Interest Rates)이 상승합니다.", "3. 이자율이 상승하면 기업의 투자(Investment) 비용이 증가하여 투자가 감소합니다.", "결론적으로 물가 상승은 투자를 감소시켜 총수요량을 줄입니다."], distractors: [], summary: "이자율 효과에 따르면, 물가 상승은 화폐 수요 증가 → 이자율 상승 → 투자 감소로 이어져 총수요 곡선이 우하향하게 됩니다." },
        en: { concept: "📉 The Interest-Rate Effect and the AD Curve", steps: ["One reason the Aggregate Demand (AD) curve slopes downward is the 'interest-rate effect'.", "1. When the price level rises, people need more money to make the same purchases, so the demand for money increases.", "2. With a fixed money supply, an increase in money demand raises the price of money, which is the nominal interest rate.", "3. A higher interest rate increases the cost of borrowing, which leads to a decrease in investment spending.", "In conclusion, a higher price level reduces investment, thus reducing the quantity of aggregate demand."], distractors: [], summary: "The interest-rate effect explains the downward slope of the AD curve: a higher price level increases money demand, which raises interest rates and reduces investment." }
    }, tags: ['총수요', 'AD-AS 모형', '이자율 효과'], difficulty: '중간'
  },
  {
    id: "2013-42", year: 2013, questionNumber: 42,
    questionText: "Last year both a borrower and a lender expected an inflation rate of 3 percent when they signed a long-term loan agreement with fixed nominal interest rates of 5 percent. If the actual inflation rate were lower than expected, then which of the following would be true?",
    answerOptions: [ { text: "The borrower would benefit.", isCorrect: false }, { text: "The lender would benefit.", isCorrect: true }, { text: "The real interest rate would be lower than expected.", isCorrect: false }, { text: "The nominal interest rate would be higher than expected.", isCorrect: false }, { text: "The nominal interest rate would increase.", isCorrect: false } ],
    explanation: {
        ko: { concept: "💰 예상치 못한 인플레이션과 부의 재분배", steps: ["실질이자율 = 명목이자율 - 인플레이션율", "예상 실질이자율 = 5% - 3% = 2%", "실제 인플레이션율이 예상(3%)보다 낮았다고 가정해봅시다 (예: 1%).", "실제 실질이자율 = 5% - 1% = 4%", "실제 실질이자율(4%)이 예상 실질이자율(2%)보다 높아졌습니다.", "대출자(lender)는 예상보다 높은 실질 수익을 얻게 되므로 이익을 봅니다. 반면, 차입자(borrower)는 예상보다 높은 실질 비용을 지불하게 되어 손해를 봅니다."], distractors: ["A: 차입자는 손해를 봅니다.", "C: 실제 실질이자율은 예상보다 높습니다.", "D, E: 명목이자율은 5%로 고정되어 있습니다."], summary: "예상보다 낮은 인플레이션은 채무자(차입자)에게서 채권자(대출자)에게로 부를 재분배합니다." },
        en: { concept: "💰 Unexpected Inflation and Wealth Redistribution", steps: ["Real Interest Rate = Nominal Interest Rate - Inflation Rate", "Expected Real Interest Rate = 5% - 3% = 2%", "Assume the actual inflation rate was lower than expected (e.g., 1%).", "Actual Real Interest Rate = 5% - 1% = 4%", "The actual real interest rate (4%) is higher than the expected real interest rate (2%).", "The lender benefits because they receive a higher real return than anticipated. The borrower is harmed because they pay a higher real cost than anticipated."], distractors: ["A: The borrower is harmed.", "C: The real interest rate would be higher than expected.", "D, E: The nominal interest rate is fixed at 5%."], summary: "Unexpectedly low inflation (disinflation) redistributes wealth from borrowers to lenders." }
    }, tags: ['인플레이션', '이자율', '금융'], difficulty: '중간'
  },
  {
    id: "2013-43", year: 2013, questionNumber: 43,
    questionText: "An increase in which of the following is most likely to increase the long-run growth rate of an economy's real per capita income?",
    answerOptions: [ { text: "Population growth", isCorrect: false }, { text: "The proportion of gross domestic product consumed", isCorrect: false }, { text: "The educational attainment of the population", isCorrect: true }, { text: "The supply of money in circulation", isCorrect: false }, { text: "Personal income taxes", isCorrect: false } ],
    explanation: {
        ko: { concept: "🌱 1인당 소득과 장기 성장", steps: ["1인당 실질 소득(real per capita income)의 장기 성장은 노동 생산성(productivity) 향상에 의해 결정됩니다.", "노동 생산성은 노동자 1인당 물적 자본, 인적 자본, 기술 수준에 의해 결정됩니다.", "인구의 교육 수준(educational attainment) 향상은 인적 자본(human capital)을 증가시켜 노동 생산성을 높이고, 이는 1인당 소득의 장기 성장으로 이어집니다."], distractors: ["A: 인구 성장이 실질 GDP 성장보다 빠르면 1인당 소득은 감소할 수 있습니다.", "B: 소비 비중 증가는 저축 및 투자 비중 감소를 의미하므로, 자본 축적에 불리하여 장기 성장을 저해할 수 있습니다.", "D: 통화 공급 증가는 장기적으로 물가만 상승시킬 뿐 실질 변수에 영향을 주지 못합니다(화폐의 중립성).", "E: 소득세 증가는 저축과 투자의 유인을 감소시켜 성장에 부정적일 수 있습니다."], summary: "1인당 실질 소득의 장기 성장은 인적 자본, 물적 자본, 기술 진보를 통한 노동 생산성 향상에 달려있습니다." },
        en: { concept: "🌱 Per Capita Income and Long-Run Growth", steps: ["Long-run growth in real per capita income is driven by increases in labor productivity.", "Labor productivity is determined by the amounts of physical capital per worker, human capital per worker, and the level of technology.", "An increase in the educational attainment of the population increases human capital, which boosts labor productivity and leads to long-run growth in per capita income."], distractors: ["A: If population grows faster than real GDP, per capita income can fall.", "B: A higher proportion of consumption means a lower proportion of saving and investment, which hinders capital accumulation and long-run growth.", "D: An increase in the money supply affects the price level in the long run, not real variables (neutrality of money).", "E: An increase in income taxes can reduce incentives to save and invest, harming growth."], summary: "Long-run growth in real per capita income depends on improving labor productivity through investments in human capital, physical capital, and technology." }
    }, tags: ['경제성장', '생산성', '인적자본'], difficulty: '중간'
  },
  {
    id: "2013-44", year: 2013, questionNumber: 44,
    questionText: "If the marginal propensity to consume is 0.9, the government increases purchases by $100, and net exports decline by $60, the equilibrium level of real gross domestic product will",
    answerOptions: [ { text: "decrease by up to $400", isCorrect: false }, { text: "increase by up to $400", isCorrect: true }, { text: "increase by up to $600", isCorrect: false }, { text: "decrease by up to $1,600", isCorrect: false }, { text: "increase by up to $1,600", isCorrect: false } ],
    explanation: {
        ko: { concept: " multiplier effect", steps: ["지출 승수(Spending Multiplier) = 1 / (1 - MPC) = 1 / (1 - 0.9) = 1 / 0.1 = 10.", "정부 구매($100) 증가로 인한 GDP 변화 = $100 × 10 = +$1,000.", "순수출($60) 감소로 인한 GDP 변화 = -$60 × 10 = -$600.", "총 GDP 변화 = +$1,000 - $600 = +$400.", "따라서 실질 GDP는 최대 $400까지 증가합니다."], distractors: [], summary: "총수요의 각 구성요소 변화는 승수 효과를 통해 GDP에 몇 배 더 큰 영향을 미칩니다. 총 GDP 변화는 각 요소의 변화에 따른 효과를 합산하여 계산합니다." },
        en: { concept: "Multiplier Effect", steps: ["The spending multiplier = 1 / (1 - MPC) = 1 / (1 - 0.9) = 1 / 0.1 = 10.", "The change in GDP from the increase in government purchases = $100 × 10 = +$1,000.", "The change in GDP from the decrease in net exports = -$60 × 10 = -$600.", "The total change in GDP = +$1,000 - $600 = +$400.", "Therefore, the equilibrium level of real GDP will increase by up to $400."], distractors: [], summary: "Changes in components of aggregate demand have a multiplied effect on GDP. The total change in GDP is the sum of the effects from each component's change." }
    }, tags: ['재정정책', '승수효과'], difficulty: '어려움'
  },
  {
    id: "2013-45", year: 2013, questionNumber: 45,
    questionText: "Which of the following represents a leakage from the circular flow in an economy?",
    answerOptions: [ { text: "Consumption spending", isCorrect: false }, { text: "Government spending", isCorrect: false }, { text: "Investment spending", isCorrect: false }, { text: "Unemployment benefits", isCorrect: false }, { text: "Imports", isCorrect: true } ],
    explanation: {
        ko: { concept: "🔄 국민소득 순환모형의 누출과 주입", steps: ["국민소득 순환모형에서 '누출(leakage)'은 소득 흐름에서 빠져나가 지출로 바로 이어지지 않는 부분을 의미합니다.", "주요 누출 항목은 저축(Savings), 조세(Taxes), 수입(Imports)입니다.", "수입(Imports)은 국내에서 벌어들인 소득이 해외 상품 구매를 위해 국외로 빠져나가는 것이므로 누출에 해당합니다."], distractors: ["A, B, C: 소비, 정부지출, 투자는 소득 흐름으로 다시 들어오는 '주입(injection)' 항목입니다.", "D: 실업수당은 정부의 이전지출로, 가계 소득을 증가시켜 소비로 이어질 수 있으므로 주입의 성격을 가집니다."], summary: "국민소득 순환모형에서 누출은 저축, 조세, 수입을 포함하며, 주입은 투자, 정부지출, 수출을 포함합니다." },
        en: { concept: "🔄 Leakages and Injections in the Circular Flow", steps: ["In the circular flow model, a 'leakage' is any part of income that is not passed on directly as spending within the economy.", "The main leakages are Savings, Taxes, and Imports.", "Imports represent a leakage because income earned domestically is spent on foreign goods, causing money to flow out of the country."], distractors: ["A, B, C: Consumption, government spending, and investment are 'injections' back into the circular flow.", "D: Unemployment benefits are a form of government transfer payment, which acts as an injection by boosting household income and potential consumption."], summary: "In the circular flow model, leakages include savings, taxes, and imports, while injections include investment, government spending, and exports." }
    }, tags: ['국민소득', '기본 경제 개념'], difficulty: '쉬움'
  },
  {
    id: "2013-46", year: 2013, questionNumber: 46,
    questionText: "The table above indicates the production alternatives of two countries, A and B, which produce computers and steel using equal amounts of resources. If both countries always produce at full employment, which of the following statements must be correct?\n\n| | Number of Computers | or | Units of Steel |\n|---|---|---|---|\n| Country A | 100 | or | 100 |\n| Country B | 20 | or | 80 |",
    answerOptions: [ { text: "Mutually advantageous trade can occur between the two countries when 1 unit of steel from Country A is exchanged for 2 computers from Country B.", isCorrect: false }, { text: "Mutually advantageous trade can occur between the two countries when 2 units of steel from Country B are exchanged for 1 computer from Country A.", isCorrect: true }, { text: "Country A has an absolute and comparative advantage in the production of computers, and Country B has an absolute and comparative advantage in the production of steel.", isCorrect: false }, { text: "Country B has an absolute advantage in the production of both commodities, but a comparative advantage in the production of steel.", isCorrect: false }, { text: "Country A has an absolute advantage in the production of both commodities, but a comparative advantage in the production of steel.", isCorrect: false } ],
    explanation: {
        ko: { concept: "🌍 비교우위와 무역의 이익", steps: ["1. 기회비용 계산:", " - A국: 컴퓨터 1대 = 강철 1단위, 강철 1단위 = 컴퓨터 1대", " - B국: 컴퓨터 1대 = 강철 4단위, 강철 1단위 = 컴퓨터 1/4대", "2. 비교우위 판정:", " - 컴퓨터 생산의 기회비용은 A국(강철 1)이 B국(강철 4)보다 낮으므로 A국이 컴퓨터에 비교우위가 있습니다.", " - 강철 생산의 기회비용은 B국(컴퓨터 1/4)이 A국(컴퓨터 1)보다 낮으므로 B국이 강철에 비교우위가 있습니다.", "3. 교역 조건 판정: 양국 모두 이익을 얻으려면 교역 조건(강철 1단위당 컴퓨터 가격)이 양국의 기회비용 사이에 있어야 합니다. 즉, 컴퓨터 1/4대 < 강철 1단위 < 컴퓨터 1대.", "4. 선택지 B 분석: B국의 강철 2단위를 A국의 컴퓨터 1대와 교환합니다. 이는 강철 1단위당 컴퓨터 1/2대의 가격입니다. 이 가격(1/2)은 양국의 기회비용(1/4과 1) 사이에 있으므로 상호 이익이 되는 무역이 가능합니다."], distractors: ["A: 강철 1단위당 컴퓨터 2대는 교역 조건 범위를 벗어납니다.", "C, D, E: A국은 컴퓨터에, B국은 강철에 비교우위가 있습니다. A국은 컴퓨터에 절대우위, B국은 강철에 비교우위만 가집니다."], summary: "각국은 기회비용이 더 낮은 상품 생산에 특화하고, 양국의 기회비용 사이의 교역 조건으로 무역을 하면 양국 모두 이익을 얻을 수 있습니다." },
        en: { concept: "🌍 Comparative Advantage and Gains from Trade", steps: ["1. Calculate Opportunity Costs:", " - Country A: 1 Computer = 1 Steel, 1 Steel = 1 Computer", " - Country B: 1 Computer = 4 Steel, 1 Steel = 1/4 Computer", "2. Determine Comparative Advantage:", " - Country A has a comparative advantage in computers (1 Steel < 4 Steel).", " - Country B has a comparative advantage in steel (1/4 Computer < 1 Computer).", "3. Determine Terms of Trade: For trade to be mutually beneficial, the price of steel must be between the two countries' opportunity costs: 1/4 Computer < 1 Steel < 1 Computer.", "4. Analyze Option B: 2 units of steel from B for 1 computer from A. This means the price is 1 Steel = 1/2 Computer. This price (1/2) is between the opportunity costs (1/4 and 1), so this is a mutually advantageous trade."], distractors: ["A: 1 steel for 2 computers is outside the beneficial range.", "C, D, E: Country A has a comparative advantage in computers, and B has a comparative advantage in steel. Country A has an absolute advantage in computers, while B only has a comparative advantage in steel."], summary: "Countries benefit from trade by specializing in the production of goods in which they have a lower opportunity cost and trading at a terms of trade that lies between their respective opportunity costs." }
    }, tags: ['국제무역', '비교우위'], difficulty: '어려움'
  },
  {
    id: "2013-47", year: 2013, questionNumber: 47,
    questionText: "An increase in United States imports will result in which of the following in foreign exchange markets?",
    answerOptions: [ { text: "Increased foreign demand for United States dollars", isCorrect: false }, { text: "Decreased supply of United States dollars", isCorrect: false }, { text: "Increased United States demand for foreign currencies", isCorrect: true }, { text: "A decrease in the value of foreign currencies", isCorrect: false }, { text: "An increase in the value of the United States dollar", isCorrect: false } ],
    explanation: {
        ko: { concept: "💱 외환시장과 수입", steps: ["미국이 수입을 늘리려면, 외국 상품을 구매하기 위해 외화가 필요합니다.", "따라서 미국 거주자들은 외화를 얻기 위해 외환시장에서 미국 달러를 팔고 외화를 사려고 할 것입니다.", "이는 '외화에 대한 수요 증가'를 의미합니다.", "동시에 이는 '미국 달러의 공급 증가'를 의미하기도 합니다."], distractors: ["A: 미국 수입 증가는 달러 공급을 늘리므로, 외국인의 달러 수요와는 관련이 적습니다.", "B: 달러 공급은 증가합니다.", "D, E: 달러 공급이 증가하면 달러 가치는 하락하고, 외화 가치는 상승합니다."], summary: "수입 증가는 해당 국가의 통화를 외환시장에 공급하고, 외국 통화에 대한 수요를 창출하는 효과를 가집니다." },
        en: { concept: "💱 Foreign Exchange Markets and Imports", steps: ["For the United States to increase its imports, it must pay for foreign goods using foreign currencies.", "To obtain these foreign currencies, U.S. residents will sell U.S. dollars in the foreign exchange market to buy the foreign currencies.", "This results in an 'increased U.S. demand for foreign currencies'.", "Simultaneously, this also means an 'increased supply of U.S. dollars' in the market."], distractors: ["A: U.S. imports increase the supply of dollars, it is not related to foreign demand for dollars.", "B: The supply of U.S. dollars increases.", "D, E: The increased supply of dollars will cause the dollar to depreciate and foreign currencies to appreciate."], summary: "An increase in imports leads to an increased supply of the domestic currency and an increased demand for foreign currencies in the foreign exchange market." }
    }, tags: ['환율', '국제무역'], difficulty: '쉬움'
  },
  {
    id: "2013-48", year: 2013, questionNumber: 48,
    questionText: "If the reserve requirement is 10 percent and the central bank sells $10,000 in government bonds on the open market, the money supply will",
    answerOptions: [ { text: "increase by a maximum of $9,000", isCorrect: false }, { text: "increase by a maximum of $90,000", isCorrect: false }, { text: "decrease by a maximum of $9,000", isCorrect: false }, { text: "decrease by a maximum of $10,000", isCorrect: false }, { text: "decrease by a maximum of $100,000", isCorrect: true } ],
    explanation: {
        ko: { concept: "🏦 통화승수와 공개시장조작", steps: ["중앙은행의 국채 매각은 시중은행 시스템에서 지급준비금을 $10,000만큼 회수하는 효과를 가집니다.", "통화승수 = 1 / 지급준비율 = 1 / 0.10 = 10.", "통화 공급의 최대 변화량 = 초기 지급준비금 변화량 × 통화승수", "최대 통화 공급 감소량 = -$10,000 × 10 = -$100,000."], distractors: ["D는 초기 지급준비금 감소액입니다. 승수 효과를 고려해야 합니다."], summary: "중앙은행의 공개시장조작은 통화승수 효과를 통해 초기 지급준비금 변화량의 몇 배만큼 통화 공급량을 변화시킵니다." },
        en: { concept: "🏦 Money Multiplier and Open Market Operations", steps: ["The central bank's sale of bonds removes $10,000 of reserves from the banking system.", "Money Multiplier = 1 / Reserve Requirement = 1 / 0.10 = 10.", "Maximum Change in Money Supply = Initial Change in Reserves × Money Multiplier", "Maximum Decrease in Money Supply = -$10,000 × 10 = -$100,000."], distractors: ["D is the initial change in reserves. The multiplier effect must be considered."], summary: "An open market operation by the central bank changes the money supply by a multiple of the initial change in reserves, due to the money multiplier effect." }
    }, tags: ['통화정책', '신용창조', '통화승수'], difficulty: '중간'
  },
  {
    id: "2013-49", year: 2013, questionNumber: 49,
    questionText: "If the federal government decreases its expenditures on goods and services by $10 billion and decreases taxes on personal incomes by $10 billion, which of the following will occur in the short run?",
    answerOptions: [ { text: "The federal budget deficit will increase by $10 billion.", isCorrect: false }, { text: "The federal budget deficit will decrease by $10 billion.", isCorrect: false }, { text: "Aggregate income will remain the same.", isCorrect: false }, { text: "Aggregate income will increase by up to $10 billion.", isCorrect: false }, { text: "Aggregate income will decrease by up to $10 billion.", isCorrect: true } ],
    explanation: {
        ko: { concept: "Balanced Budget Multiplier", steps: ["이는 '균형재정승수(Balanced Budget Multiplier)' 개념에 해당합니다.", "정부지출(G) 감소는 총수요(AD)를 직접적으로 $10 billion 감소시킵니다.", "세금(T) $10 billion 감소는 가처분소득을 $10 billion 증가시키지만, 이 중 일부는 저축되고 일부만 소비됩니다. 소비 증가는 MPC × $10 billion 입니다.", "정부지출 승수가 조세 승수보다 항상 1만큼 크기 때문에, 동일한 금액의 G 감소와 T 감소는 순효과로 AD를 감소시킵니다.", "균형재정승수는 1입니다. 따라서 총소득(Aggregate income)은 정부지출 변화분만큼 감소합니다. 즉, $10 billion 감소합니다."], distractors: ["A, B: 정부지출 감소(-10)와 세수 감소(-10)는 재정수지에 영향이 없습니다.", "C, D: 총소득은 감소합니다."], summary: "정부지출과 세금을 동일한 금액만큼 변화시킬 때, GDP는 그 변화분과 동일한 금액만큼 같은 방향으로 변합니다(균형재정승수=1)." },
        en: { concept: "Balanced Budget Multiplier", steps: ["This question relates to the 'Balanced Budget Multiplier' concept.", "A decrease in government spending (G) directly decreases aggregate demand (AD) by $10 billion.", "A decrease in taxes (T) of $10 billion increases disposable income, but only a fraction (MPC × $10 billion) is spent, while the rest is saved.", "Because the government spending multiplier is always exactly 1 greater than the tax multiplier, a decrease in G and T of the same amount will have a net contractionary effect.", "The balanced budget multiplier is 1. Therefore, aggregate income will decrease by the amount of the change in government spending, which is $10 billion."], distractors: ["A, B: A decrease in spending (-10) and a decrease in tax revenue (-10) has no net effect on the budget balance.", "C, D: Aggregate income will decrease."], summary: "When government spending and taxes are changed by the same amount, GDP changes by that same amount in the same direction (the balanced budget multiplier is 1)." }
    }, tags: ['재정정책', '승수효과'], difficulty: '어려움'
  },
  {
    id: "2013-50", year: 2013, questionNumber: 50,
    questionText: "If a central bank significantly increases its sales of government bonds, it is most likely responding to which of the following?",
    answerOptions: [ { text: "Slow economic growth", isCorrect: false }, { text: "An appreciating domestic currency", isCorrect: false }, { text: "Rising unemployment", isCorrect: false }, { text: "Rising price levels", isCorrect: true }, { text: "Rising imports and declining exports", isCorrect: false } ],
    explanation: {
        ko: { concept: "🏦 긴축 통화정책의 목표", steps: ["중앙은행이 국채 판매(sales)를 크게 늘리는 것은 긴축 통화정책입니다.", "긴축 통화정책은 통화 공급을 줄이고 이자율을 높여 총수요를 억제하는 것을 목표로 합니다.", "총수요를 억제하는 주된 이유는 경제가 과열되어 물가 수준이 상승(rising price levels), 즉 인플레이션이 발생하고 있기 때문입니다."], distractors: ["A, C: 경기 둔화나 실업률 상승 시에는 경기를 부양하기 위해 확장 통화정책(국채 매입)을 사용합니다.", "B, E: 통화가치 상승이나 무역수지 악화는 다른 정책 목표와 관련될 수 있지만, 국채 매각의 가장 직접적인 목표는 인플레이션 억제입니다."], summary: "중앙은행은 인플레이션을 억제하기 위해 국채를 매각하여 시중 유동성을 흡수하고 이자율을 인상하는 긴축 통화정책을 시행합니다." },
        en: { concept: "🏦 Goal of Contractionary Monetary Policy", steps: ["A significant increase in the sale of government bonds by the central bank is a contractionary monetary policy.", "Contractionary monetary policy aims to reduce the money supply, raise interest rates, and curb aggregate demand.", "The primary reason to curb aggregate demand is to combat inflation, which is characterized by rising price levels."], distractors: ["A, C: For slow growth or rising unemployment, the central bank would use expansionary policy (buying bonds) to stimulate the economy.", "B, E: While currency appreciation or trade balance issues can be policy concerns, the most direct reason for selling bonds is to fight inflation."], summary: "Central banks implement contractionary monetary policy—selling bonds to absorb liquidity and raise interest rates—primarily to combat rising price levels (inflation)." }
    }, tags: ['통화정책', '인플레이션', '경기안정화정책'], difficulty: '중간'
  },
  // Questions 51-60
  {
    id: "2013-51", year: 2013, questionNumber: 51,
    questionText: "Which of the following is a cause of hyperinflation?",
    answerOptions: [ { text: "Rapid growth of real gross domestic product", isCorrect: false }, { text: "Rapid growth of the money supply", isCorrect: true }, { text: "Unanticipated decrease in aggregate demand", isCorrect: false }, { text: "Unanticipated increase in aggregate supply", isCorrect: false }, { text: "Unanticipated rise in real interest rates", isCorrect: false } ],
    explanation: {
        ko: { concept: "🔥 초인플레이션(Hyperinflation)의 원인", steps: ["초인플레이션은 물가 수준이 통제 불가능할 정도로 급격하게 상승하는 현상입니다.", "역사적으로 초인플레이션의 주된 원인은 정부가 재정적자를 메우기 위해 화폐를 과도하게 발행(seigniorage)하여 통화 공급이 급격하게 증가하는 것이었습니다.", "화폐수량설(MV=PQ)에 따르면, 생산량(Q)이 일정한 상태에서 통화량(M)이 급격히 증가하면 물가(P)도 급격히 상승하게 됩니다."], distractors: ["A: 실질 GDP의 빠른 성장은 오히려 물가 안정 요인입니다.", "C: 총수요 감소는 디플레이션 압력을 유발합니다.", "D: 총공급 증가는 물가 하락 요인입니다.", "E: 실질 이자율 상승은 긴축 효과를 가져와 인플레이션을 억제합니다."], summary: "초인플레이션은 거의 항상 정부의 과도한 화폐 발행으로 인한 통화 공급의 급격한 증가에 의해 발생합니다." },
        en: { concept: "🔥 Cause of Hyperinflation", steps: ["Hyperinflation is an extremely rapid and out-of-control increase in the price level.", "Historically, the primary cause of hyperinflation is the rapid growth of the money supply, often because a government prints money to finance large budget deficits (seigniorage).", "According to the quantity theory of money (MV=PQ), if the money supply (M) grows much faster than real output (Q), the price level (P) must rise rapidly."], distractors: ["A: Rapid growth of real GDP would tend to lower the price level.", "C: A decrease in aggregate demand would cause deflationary pressure.", "D: An increase in aggregate supply would lower the price level.", "E: A rise in real interest rates is contractionary and would curb inflation."], summary: "Hyperinflation is almost always caused by a rapid and excessive increase in the money supply, typically due to government printing money to cover its spending." }
    }, tags: ['인플레이션', '통화정책', '화폐수량설'], difficulty: '쉬움'
  },
  {
    id: "2013-52", year: 2013, questionNumber: 52,
    questionText: "Assume that the economy is in long-run equilibrium. A shift in the aggregate demand curve will change",
    answerOptions: [ { text: "only the price level in the long run", isCorrect: true }, { text: "only the output level in the long run", isCorrect: false }, { text: "both the price level and the output level in the long run", isCorrect: false }, { text: "neither the price level nor the output level in the short run", isCorrect: false }, { text: "only the price level in the short run and only the output level in the long run", isCorrect: false } ],
    explanation: {
        ko: { concept: "🏛️ 총수요 충격의 장기 효과 (화폐의 중립성)", steps: ["장기적으로 경제는 항상 잠재 GDP(자연 산출량) 수준으로 회귀합니다. 이는 장기 총공급(LRAS) 곡선이 수직이기 때문입니다.", "총수요(AD) 곡선이 이동하면 (예: 오른쪽으로 이동), 단기적으로는 물가와 산출량이 모두 증가합니다.", "하지만 장기적으로는 명목임금과 다른 투입 요소 가격이 상승하여 단기 총공급(SRAS) 곡선이 왼쪽으로 이동합니다.", "새로운 장기 균형은 원래의 잠재 GDP 수준에서 더 높은 물가 수준에서 형성됩니다.", "따라서 장기적으로 총수요의 변화는 산출량에 영향을 주지 못하고 물가 수준만 변화시킵니다. 이를 '화폐의 중립성'이라고도 합니다."], distractors: [], summary: "장기적으로 총수요의 변화는 실질 변수(산출량, 고용)에 영향을 미치지 못하고, 명목 변수인 물가 수준만 변화시킵니다." },
        en: { concept: "🏛️ Long-Run Effects of an AD Shift (Neutrality of Money)", steps: ["In the long run, the economy always returns to its potential GDP (natural rate of output). This is because the long-run aggregate supply (LRAS) curve is vertical.", "When the aggregate demand (AD) curve shifts (e.g., to the right), it causes both the price level and output to increase in the short run.", "However, in the long run, nominal wages and other input prices adjust upward, shifting the short-run aggregate supply (SRAS) curve to the left.", "The new long-run equilibrium is at the original potential GDP level but at a higher price level.", "Therefore, in the long run, a shift in AD changes only the price level, not the output level. This is also known as the 'neutrality of money'."], distractors: [], summary: "In the long run, changes in aggregate demand do not affect real variables like output and employment; they only affect nominal variables like the price level." }
    }, tags: ['AD-AS 모형', '장기균형', '화폐의 중립성'], difficulty: '중간'
  },
  {
    id: "2013-53", year: 2013, questionNumber: 53,
    questionText: "Which of the following will lower the prices of a country's outstanding government bonds?",
    answerOptions: [ { text: "An open-market purchase of government bonds by the country's central bank", isCorrect: false }, { text: "A decrease in the required reserve ratio for the country's commercial banks", isCorrect: false }, { text: "An outflow of financial capital to other countries", isCorrect: true }, { text: "A decrease in the country's government spending", isCorrect: false }, { text: "A decrease in inflationary expectations in the country", isCorrect: false } ],
    explanation: {
        ko: { concept: "📉 채권 가격 하락 요인", steps: ["채권 가격은 채권 시장의 수요와 공급에 의해 결정됩니다. 가격이 하락하려면 수요가 감소하거나 공급이 증가해야 합니다.", "자국에서 해외로 금융 자본이 유출(outflow of financial capital)되면, 투자자들은 자국 채권을 팔고 해외 자산을 사려고 할 것입니다.", "이는 자국 채권 시장에서 채권의 공급을 증가시키거나 수요를 감소시켜 채권 가격을 하락시킵니다."], distractors: ["A: 중앙은행의 공개시장매입은 채권 수요를 증가시켜 채권 가격을 상승시킵니다.", "B: 지급준비율 인하는 통화 공급을 늘려 이자율을 낮추므로, 채권 가격을 상승시킵니다.", "D: 정부지출 감소는 정부의 차입 필요성을 줄여 채권 공급을 감소시키므로, 채권 가격을 상승시킬 수 있습니다.", "E: 기대 인플레이션 하락은 명목이자율을 낮추어 채권 가격을 상승시킵니다."], summary: "금융 자본 유출은 국내 채권에 대한 수요 감소 또는 공급 증가를 유발하여 채권 가격을 하락시키는 요인입니다." },
        en: { concept: "📉 Factors that Lower Bond Prices", steps: ["Bond prices are determined by the supply and demand for bonds. For prices to fall, demand must decrease or supply must increase.", "An outflow of financial capital to other countries means that investors are selling domestic assets (like bonds) to buy foreign assets.", "This increases the supply of domestic bonds or decreases the demand for them, causing their prices to fall."], distractors: ["A: An open-market purchase by the central bank increases the demand for bonds, raising their prices.", "B: A decrease in the reserve ratio increases the money supply and lowers interest rates, which raises bond prices.", "D: A decrease in government spending reduces the government's need to borrow, decreasing the supply of bonds and thus raising their prices.", "E: A decrease in inflationary expectations lowers nominal interest rates, which raises bond prices."], summary: "An outflow of financial capital causes a decrease in demand for (or increase in supply of) domestic bonds, leading to a fall in their prices." }
    }, tags: ['금융', '채권시장', '자본이동'], difficulty: '어려움'
  },
  {
    id: "2013-54", year: 2013, questionNumber: 54,
    questionText: "Which of the following could cause a movement along a country's short-run Phillips curve toward higher unemployment and lower inflation?",
    answerOptions: [
      { text: "A significant reduction in energy prices", isCorrect: false },
      { text: "A recession in the economies of the nation's major trading partners", isCorrect: true },
      { text: "A decrease in savings by the country's consumers", isCorrect: false },
      { text: "A movement of the economy from the recovery phase to the expansionary phase of the business cycle", isCorrect: false },
      { text: "An improvement in technology", isCorrect: false }
    ],
    explanation: {
      ko: {
        concept: "📉 필립스 곡선상의 이동",
        steps: [
          "단기 필립스 곡선(SRPC)상의 이동은 총수요(AD)의 변화에 의해 발생합니다.",
          "더 높은 실업률과 더 낮은 인플레이션 방향으로의 이동은 SRPC를 따라 왼쪽 아래로 움직이는 것을 의미합니다.",
          "이는 총수요(AD) 감소로 인해 발생합니다.",
          "주요 교역 상대국의 경기 침체는 자국의 수출을 감소시켜 순수출(X-M)을 줄이고, 이는 AD를 감소시키는 요인입니다."
        ],
        distractors: [
          "A, E: 에너지 가격 하락이나 기술 향상은 단기 총공급(SRAS)을 증가시켜 SRPC 자체를 왼쪽(아래)으로 이동시킵니다.",
          "C: 소비자 저축 감소는 소비 증가를 의미하며, 이는 AD를 증가시켜 더 낮은 실업률과 더 높은 인플레이션 방향으로 이동시킵니다.",
          "D: 경기 회복에서 확장 국면으로의 이동은 AD 증가를 의미합니다."
        ],
        summary: "총수요의 변화는 단기 필립스 곡선상의 이동을 유발합니다. 총수요 감소는 더 높은 실업률과 더 낮은 인플레이션으로 이어집니다."
      },
      en: {
        concept: "📉 Movement Along the Phillips Curve",
        steps: [
          "A movement along the short-run Phillips curve (SRPC) is caused by a change in aggregate demand (AD).",
          "A movement toward higher unemployment and lower inflation means moving down and to the right along the SRPC.",
          "This is caused by a decrease in aggregate demand (AD).",
          "A recession in major trading partners' economies will decrease demand for the country's exports, reducing net exports (X-M) and thus decreasing AD."
        ],
        distractors: [
          "A, E: A reduction in energy prices or an improvement in technology would increase short-run aggregate supply (SRAS), shifting the entire SRPC to the left (down).",
          "C: A decrease in savings means an increase in consumption, which increases AD, causing a movement toward lower unemployment and higher inflation.",
          "D: Moving from recovery to expansion implies an increase in AD."
        ],
        summary: "Changes in aggregate demand cause a movement along the short-run Phillips curve. A decrease in AD leads to higher unemployment and lower inflation."
      }
    },
    tags: ['필립스 곡선', '총수요'],
    difficulty: '중간'
  },
  {
    id: "2013-55", year: 2013, questionNumber: 55,
    questionText: "Which of the following is true in the short run if consumers buy more imported goods and fewer domestic goods?",
    answerOptions: [
      { text: "The trade balance moves toward deficit, and equilibrium income decreases.", isCorrect: true },
      { text: "The trade balance moves toward deficit, and equilibrium income increases.", isCorrect: false },
      { text: "The trade balance moves toward surplus, and equilibrium income is unaffected.", isCorrect: false },
      { text: "The trade balance moves toward surplus, and equilibrium income decreases.", isCorrect: false },
      { text: "The trade balance is unaffected, and equilibrium income decreases.", isCorrect: false }
    ],
    explanation: {
      ko: {
        concept: "🔄 순수출과 균형 소득",
        steps: [
          "소비자들이 수입품 구매를 늘리고 국내 상품 구매를 줄이면, 순수출(Net Exports = Exports - Imports)이 감소합니다.",
          "순수출 감소는 총수요(AD)를 감소시킵니다 (AD = C + I + G + NX).",
          "총수요가 감소하면 단기적으로 균형 소득(equilibrium income) 또는 실질 GDP가 감소합니다.",
          "동시에 수입이 증가했으므로 무역수지(trade balance)는 적자 방향으로 움직입니다."
        ],
        distractors: [
          "다른 선택지들은 순수출 감소가 균형 소득과 무역수지에 미치는 영향을 잘못 설명하고 있습니다."
        ],
        summary: "수입 증가는 순수출을 감소시켜 총수요를 줄이고, 이는 단기 균형 국민소득을 감소시키며 무역수지를 악화시킵니다."
      },
      en: {
        concept: "🔄 Net Exports and Equilibrium Income",
        steps: [
          "If consumers buy more imported goods and fewer domestic goods, net exports (Exports - Imports) will decrease.",
          "A decrease in net exports leads to a decrease in aggregate demand (AD = C + I + G + NX).",
          "A decrease in aggregate demand causes the equilibrium income (or real GDP) to decrease in the short run.",
          "Simultaneously, since imports have increased, the trade balance moves toward a deficit."
        ],
        distractors: [
          "The other options incorrectly state the effects of a decrease in net exports on equilibrium income and the trade balance."
        ],
        summary: "An increase in imports reduces net exports, which decreases aggregate demand. This leads to a lower short-run equilibrium income and a worsening of the trade balance."
      }
    },
    tags: ['총수요', '국제무역', '국민소득'],
    difficulty: '중간'
  },
  {
    id: "2013-56", year: 2013, questionNumber: 56,
    questionText: "If the aggregate supply curve is horizontal, an increase in government spending will result in which of the following?",
    answerOptions: [
      { text: "Real Output: Increase, Price Level: Increase", isCorrect: false },
      { text: "Real Output: Increase, Price Level: No change", isCorrect: true },
      { text: "Real Output: Increase, Price Level: Decrease", isCorrect: false },
      { text: "Real Output: No change, Price Level: Increase", isCorrect: false },
      { text: "Real Output: No change, Price Level: No change", isCorrect: false }
    ],
    explanation: {
      ko: {
        concept: "↔️ 케인즈 구간에서의 재정정책 효과",
        steps: [
          "수평인 총공급(AS) 곡선은 '케인즈 구간(Keynesian Range)'을 나타냅니다.",
          "이 구간은 경제에 유휴 생산요소(실업 등)가 매우 많아, 물가 상승 없이도 생산량을 늘릴 수 있는 상태를 의미합니다.",
          "정부 지출 증가는 총수요(AD) 곡선을 오른쪽으로 이동시킵니다.",
          "수평인 AS 곡선 위에서 AD 곡선이 오른쪽으로 이동하면, 실질 산출량(Real Output)은 증가하지만 물가 수준(Price Level)은 변하지 않습니다."
        ],
        distractors: [
          "다른 선택지들은 수평 AS 곡선 위에서 AD가 이동할 때의 결과를 잘못 설명하고 있습니다."
        ],
        summary: "총공급곡선이 수평인 케인즈 구간에서는 확장적 재정정책이 물가 상승 없이 실질 산출량만 증가시키는 효과를 가집니다."
      },
      en: {
        concept: "↔️ Effects of Fiscal Policy in the Keynesian Range",
        steps: [
          "A horizontal aggregate supply (AS) curve represents the 'Keynesian Range'.",
          "This range signifies an economy with significant idle resources (e.g., high unemployment), where output can be increased without any upward pressure on the price level.",
          "An increase in government spending shifts the aggregate demand (AD) curve to the right.",
          "When the AD curve shifts rightward along a horizontal AS curve, real output increases, but the price level remains unchanged."
        ],
        distractors: [
          "The other options incorrectly describe the outcome of an AD shift along a horizontal AS curve."
        ],
        summary: "In the Keynesian range, where the AS curve is horizontal, expansionary fiscal policy increases real output without causing inflation."
      }
    },
    tags: ['AD-AS 모형', '재정정책', '케인즈 경제학'],
    difficulty: '중간'
  },
  {
    id: "2013-57", year: 2013, questionNumber: 57,
    questionText: "Assume that the Federal Reserve pursues a contractionary monetary policy. Based on the resulting change in the interest rate, what will happen to the international value of the dollar, United States imports, and United States exports?",
    answerOptions: [
      { text: "International Value of the Dollar: Increase, United States Imports: Increase, United States Exports: Increase", isCorrect: false },
      { text: "International Value of the Dollar: Increase, United States Imports: Increase, United States Exports: Decrease", isCorrect: true },
      { text: "International Value of the Dollar: Increase, United States Imports: Decrease, United States Exports: Increase", isCorrect: false },
      { text: "International Value of the Dollar: Decrease, United States Imports: Increase, United States Exports: Decrease", isCorrect: false },
      { text: "International Value of the Dollar: Decrease, United States Imports: Decrease, United States Exports: Increase", isCorrect: false }
    ],
    explanation: {
      ko: {
        concept: "🏦 긴축 통화정책의 국제적 파급효과",
        steps: [
          "1. 긴축 통화정책은 통화 공급을 줄여 국내 이자율을 상승시킵니다.",
          "2. 높은 이자율은 더 높은 금융 수익을 추구하는 해외 자본을 유치합니다. 이는 달러에 대한 수요를 증가시킵니다.",
          "3. 달러 수요 증가는 달러의 국제적 가치를 상승(Increase)시킵니다 (달러 강세).",
          "4. 달러 가치 상승은 미국인에게 수입품 가격을 더 저렴하게 만들므로, 미국 수입(Imports)은 증가(Increase)합니다.",
          "5. 반면, 외국인에게 미국 수출품 가격은 더 비싸지므로, 미국 수출(Exports)은 감소(Decrease)합니다."
        ],
        distractors: [
          "다른 선택지들은 연쇄 효과를 잘못 연결하고 있습니다."
        ],
        summary: "긴축 통화정책은 이자율 상승 → 자본 유입 → 통화가치 상승 → 수입 증가 및 수출 감소로 이어집니다."
      },
      en: {
        concept: "🏦 International Effects of Contractionary Monetary Policy",
        steps: [
          "1. Contractionary monetary policy reduces the money supply, leading to higher domestic interest rates.",
          "2. Higher interest rates attract foreign financial capital seeking better returns. This increases the demand for the dollar.",
          "3. The increased demand for the dollar causes its international value to increase (appreciate).",
          "4. A stronger dollar makes imported goods cheaper for Americans, so U.S. imports increase.",
          "5. Conversely, a stronger dollar makes U.S. exports more expensive for foreigners, so U.S. exports decrease."
        ],
        distractors: [
          "The other options incorrectly link the chain of effects."
        ],
        summary: "Contractionary monetary policy leads to higher interest rates → capital inflow → currency appreciation → an increase in imports and a decrease in exports."
      }
    },
    tags: ['통화정책', '환율', '국제무역'],
    difficulty: '어려움'
  },
  {
    id: "2013-58", year: 2013, questionNumber: 58,
    questionText: "Expansionary fiscal policy will most likely result in",
    answerOptions: [
      { text: "a decrease in the money supply", isCorrect: false },
      { text: "an increase in the marginal propensity to consume", isCorrect: false },
      { text: "an increase in nominal interest rates", isCorrect: true },
      { text: "a decrease in the level of output", isCorrect: false },
      { text: "a decrease in the price level", isCorrect: false }
    ],
    explanation: {
      ko: {
        concept: "Crowding-Out Effect",
        steps: [
          "확장적 재정정책(예: 정부지출 증가)은 총수요를 증가시켜 국민소득을 늘립니다.",
          "소득이 증가하면 사람들은 더 많은 거래를 위해 화폐 보유를 늘리려 하므로, 화폐 수요가 증가합니다.",
          "또한, 정부가 재정적자를 메우기 위해 대부자금 시장에서 차입을 늘리면, 대부자금 수요가 증가합니다.",
          "화폐 수요 증가와 대부자금 수요 증가는 모두 명목 이자율(nominal interest rates)을 상승시키는 요인입니다. 이를 '구축효과(crowding-out effect)'라고 합니다."
        ],
        distractors: [
          "A: 통화 공급은 통화정책의 영역입니다.",
          "B: 한계소비성향은 단기적으로 안정적인 값으로 간주됩니다.",
          "D, E: 확장적 재정정책은 산출량과 물가 수준을 증가시킵니다."
        ],
        summary: "확장적 재정정책은 소득 증가에 따른 화폐 수요 증가와 정부 차입 증가로 인해 이자율을 상승시키는 경향이 있습니다."
      },
      en: {
        concept: "Crowding-Out Effect",
        steps: [
          "Expansionary fiscal policy (e.g., increased government spending) increases aggregate demand, which raises national income.",
          "As income rises, people wish to hold more money for transactions, increasing the demand for money.",
          "Additionally, if the government finances its spending by borrowing, it increases the demand for loanable funds.",
          "Both the increase in money demand and the increase in demand for loanable funds will lead to an increase in nominal interest rates. This is known as the crowding-out effect."
        ],
        distractors: [
          "A: The money supply is determined by monetary policy.",
          "B: The marginal propensity to consume is generally considered stable in the short run.",
          "D, E: Expansionary fiscal policy increases output and the price level."
        ],
        summary: "Expansionary fiscal policy tends to raise interest rates due to increased money demand from higher income and increased government borrowing."
      }
    },
    tags: ['재정정책', '이자율', '구축효과'],
    difficulty: '중간'
  },
  {
    id: "2013-59", year: 2013, questionNumber: 59,
    questionText: "If a country has a deficit in its current account, there will be a",
    answerOptions: [
      { text: "surplus in the financial account (formerly called capital account)", isCorrect: true },
      { text: "surplus in the trade balance", isCorrect: false },
      { text: "surplus in the balance of payments", isCorrect: false },
      { text: "deficit in the financial account (formerly called capital account)", isCorrect: false },
      { text: "deficit in the balance of payments", isCorrect: false }
    ],
    explanation: {
      ko: {
        concept: "⚖️ 국제수지(Balance of Payments)의 균형",
        steps: [
          "국제수지(BOP)는 경상계정(Current Account)과 금융계정(Financial Account, 과거 자본계정 포함)의 합으로 구성됩니다. (BOP = CA + FA)",
          "이론적으로 국제수지는 항상 0으로 균형을 이룹니다.",
          "따라서 경상계정이 적자(CA < 0)라면, 이를 상쇄하기 위해 금융계정은 반드시 흑자(FA > 0)여야 합니다.",
          "경상수지 적자는 수입이 수출보다 많다는 의미이며, 이 차액은 해외로부터 자본을 빌려오거나(자본 유입) 해외 자산을 파는 방식으로 메워야 합니다. 이는 금융계정 흑자로 기록됩니다."
        ],
        distractors: [
          "B: 경상수지 적자는 보통 무역수지 적자를 포함합니다.",
          "C, E: 국제수지 자체는 항상 균형을 이룹니다 (0)."
        ],
        summary: "국제수지 균형 원리에 따라, 한 국가의 경상수지 적자는 반드시 동일한 금액의 금융수지 흑자에 의해 상쇄됩니다."
      },
      en: {
        concept: "⚖️ Balancing the Balance of Payments",
        steps: [
          "The Balance of Payments (BOP) is composed of the Current Account (CA) and the Financial Account (FA, formerly including the capital account). (BOP = CA + FA)",
          "In theory, the BOP must always balance to zero.",
          "Therefore, if the Current Account is in deficit (CA < 0), the Financial Account must be in surplus (FA > 0) to offset it.",
          "A current account deficit means a country is importing more than it exports. This difference must be financed by borrowing from abroad or selling foreign assets (a capital inflow), which is recorded as a surplus in the financial account."
        ],
        distractors: [
          "B: A current account deficit usually includes a trade deficit.",
          "C, E: The overall balance of payments always balances to zero."
        ],
        summary: "Due to the principles of balance of payments accounting, a country's current account deficit must be matched by an equal financial account surplus."
      }
    },
    tags: ['국제무역', '국제수지'],
    difficulty: '중간'
  },
  {
    id: "2013-60", year: 2013, questionNumber: 60,
    questionText: "Which of the following will shift the aggregate demand curve to the right?",
    answerOptions: [
      { text: "A report that corporate earnings were lower than expected", isCorrect: false },
      { text: "An increase in interest rates caused by a tightening of monetary policy", isCorrect: false },
      { text: "Increased imports caused by appreciation of the dollar", isCorrect: false },
      { text: "Increased spending by businesses on computers", isCorrect: true },
      { text: "An increase in the government's budget surplus", isCorrect: false }
    ],
    explanation: {
      ko: {
        concept: "➡️ 총수요(AD) 증가 요인",
        steps: [
          "총수요(AD) 곡선을 오른쪽으로 이동시키는 것은 총수요의 구성요소인 소비(C), 투자(I), 정부지출(G), 순수출(NX) 중 하나가 증가하는 것을 의미합니다.",
          "기업이 컴퓨터에 대한 지출을 늘리는 것은 투자(Investment, I) 지출의 증가에 해당합니다.",
          "투자가 증가하면 총수요가 증가하여 AD 곡선이 오른쪽으로 이동합니다."
        ],
        distractors: [
          "A: 기업 실적 악화는 투자를 위축시켜 AD를 왼쪽으로 이동시킵니다.",
          "B: 이자율 인상은 투자와 소비를 감소시켜 AD를 왼쪽으로 이동시킵니다.",
          "C: 수입 증가는 순수출을 감소시켜 AD를 왼쪽으로 이동시킵니다.",
          "E: 정부 재정흑자 증가는 정부지출 감소 또는 세금 인상을 의미하므로 AD를 왼쪽으로 이동시킵니다."
        ],
        summary: "총수요는 소비, 투자, 정부지출, 순수출의 합이며, 이 중 어느 요소라도 증가하면 총수요 곡선은 오른쪽으로 이동합니다."
      },
      en: {
        concept: "➡️ Factors that Increase Aggregate Demand (AD)",
        steps: [
          "A rightward shift of the Aggregate Demand (AD) curve is caused by an increase in any of its components: Consumption (C), Investment (I), Government Spending (G), or Net Exports (NX).",
          "Increased spending by businesses on computers is an increase in Investment (I) spending.",
          "An increase in investment leads to an increase in aggregate demand, shifting the AD curve to the right."
        ],
        distractors: [
          "A: Lower corporate earnings would discourage investment, shifting AD left.",
          "B: Higher interest rates reduce investment and consumption, shifting AD left.",
          "C: Increased imports reduce net exports, shifting AD left.",
          "E: An increase in the budget surplus implies lower government spending or higher taxes, shifting AD left."
        ],
        summary: "Aggregate demand is the sum of C + I + G + NX. An increase in any of these components will shift the AD curve to the right."
      }
    },
    tags: ['총수요', 'AD-AS 모형'],
    difficulty: '쉬움'
  }  
];


// --- 필터링 옵션 데이터 ---
const filterOptions = {
    years: [...new Set(allQuestions.map(q => q.year))].sort((a, b) => b - a),
    tags: [...new Set(allQuestions.flatMap(q => q.tags))].sort(),
    difficulties: ['쉬움', '중간', '어려움'],
};

// --- 차트 및 텍스트 렌더링 컴포넌트 ---
const CustomTooltip = ({ active, payload, label }) => { if (active && payload && payload.length) { return ( <div className="p-2 bg-slate-700 text-white rounded-md shadow-lg text-sm"><p className="font-bold">{`${label}`}</p><p className="">{`Value: ${payload[0].value}`}</p></div> ); } return null; };

const GenericLineChart = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data.points} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="x" type="number" domain={['dataMin - 1', 'dataMax + 1']} tick={{ fontSize: 12 }} label={{ value: data.xAxisLabel, position: 'bottom', offset: 0 }} />
            <YAxis type="number" domain={['dataMin - 1', 'dataMax + 1']} tick={{ fontSize: 12 }} label={{ value: data.yAxisLabel, angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="rgba(79, 70, 229, 1)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        </LineChart>
    </ResponsiveContainer>
);

const RenderQuestionText = ({ text }) => {
    const parts = text.split('\n\n');
    return (
        <div>
            {parts.map((part, index) => {
                if (part.startsWith('|') && part.endsWith('|')) {
                    const rows = part.split('\n').filter(row => row.trim() !== '' && !row.startsWith('|---'));
                    const header = rows[0].split('|').slice(1, -1).map(h => h.trim());
                    const body = rows.slice(1).map(r => r.split('|').slice(1, -1).map(c => c.trim()));
                    return (
                        <div key={index} className="my-4 overflow-x-auto">
                            <table className="min-w-full divide-y divide-slate-300 border border-slate-300">
                                <thead className="bg-slate-50"><tr>{header.map((h, i) => <th key={i} className="px-4 py-2 text-left text-sm font-semibold text-slate-900">{h}</th>)}</tr></thead>
                                <tbody className="divide-y divide-slate-200 bg-white">{body.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j} className="whitespace-nowrap px-4 py-2 text-sm text-slate-600">{cell}</td>)}</tr>)}</tbody>
                            </table>
                        </div>
                    );
                }
                
                const textParts = part.split(/(x̄|μ|σ|p̂|H₀|Hₐ|≠|<|>|≤|≥|√)/g);
                return (
                    <p key={index} className="mb-2">
                        {textParts.map((subPart, subIndex) => {
                            if (subPart === 'x̄') return <span key={subIndex} className="inline-block relative">x<span className="absolute top-[-0.4em] left-0 w-full h-px bg-current"></span></span>;
                            if (['μ', 'σ', 'p̂', 'H₀', 'Hₐ', '≠', '<', '>', '≤', '≥', '√'].includes(subPart)) return <span key={subIndex} className="font-mono">{subPart}</span>;
                            return <span key={subIndex}>{subPart}</span>;
                        })}
                    </p>
                );
            })}
        </div>
    );
};


// --- 페이지 컴포넌트들 ---

const Dashboard = ({ onNavigate }) => {
    return (
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-lg p-3 mb-4">
                    <BrainCircuit size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Drill Engine</h3>
                <p className="text-slate-500 mb-4 flex-grow">연도, 문제 유형, 난이도별로 문제를 선택하여 취약점을 집중 공략하세요.</p>
                <button onClick={() => onNavigate('drill')} className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">드릴 시작하기</button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start hover:shadow-xl transition-shadow">
                 <div className="flex items-center justify-center bg-teal-100 text-teal-600 rounded-lg p-3 mb-4">
                    <FileText size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">연도별 모의고사</h3>
                <p className="text-slate-500 mb-4 flex-grow">특정 연도의 기출문제 전체를 풀어보며 실전 감각을 키우세요.</p>
                <button onClick={() => onNavigate('practice_test_selection')} className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors">모의고사 선택</button>
            </div>
        </div>
    );
};

const PracticeTestSelection = ({ onStartTest, onBack }) => {
    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">연도별 모의고사 선택</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filterOptions.years.map(year => (
                    <button key={year} onClick={() => onStartTest(year)} className="p-4 bg-white border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-100 hover:border-slate-400 transition-colors">
                        {year}년 시험
                    </button>
                ))}
            </div>
            <button onClick={onBack} className="mt-6 text-sm text-indigo-600 hover:underline">뒤로 가기</button>
        </div>
    );
};

const DrillEngine = ({ onStartDrill, questionCount }) => {
    const [selectedYears, setSelectedYears] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedDifficulties, setSelectedDifficulties] = useState([]);

    const handleFilterToggle = (filter, setFilter, value) => setFilter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
    
    const countFilteredQuestions = () => allQuestions.filter(q => 
        (selectedYears.length === 0 || selectedYears.includes(q.year)) &&
        (selectedTags.length === 0 || selectedTags.some(tag => q.tags.includes(tag))) &&
        (selectedDifficulties.length === 0 || selectedDifficulties.includes(q.difficulty))
    ).length;

    const handleStart = () => onStartDrill({ years: selectedYears, tags: selectedTags, difficulties: selectedDifficulties });

    const FilterSection = ({ title, options, selected, onToggle }) => {
        const [isOpen, setIsOpen] = useState(true);
        return (
            <div className="border-b border-slate-200">
                <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-4 hover:bg-slate-50 transition-colors">
                    <span className="font-semibold text-slate-700">{title}</span>
                    <ChevronDown className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                    <div className="p-4 grid grid-cols-3 md:grid-cols-5 gap-2">
                        {options.map(option => (
                            <button key={option} onClick={() => onToggle(option)} className={`p-2 text-sm rounded-md border transition-colors ${selected.includes(option) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 hover:bg-indigo-100 hover:border-indigo-300'}`}>
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800">Drill Engine</h2>
                <p className="text-slate-500 mt-1">총 {questionCount}개의 문제 중에서 원하는 조건으로 문제를 풀어보세요.</p>
            </div>
            <FilterSection title="연도 선택" options={filterOptions.years} selected={selectedYears} onToggle={(val) => handleFilterToggle(selectedYears, setSelectedYears, val)} />
            <FilterSection title="문제 유형" options={filterOptions.tags} selected={selectedTags} onToggle={(val) => handleFilterToggle(selectedTags, setSelectedTags, val)} />
            <FilterSection title="난이도" options={filterOptions.difficulties} selected={selectedDifficulties} onToggle={(val) => handleFilterToggle(selectedDifficulties, setSelectedDifficulties, val)} />
            <div className="p-4 bg-slate-50">
                <button onClick={handleStart} className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-slate-400" disabled={countFilteredQuestions() === 0}>
                    <Search size={20} />
                    <span>{countFilteredQuestions()}개 문제로 드릴 시작하기</span>
                </button>
            </div>
        </div>
    );
};

const PracticeSession = ({ questions, onBack, title }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionStatuses, setQuestionStatuses] = useState([]);
    const [sessionEnded, setSessionEnded] = useState(false);
    const [explanationLang, setExplanationLang] = useState('ko');

    useEffect(() => {
        setQuestionStatuses(questions.map(() => ({ status: 'unanswered', selected: null })));
        setCurrentQuestionIndex(0);
        setSessionEnded(false);
    }, [questions]);

    const handleAnswerClick = (selectedIndex) => {
        if (questionStatuses[currentQuestionIndex]?.status !== 'unanswered') return;

        const isCorrect = questions[currentQuestionIndex].answerOptions[selectedIndex].isCorrect;
        const newStatuses = [...questionStatuses];
        newStatuses[currentQuestionIndex] = { status: isCorrect ? 'correct' : 'incorrect', selected: selectedIndex };
        setQuestionStatuses(newStatuses);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setSessionEnded(true);
        }
    };
    
    const navigateToQuestion = (index) => {
        setCurrentQuestionIndex(index);
    };
    
    const ExplanationRenderer = ({ explanation }) => {
        if (typeof explanation === 'string') {
            return <p className="text-sm text-slate-600">{explanation}</p>;
        }
        
        const langData = explanation[explanationLang];
        if (!langData) return null;

        return (
            <div className="space-y-3 text-sm">
                <h4 className="font-bold text-slate-800">{langData.concept}</h4>
                <div className="pl-4 border-l-2 border-indigo-200">
                    <h5 className="font-semibold text-slate-700 mb-1">단계별 풀이</h5>
                    <ul className="list-decimal list-inside space-y-1 text-slate-600">
                        {langData.steps.map((step, i) => <li key={i}>{step}</li>)}
                    </ul>
                </div>
                 <div className="pl-4 border-l-2 border-red-200">
                    <h5 className="font-semibold text-slate-700 mb-1">오답 분석</h5>
                    <div className="space-y-1 text-slate-600">
                        {langData.distractors.map((d, i) => <p key={i}>{d}</p>)}
                    </div>
                </div>
                <div className="pl-4 border-l-2 border-slate-300">
                     <h5 className="font-semibold text-slate-700 mb-1">핵심 개념</h5>
                    <p className="text-slate-600">{langData.summary}</p>
                </div>
            </div>
        );
    };

    if (!questions || questions.length === 0) {
        return (
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                <p className="text-slate-600 mb-4">선택된 조건에 맞는 문제가 없습니다.</p>
                <button onClick={onBack} className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700">필터로 돌아가기</button>
            </div>
        );
    }
    
    if (sessionEnded) {
        const score = questionStatuses.filter(s => s.status === 'correct').length;
        return (
            <div className="w-full max-w-3xl text-center p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">세션 결과</h2>
                <p className="text-4xl font-bold text-indigo-600 mb-6">{score} / {questions.length}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {questionStatuses.map((status, index) => {
                        const baseStyle = "w-8 h-8 flex items-center justify-center rounded font-semibold text-xs ";
                        let statusStyle = "";
                        if (status.status === 'correct') statusStyle = "bg-green-500 text-white";
                        else if (status.status === 'incorrect') statusStyle = "bg-red-500 text-white";
                        else statusStyle = "bg-slate-200 text-slate-600";
                        return <div key={index} className={baseStyle + statusStyle}>{index + 1}</div>
                    })}
                </div>
                <button onClick={onBack} className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700">대시보드로 돌아가기</button>
            </div>
        );
    }
    
    const currentQuestion = questions[currentQuestionIndex];
    const currentStatus = questionStatuses[currentQuestionIndex];
    
    if (!currentQuestion || !currentStatus) {
        return <div className="w-full max-w-3xl text-center p-8">Loading question...</div>;
    }

    const showFeedback = currentStatus.status !== 'unanswered';

    const renderChart = (question) => {
        switch (question.chartType) {
            case 'LineChart': return <GenericLineChart data={question.chartData} />;
            default: return null;
        }
    };

    return (
        <div className="w-full max-w-4xl">
            <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">{title} - 문제 네비게이션</h3>
                <div className="flex flex-wrap gap-2">
                    {questions.map((q, index) => {
                        const status = questionStatuses[index]?.status;
                        let statusStyle = "bg-slate-200 hover:bg-slate-300 text-slate-700";
                        if (index === currentQuestionIndex) statusStyle = "bg-indigo-600 text-white ring-2 ring-offset-2 ring-indigo-500";
                        else if (status === 'correct') statusStyle = "bg-green-100 text-green-700 hover:bg-green-200";
                        else if (status === 'incorrect') statusStyle = "bg-red-100 text-red-700 hover:bg-red-200";

                        return (
                            <button key={q.id} onClick={() => navigateToQuestion(index)} className={`w-8 h-8 flex items-center justify-center rounded font-semibold text-xs transition-colors ${statusStyle}`}>
                                {index + 1}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
                <div className="flex justify-between items-center mb-4"><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-100">{currentQuestion.year} / Q{currentQuestion.questionNumber} / {currentQuestion.difficulty}</span><button onClick={onBack} className="text-sm text-indigo-600 hover:underline">세션 종료</button></div>
                <div className="text-lg md:text-xl font-semibold text-slate-800 mb-4 leading-relaxed"><RenderQuestionText text={currentQuestion.questionText} /></div>
                {currentQuestion.chartType && <div className="my-6 p-4 bg-slate-50 rounded-lg border">{renderChart(currentQuestion)}</div>}
                <div className="space-y-3">
                    {currentQuestion.answerOptions.map((option, index) => {
                        let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ease-in-out flex items-center";
                        if (showFeedback) {
                            if (option.isCorrect) buttonClass += " bg-green-100 border-green-500 text-green-800 font-bold ring-2 ring-green-500";
                            else if (currentStatus.selected === index) buttonClass += " bg-red-100 border-red-500 text-red-800";
                            else buttonClass += " bg-slate-50 border-slate-200 text-slate-500 cursor-not-allowed opacity-70";
                        } else {
                            buttonClass += " bg-white border-slate-300 hover:bg-indigo-50 hover:border-indigo-400";
                        }
                        return <button key={index} onClick={() => handleAnswerClick(index)} disabled={showFeedback} className={buttonClass}><span className="flex items-center justify-center w-6 h-6 mr-4 font-bold text-sm border-2 border-slate-400 rounded-full flex-shrink-0">{String.fromCharCode(65 + index)}</span><span>{option.text}</span></button>;
                    })}
                </div>
                {showFeedback && <div className="mt-6"><div className="p-4 rounded-lg bg-slate-50 border border-slate-200"><div className="flex justify-between items-center mb-2"><h3 className={`flex items-center gap-2 font-bold text-lg ${currentQuestion.answerOptions[currentStatus.selected].isCorrect ? 'text-green-700' : 'text-red-700'}`}>{currentQuestion.answerOptions[currentStatus.selected].isCorrect ? <Check size={20}/> : <AlertCircle size={20}/>}{currentQuestion.answerOptions[currentStatus.selected].isCorrect ? "정답입니다!" : "오답입니다"}</h3><button onClick={() => setExplanationLang(prev => prev === 'ko' ? 'en' : 'ko')} className="flex items-center gap-1 text-xs bg-white border rounded-full px-2 py-1 text-slate-600 hover:bg-slate-100"><Languages size={14}/><span>{explanationLang === 'ko' ? 'EN' : '한'}</span></button></div><ExplanationRenderer explanation={currentQuestion.explanation} /></div><button onClick={handleNextQuestion} className="w-full mt-4 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700">{currentQuestionIndex === questions.length - 1 ? "결과 보기" : "다음 문제"}</button></div>}
            </div>
        </div>
    );
};

// --- 메인 앱 (페이지 관리자) ---
export default function App() {
    const [page, setPage] = useState('dashboard'); // 'dashboard', 'drill', 'practice_test_selection', 'practice'
    const [practiceProps, setPracticeProps] = useState({ questions: [], title: '' });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => { setIsLoading(false); }, []);

    const handleStartDrill = (filters) => {
        let filtered = allQuestions;
        if (filters.years.length > 0) filtered = filtered.filter(q => filters.years.includes(q.year));
        if (filters.tags.length > 0) filtered = filtered.filter(q => filters.tags.some(tag => q.tags.includes(tag)));
        if (filters.difficulties.length > 0) filtered = filtered.filter(q => filters.difficulties.includes(q.difficulty));
        
        // Shuffle the filtered questions
        let currentIndex = filtered.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [filtered[currentIndex], filtered[randomIndex]] = [filtered[randomIndex], filtered[currentIndex]];
        }

        setPracticeProps({ questions: filtered, title: 'Drill Session' });
        setPage('practice');
    };
    
    const handleStartPracticeTest = (year) => {
        const testQuestions = allQuestions
            .filter(q => q.year === year)
            .sort((a, b) => a.questionNumber - b.questionNumber);
        setPracticeProps({ questions: testQuestions, title: `${year}년 모의고사` });
        setPage('practice');
    };

    const handleEndPractice = () => {
        setPage('dashboard');
        setPracticeProps({ questions: [], title: '' });
    };

    const renderPage = () => {
        switch (page) {
            case 'drill':
                return <DrillEngine onStartDrill={handleStartDrill} questionCount={allQuestions.length} />;
            case 'practice_test_selection':
                return <PracticeTestSelection onStartTest={handleStartPracticeTest} onBack={() => setPage('dashboard')} />;
            case 'practice':
                return <PracticeSession questions={practiceProps.questions} title={practiceProps.title} onBack={handleEndPractice} />;
            case 'dashboard':
            default:
                return <Dashboard onNavigate={setPage} />;
        }
    };

    if(isLoading) {
        return <div className="min-h-screen flex items-center justify-center"><p>AP Econ Lab 불러오는 중...</p></div>
    }

    return (
        <div className="min-h-screen bg-slate-100 font-sans p-4">
            <div className="w-full max-w-7xl mx-auto">
                <header className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage('dashboard')}>
                        <Landmark className="text-indigo-600" size={32}/>
                        <h1 className="text-3xl font-bold text-slate-800">하이 하준</h1>
                    </div>
                    <nav className="flex items-center gap-4">
                        <button onClick={() => setPage('dashboard')} className={`flex items-center gap-2 p-2 rounded-md ${page === 'dashboard' ? 'text-indigo-600 bg-indigo-100' : 'text-slate-600 hover:bg-slate-200'}`}><Home size={18}/> 대시보드</button>
                    </nav>
                </header>
                <main className="flex justify-center">
                    {renderPage()}
                </main>
            </div>
        </div>
    );
}
