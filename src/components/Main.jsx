import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
export default function Main() {
  const state = useSelector((e)=>e);
  const dispatch =useDispatch();
  const isLocationExist = state.locationReducer.length>0 && state.locationReducer[0]!=='';
  console.log(state.locationReducer)
  const isCategorySelected = state.middleCategoryReducer.length>0;
  const title = state.middleCategoryReducer.length>1 
  ? `${state.middleCategoryReducer[0]} 외 ${state.middleCategoryReducer.length-1}개`
  : state.middleCategoryReducer[0]
  return (
    <div className="main-container">
    <div className="logo">
      <img src="saramin_logo.png" alt="" />
    </div>
    <div className='main-text'>
      <p className="top-text">내가 원하는 채용공고,</p>
      <p className="bottom-text">어디에 있는지 바로 찾아보세요.</p>
    </div>

    <div className="job">
      <span className="subject-text">직무</span>
      <span className={`select-text ${isCategorySelected ?"active":""}`}>
      {isCategorySelected?title:"선택해주세요"}
      <Link to="/jobs">
      <img className='right-arrow' src="right_arrow.png" alt="" />
        </Link>
        </span>
    </div>
    <div className="location">
    <span className="subject-text">지역</span>
    <span className={`select-text ${isLocationExist ?"active":""}`}>
      {isLocationExist?state.locationReducer.map((e)=>(e)):"선택해주세요"}
      <Link to="/location">
      <img className='right-arrow' src="right_arrow.png" alt="" />
      </Link>
      
       </span>
    </div>
    <div className='init-container'>
    {isLocationExist||isCategorySelected &&<div className='init' onClick={()=>{
      dispatch({type:"addLocation",payload:""});
      dispatch({type:"addMiddleCategory",payload:[]});
      }}>
      초기화</div>}
      {
        isLocationExist||isCategorySelected && <img className='undo' src="prime_undo.png" alt="" /> 
      }
      
    </div>
 
    <div className={`confirm-btn ${isLocationExist&&isCategorySelected ?"active": ""}`}>
      검색하기
    </div>
    
    <style jsx="true">{`
    p{
      margin:0;
    }
    .logo{
      position: absolute;
      left:9%;
      top:11%;
    }
    .init{
      position:absolute;
      bottom:421px;
      right:50px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 26px;
      color: #888888;
    }
    .undo{
      position:absolute;
      bottom:425px;
      right:90px;
    }
    .init-container{
      cursor:pointer;
    }
    .top-text{
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
    }
    .right-arrow{
      right:15px;
      position:absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    
    .bottom-text{
      font-style: normal;
      font-size: 24px;
      line-height: 36px;
      margin-bottom:20px;
    }
    .subject-text{
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      display:inline-block;
      margin-left:30px;
    }
    .select-text{
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 26px;
      color: #888888;
      margin-left:10px;
    }
    .select-text.active{
      color:#5275E7;
    }
    .main-text{
      position: absolute;
      left:9%;
      top:19%;
    }
    .job{
      width:350px;
      height:56px;
      background: #FFFFFF;
      border: 1px solid #5275E7;
      box-sizing: border-box;
      border-radius: 6px;
      display:flex;
      align-items:center;
      position: absolute;
      left:9%;
      top:32%;

    }
    .location{
      width:350px;
      height:56px;
      background: #FFFFFF;
      border: 1px solid #5275E7;
      box-sizing: border-box;
      border-radius: 6px;
      display:flex;
      align-items:center;
      position: absolute;
      top:41%;
      left:9%;
    }
    
    `}</style>
    </div>
  )
}
