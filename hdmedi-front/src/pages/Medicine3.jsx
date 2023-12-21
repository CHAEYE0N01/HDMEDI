import React, { useState } from 'react';
import './Information.css'; // Make sure to create an accompanying CSS file for styling
import logo from "./iyac.png";
import img from "./imgs/하트반정.png";
import medicationInfo from './family_results/mother.json';

function Precautions() {
  const [activeDetails, setActiveDetails] = useState(null);

  // 'original' 키 제외
  const sortedCategories = Object.keys(medicationInfo).filter((key) => key !== 'original');

  // 토글 상세 정보 활성화/비활성화
  const toggleDetails = (category) => {
    if (activeDetails === category) {
      setActiveDetails(null);
    } else {
      setActiveDetails(category);
    }
  };

  return (
    <div>
      {/* 주의사항 탭 - 토글 */}
      {sortedCategories.map((category) => (
        <div key={category} className="precautions-section">
          <button
            className={`precautions-button ${activeDetails === category ? 'active' : ''}`}
            onClick={() => toggleDetails(category)}
          >
            <span className={`triangle ${activeDetails === category ? 'rotated' : ''}`}></span>
            {category}
          </button>
          {activeDetails === category && (
            <div className="precautions-content">
              <pre className="precautions-text">{medicationInfo[category]}</pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


// 화면 구성
const Information = () => {
  const [activeTab, setActiveTab] = useState('general');  
  const [showPopup, setShowPopup] = useState(false);        // 복약지도 전문 팝업
  const [activeDetails, setActiveDetails] = useState(null); // 사용자 맞춤 복약지도

  // 탭 - 기본정보, 주의사항, 리뷰
 
  const togglePopup = () => setShowPopup(!showPopup);

  const toggleDetails = (category) => {
    setActiveDetails(activeDetails === category ? null : category);
  };

  const tabStyle = (tabName) => ({
    padding: '10px 20px',
    borderBottom: activeTab === tabName ? '2px solid blue' : '2px solid transparent',
    cursor: 'pointer'
  });

  // 주의사항 원문 HTML로 변환
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  // Dummy data for demonstration
  const dummyData = {
    general: (
    <div className="formatted-text">
      <p><strong>용법 · 용량</strong></p>
      <ul>
        <li>40, 80, 160 mg</li>
      </ul>
      <p><strong>본태고혈압</strong></p>
      <p>
        - 본태고혈압 환자는 식사 중 물과 함께 복용하거나 식간에 복용합니다. 매일 같은 시간에 복용하는 것이 권장됩니다.
      </p>
      <p>1) 성인 : 성별, 인종에 상관없이 발사르탄으로서 1일 1회 80 mg 경구투여가 권장됩니다. 혈압강하효과는 2주 이내에 점진적으로 나타나며 4주 이후 최대효과를 나타냅니다.</p>
      <p>2) 고령자(75세 이상) : 이 약으로서 1일 1회 40 mg으로 투여를 시작합니다.</p>
      <p>3) 신장애 환자 : 크레아티닌청소율에 따라 용량을 조절하며, 투석환자에게는 사용하지 않습니다.</p>
      <p>4) 혈액 내 체액 부족 환자 : 혈액 내 체액이 부족한 환자의 경우, 이 약으로서 1일 1회 40 mg으로 투여를 시작합니다.</p>
      <p>5) 간장애 환자 : 중증의 간장애, 간경화, 담즙정체환자에게 이 약을 투여하지 않습니다.</p>
      <p>6) 소아 : 18세 미만 소아 및 청소년에서 안전성, 유효성이 확립되어 있지 않습니다.</p>
      <p><strong>심부전</strong></p>
      <p>
        - 성인 심부전 환자는 1일 2회로 분할하여 1회 40 mg 경구투여가 권장되며, 1일 최대 투여량은 320 mg입니다. ACE억제제와 베타차단제와의 3중 병용투여는 권장되지 않습니다.
      </p>
      <p><strong>심근경색 후의 사망 위험성 감소</strong></p>
      <p>
        - 성인 심근경색 환자는 심근경색 발현 후 12시간 이내에 투여를 시작할 수 있습니다. 개시용량은 1일 2회로 시작하여 환자의 내약성을 고려하여 용량을 증량합니다.
      </p>
      <p>저혈압 증상 또는 신부전이 나타날 경우 감량을 고려합니다.</p>
      <p>심근경색 후 다른 투여법(예, 혈전용해제, 아세틸살리실산, 베타차단제 및 스타틴 계열 약물)으로 치료 중인 환자에게도 이 약을 투여할 수 있으나 ACE억제제와의 병용은 권장되지 않습니다.</p>
      <p><strong>신장애 환자</strong></p>
      <p>- 크레아티닌청소율 10 mL/min 이상인 경우 용량 조절이 필요하지 않으나, 크레아티닌청소율 10 mL/min 미만 및 투석환자에게는 사용하지 않습니다.</p>
      <p><strong>간장애 환자</strong></p>
      <p>
        - 경증 및 중등도의 간장애 환자에 대한 이 약의 1일 투여량은 1일 80 mg을 초과하지 않는 것이 바람직합니다. 중증의 간장애, 간경화, 담즙정체환자인 경우 이 약을 투여하지 않습니다.
      </p>
      <p><strong>소아</strong></p>
      <p>- 18세 미만 소아 및 청소년에서 안전성, 유효성이 확립되어 있지 않습니다.</p>
    </div>
    ),
    precautions: '복용 주의사항이 이곳에 입력됩니다.',
    reviews: '작성된 리뷰가 아직 없습니다.'
  };

  return (

    <div className="information-page">
      <img src={logo} alt="Logo" style={{ width: "120px", height: "80px"}}></img>
      
      {/* 약 이름 & 이미지 삽입 */}
      <h1 className="medication-name">하트반정80mg(발사르탄)</h1>
      <div className="image-container">
        <img src={img} alt="Medication Image" className="medication-image" />
      </div>
      {/* 탭 */}
      <div className="tabs">
        <div className={`tab ${activeTab === 'general' ? 'active' : ''}`} onClick={() => setActiveTab('general')}>
          기본정보
        </div>
        <div className={`tab ${activeTab === 'precautions' ? 'active' : ''}`} onClick={() => setActiveTab('precautions')}>
          주의사항
        </div>
        <div className={`tab ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>
          리뷰
        </div>
      </div>

      <div className="content">
        {/* 기본정보 탭 */}
        {activeTab === 'general' && (
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {dummyData.general}
          </div>
        )}
        {/* 기본정보, 리뷰 탭 */}
        {activeTab == 'reviews' && <p>{dummyData[activeTab]}</p>}
        {/* 주의사항 탭 - 토글 */}
        {activeTab === 'precautions' && (
          <Precautions activeDetails={activeDetails} toggleDetails={toggleDetails} />
        )}
      </div>

      {/* 전체 원문 보기 - 팝업 형태 */}
      <div className="full-width-button-container">
        <button className="full-width-button" onClick={togglePopup}>
          원문 보기
        </button>
      </div>

      {showPopup && (
        <div className="popup">
          <button className="close-button" onClick={togglePopup}>닫기</button>
          <pre className="popup-content">{medicationInfo['original']}</pre>
        </div>
      )}
    </div>
  );
};

export default Information;
