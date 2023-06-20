import React, { useState, useEffect } from 'react';
import ModalText from '../ui/ModalText';
import './ProjectDetailPage.css';
import {db} from '../../firebase';
import projectImage from '../../img/Project/2.png';

const Modal = ({ showModal, setShowModal }) => {

  const [goodtext, setGoodtext] = useState('');
  const [badtext, setBadtext] = useState('');

  const [data, setData] = useState()

  useEffect(function(){
    let tempData = []
    db.collection('post').get().then(function(qs){
      qs.forEach(function(doc){
        tempData.push(doc.data())
      })
      setData(tempData)
      console.log(data)
    })
  },[])

  return (
    <>
      {showModal && (
        <div className="modal">

          <div className="modal-content">
            <div className='modal-p'>
              <p>박건도</p>
              <p>미디어디자인공학과</p>
            </div>
            
            <div className='sub-title'>
              <h3>스크랩 내용</h3>
              <p></p>
            </div>

            <div className='cards'>
              <ModalText title={'좋았던 점'} value={goodtext} onChange = {function(e){setGoodtext(e.target.value)}}/>
              <ModalText title={'아쉬웠던 점'} value={badtext} onChange = {function(e){setBadtext(e.target.value);}}/>
            </div>

            <div className="button-area">
              <button className="close-button" onClick={() => setShowModal(false)}>
              <img src='https://i.postimg.cc/c4QLZbNG/Frame-3900.png' width={30}></img>
              스크랩하기
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};



const ProjectDetailPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
    
      <div className="Top">
        <span class="material-symbols-outlined">arrow_back_ios</span>
        <h1>2020</h1>
        <h1>미디어 디자인</h1>
        <h1>UI/UX</h1>
        <h1>교육</h1>
      </div>

      <div className="scroll">
        <div className="info">
          <img src='https://i.postimg.cc/j2C4TcPf/image.png' width={40} height={40}></img>
          <div className="info-w">
            <h2>FASOTEL</h2>
            <div className='info-wh'>
              <p>박건도</p>
              <p>미디어디자인공학과</p>
            </div>
          </div>
        </div>
        <div className="image">
        <img src={projectImage}  width={1268}/>
        </div>

        <div className='B'>
        <button className='Button' onClick={() => setShowModal(true)}><img src='https://i.postimg.cc/3r1n4LB2/Frame-163.png' width={50}>
        </img></button> <p>스크랩</p>
      </div>

      </div>
      
      
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
    
  );
};

export default ProjectDetailPage;

