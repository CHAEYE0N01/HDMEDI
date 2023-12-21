import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import logo from "./iyac.png";
import './Information.css';

function User() {
    const navigate = useNavigate();

    const navigateToPharmacy = () => {
        navigate("/Pharmacy");
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center-align content horizontally
        justifyContent: "center", // Center-align content vertically
        minHeight: "100vh", // Make the container at least as tall as the viewport
    };

    const pageSizeStyle = {
        width: "98mm",
        height: "218mm",
    };

    const labelStyle = {
        marginBottom: "2%",
        marginLeft: "10%",
        alignItems:"flex-start",
        justifyContent: "flex-start",
        textAlign: "left"
    };

    const inputStyle = {
        marginLeft: "0%",
        width: "60%",
        height: "30px"
    };

    const buttonStyle = {
        width: "60%",
        height: "30px",
        backgroundColor: "#0168CF",
        color: "white",
        border: "none",
        cursor: "pointer",
        marginTop: "10px",
    };

    const informationPageStyle = {
        border: "1px solid grey",
        fontFamily: "Arial, sans-serif",
        margin: "auto",
        backgroundColor: "#f8f8f8",
        position: "relative",
      };

    const [diseases, setDiseases] = useState([""]);

    const handleAddDisease = () => {
        setDiseases([...diseases, ""]);
    };

    const handleDeleteDisease = (index) => {
        const updatedDiseases = [...diseases];
        updatedDiseases.splice(index, 1);
        setDiseases(updatedDiseases);
    };

    const handleDiseaseChange = (index, value) => {
        const updatedDiseases = [...diseases];
        updatedDiseases[index] = value;
        setDiseases(updatedDiseases);
    };

    return (
        <>
        <div className="information-page" style={informationPageStyle}>
        <div style={containerStyle}>
            <div style={pageSizeStyle}>
                <div style={labelStyle}>
                    <img src={logo} alt="Logo" style={{ width: "120px", height: "80px"}}></img>
                </div>
                <div>
                    <h4 style={labelStyle}>아이디</h4>
                    <input type="text" style={inputStyle} placeholder = "아이디를 입력해주세요."></input>
                </div>
                <div>
                    <h4 style={labelStyle}>비밀번호</h4>
                    <input type="password" style={inputStyle}  placeholder = "영문,숫자,조합 8~15자리 이내로 입력해 주세요."></input>
                </div>
                <div>
                    <h4 style={labelStyle}>이름</h4>
                    <input type="text" style={inputStyle} placeholder = "이름을 입력해주세요."></input>
                </div>
                <div>
                    <h4 style={labelStyle}>생년월일</h4>
                    <input type="date" style={inputStyle}></input>
                </div>
                <div>
                    <h4 style={labelStyle}>성별</h4>
                    <select style={inputStyle}>
                        <option value="male">남성</option>
                        <option value="female">여성</option>
                    </select>
                </div>
                <div>
                <h4 style={labelStyle}>관심 질병</h4>
                {diseases.map((disease, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <input
                            style={{
                                width: "60%",
                                height: "30px",
                                marginLeft: "20%",
                                marginRight: "1%"
                            }}
                            type="text"
                            placeholder="ex) 당뇨, 빈혈"
                            value={disease}
                            onChange={(e) => handleDiseaseChange(index, e.target.value)}
                        />
                        {index === diseases.length - 1 && (
                            <>
                                <button style={{marginRight : "3px"}} onClick={handleAddDisease}>
                                    추가
                                </button>
                                {diseases.length > 1 && (
                                    <button onClick={() => handleDeleteDisease(index)}>
                                        삭제
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                ))}
                    </div>
                    <button style={buttonStyle} onClick={navigateToPharmacy}>
                        로그인
                    </button>
                </div>
            </div>
            </div>
        </>  
        
    );
}

export default User;
