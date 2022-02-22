import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link,useNavigate} from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
const dummy = ['서울 구로구 구로5동','서울 구로구 구로3동','서울 구로구 구로동','서울 구로구 구로1동','서울 구로구 구로4동','서울 구로구 구로2동','서울 구로구 가리봉동']

export default function Location() {
  const [inputValue,setInputValue] = useState();
  const [selectedValue,setSelectedValue] = useState("");
  const [isSelected,setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    setSelectedValue(inputValue); // inputValue가 변경되면 input text의 value값에 적용(item선택후 input값 수정이 안돼서 추가)
    setIsSelected(false); // 사용자가 input을 수정하면 확인버튼 비활성화
  },[inputValue]); 


  // // 다음API 사용할경우 사용state
  // const [address, setAddress] = useState(''); // 주소
  // const [addressDetail, setAddressDetail] = useState(''); // 상세주소
  // const [isOpenPost, setIsOpenPost] = useState(false);

  // // 다음 API 사용할 경우 사용함수
  // const onCompletePost = (data) => {
  //   let fullAddr = data.address;
  //   let extraAddr = '';

  //   if (data.addressType === 'R') {
  //     if (data.bname !== '') {
  //       extraAddr += data.bname;
  //     }
  //     if (data.buildingName !== '') {
  //       extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
  //     }
  //     fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
  //   }

  //   setAddress(data.zonecode);
  //   setAddressDetail(fullAddr);
  //   setIsOpenPost(false);
  // };
  return (
    <div className='main-container'>
      <div className='top-content'>
        <Link to="/">
        <img className='back' src='back.png'></img>
        </Link>
        <div className='location-search-text'>지역검색</div>
      </div>
      <div className='middle-content' style={{fontSize:"14px",fontWeight:600,color:"#888888"}}>동(읍,면) 이름으로 검색</div>
      <div className='input-area'>
        {/* <img className='search-icon' src="search.png" alt="" /> */}
        <span className="material-icons">search</span>
        <input onChange={(e)=>{setInputValue(e.target.value)}} type="text" placeholder='역삼동, 서초동...' {...(isSelected&&{value:selectedValue})} />
      </div>
      <ul>
      {isSelected===false&&dummy.filter((e)=>!!inputValue===true && e.includes(inputValue)).map((e,i)=>(<li key={i} onClick={()=>{
        setSelectedValue(e);
        setIsSelected(true);}
        } ><span className='result-items'>{e}</span></li>)) }

      </ul>
      <div className={`confirm-btn ${isSelected ? "active" :""}`} {...(isSelected&&{onClick:()=>{navigate("/");dispatch({type:"addLocation",payload:selectedValue})}})}>
        확인
      </div>
      {/* <DaumPostcode onComplete={onCompletePost}></DaumPostcode> */}
   
      <style jsx="true">{
        `
      .input-area{
        position:relative;
        height: 42px;
        border: 1px solid #5275E7;
        box-sizing: border-box;
        border-radius: 6px;
      }
  
      .result-items{
        margin-left:10px;
      }
      li{
        border-bottom:1px #e5e5e5 solid;
        padding:15px;
        cursor:pointer;
      }
      li:hover{
        background-color:#F0F5FE;
        color:#5275E7;
      }
   
      .material-icons{
        position: absolute;
        margin-top:10px;
        color:gray;
        font-size:21px;
        margin-left:15px;
      }
      .middle-content{
        margin-top:30px;
        margin-bottom:10px;

      }
      .search-icon{
        color:#A0A0A0;
      }
      input{
        width: 300px;
        margin-top:12px;
        margin-left:40px;
        border:none;
      }
      input:focus{
        outline: none !important;
        border: 0px;
      }
        `
      }</style>
    </div>
  )
}
 