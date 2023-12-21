import React, { useState } from 'react';
import './Information.css'; // Make sure to create an accompanying CSS file for styling
import logo from "./iyac.png";
import img from "./imgs/라푸니정.png";
import medicationInfo from './family_results/grandfather.json';

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
        <p><strong>효능 · 효과</strong></p>
        <ol>
          <li>위궤양, 십이지장 궤양</li>
          <li>급성위염 및 만성위염의 위점막병변의 개선</li>
          <li>Helicobacter pylori에 감염된 소화성 궤양 환자에 대한 항생제 병용요법</li>
          <li>마취전 투약</li>
          <li>역류성 식도염 치료</li>
        </ol>
      </div>
    ),
    precautions: '복용 주의사항이 이곳에 입력됩니다.',
    reviews: '작성된 리뷰가 아직 없습니다.',
  };

  return (

    <div className="information-page">
      <img src={logo} alt="Logo" style={{ width: "120px", height: "80px"}}></img>
      
      {/* 약 이름 & 이미지 삽입 */}
      <h1 className="medication-name">라푸니정(라푸티딘)</h1>
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
