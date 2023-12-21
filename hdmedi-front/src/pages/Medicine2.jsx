import React, { useState } from 'react';
import './Information.css'; // Make sure to create an accompanying CSS file for styling
import logo from "./iyac.png";
import img from "./imgs/경방.png";
import medicationInfo from './family_results/daughter.json';

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

  // Dummy data for demonstration
  const dummyData = {
    general: (
      <div className="formatted-text">
        <p><strong>효능 · 효과</strong></p>
        <ul>
          <li><strong>유효균종</strong></li>
          <ul>
            <li>대장균, 시겔라, 살모넬라, 시트로박터, 클레브시엘라, 엔테로박터, 세라티아, 프로테우스(인돌 양성 및 음성), 슈도모나스, 나이세리아, 아시네토박터, 연쇄구균, 클라미디아, 포도구균, 박테로이드</li>
          </ul>
          <li><strong>적응증</strong></li>
          <ul>
            <li>급성 기관지염을 제외한 호흡기감염증, 지역사회감염폐렴</li>
            <li>귀․코․인후감염(인두염, 편도선염, 후두염, 외이염, 만성진주종성중이염 및 뼈로 전이된 만성중이염에 대한 수술 전 사용은 제외)</li>
            <li>세균성 전립선염, 급성단순방광염, 급성신우신염, 복잡성요로감염</li>
            <li>임균성 자궁경부염 및 임균성 요도염</li>
            <li>위장관감염증</li>
            <li>담즙분비관의 감염증</li>
            <li>피부 및 연조직의 감염과 상처</li>
            <li>골․관절의 감염증</li>
            <li>산부인과적 감염증(질 감염은 제외)</li>
            <li>복막염</li>
            <li>누낭염, 맥립종(다래끼), 검판선염</li>
          </ul>
        </ul>
        <p>이 약을 포함한 플루오로퀴놀론계 약물은 중대한 이상반응과 관련이 있으므로 급성세균성비부비동염, 만성기관지염 및 만성폐쇄성폐질환의 급성세균성악화, 단순요로감염, 급성중이염은 다른 치료 방법이 없는 환자에게 사용한다.</p>
      </div>
    ),
    precautions: '복용 주의사항이 이곳에 입력됩니다.',
    reviews: '작성된 리뷰가 아직 없습니다.'
  };

  return (

    <div className="information-page">
      <img src={logo} alt="Logo" style={{ width: "120px", height: "80px"}}></img>
      
      {/* 약 이름 & 이미지 삽입 */}
      <h1 className="medication-name">경방시프로플록사신염산염수화물정</h1>
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
