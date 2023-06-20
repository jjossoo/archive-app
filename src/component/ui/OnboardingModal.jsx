import React, { useState } from 'react';
import './OnboardingModal.css';
import ButtonUI from './Button/Button';

const Modal = ({ showModal, setShowModal }) => {

  const [Lselect, setLselect] = useState(true);
  const [Rselect, setRselect] = useState('');


  const [showSubModal, setShowSubModal] = useState(false);
  const buttonData = ['AI', '메타버스', '스마트 맥토리', '디지털 트윈', '키즈', '교육', '친환경','IT & 기술', '헬스케어', '라이프 스타일', '모빌리티', '레저', '게임', '식단관리', '식물', '동물', '커뮤니티'];

  const handleImageClick = () => {
    setShowSubModal(true);
  };

    const handleCloseModal = () => {
    setShowModal(false);
    setShowSubModal(false);
  };

  
  return (
    <>
      {showModal && (
        <div className="modal">

          <div className="modal-content">
            <h2>회원님이 속한 유형을 선택해주세요</h2>
            <p>유형에 따라서 사용할 수 있는 페이지가 달라져요</p>
            
            <div className="choose">

              <div onClick={function(){setLselect(true); setRselect(false)}} className={Lselect?'choose-boxLine':'choose-box'}>
                <img src="https://i.postimg.cc/T3nrfb59/undraw-reminder-re-fe15-1.png" width={120}></img>
                <h3>개인회원</h3>
                <p>자신의 포트폴리오와 함께 이력서를 작성해요.</p>
              </div>

              <div onClick={function(){setLselect(false); setRselect(true)}} className={Rselect?'choose-boxLine':'choose-box'}>
                <img src="https://i.postimg.cc/pdfbfshF/undraw-landscape-photographer-p29t-1.png" width={170}></img>
                <h3>기업회원</h3>
                <p>기업에 잘 맞아 보이는 인재를 찾아요.</p>
              </div>

            </div>

            <div className="button-area">
              <button className="close-button" onClick={handleImageClick}>
                적용하기
              </button>
            </div>

          </div>
        </div>
      )}
      {showSubModal && (
        <div className="sub-modal">
          <div className="sub-modal-content">
            <h2>관심있어하는 영역을 골라주세요!</h2>
            <p>최대한 가까운 작품들을 골라서 보여드릴게요!</p>
            <span>당신의 관심사는?</span>

            <div className='filter'>
            {buttonData.map((button, index) => (
              <ButtonUI text={button} key={index}/>
              // <button className='b-f' key={index}>{button}</button>
            ))}
            </div>
            <div className='button-area'>
            <button className="close-button down" onClick={() => {setShowModal(false); setShowSubModal(false);}}>
              시작하기
            </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



const OnboardingModal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="App">
      <div className="v">
      <button className="G" onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
    </div>
  );
};

export default OnboardingModal;
