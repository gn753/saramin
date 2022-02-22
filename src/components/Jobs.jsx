import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const dummy = [
  "기획·전략",
  "마케팅·홍보·조사",
  "회계·세무·재무",
  "인사·노무·HRD",
  "총무·법무·사무",
  "IT개발·데이터",
  "디자인",
  "영업·판매·무역",
  "고객상담·TM",
  "구매·자재·물류",
  "상품기획·MD",
  "운전·운송·배송",
  "서비스",
  "생산",
  "건설·건축",
  "의료",
  "연구·R&D",
  "교육",
  "미디어·문화·스포츠",
  "금융·보험",
  "공공·복지",
];
const dummy2 = [
  "인테리어",
  "가구디자인",
  "2D디자인",
  "3DMax",
  "건축디자인",
  "3D디자인",
  "게임디자인",
  "경관디자인",
  "공간디자인",
  "드림위버",
  "일러스트",
  "드로잉",
  "그래픽디자인",
  "실내디자인",
  "코렐드로우",
  "공예디자인",
  "광고디자인",
  "디지털디자인",
  "만화/웹툰",
  "플래시",
  "로고디자인",
  "명함",
  "모바일디자인",
  "무대",
];

// 중분류 카테고리가 1개이상 선택된 경우 체크
function checkMiddleCategorySelected(o) {
  for (const key in o) {
    if (o[key]) {
      return true;
    }
  }
}

// 객체 키값 리스트 리턴
function getObjectKeyName(o) {
  let arr = [];
  for (const key in o) {
    arr.push(key);
  }
  return arr;
}

// 중분류 카테고리가 현재 3개이상 선택됐는지 체크
function checkMaximumSelected(o) {
  let count = 0;
  for (const key in o) {
    if (o[key]) {
      count++;
    }
  }
  if (count > 2) {
    return true;
  }
  return false;
}

// 현재 선택된 중분류 카테고리 키값 리턴
function getSeletedMiddleCategory(o) {
  let arr = [];
  for (const key in o) {
    if (o[key]) {
      arr.push(key);
    }
  }
  return arr;
}

export default function Jobs() {
  const [mainCategory, setMainCategory] = useState({});
  const [middleCategory, setMiddleCategory] = useState({});
  const [mainCategorySelected, setMainCategorySelected] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="main-container">
        <div className="top-content">
          <Link to="/">
            <img className="back" src="back.png"></img>
          </Link>
          <div className="location-search-text">
            {mainCategorySelected ? Object.keys(mainCategory)[0] : "직무검색"}
          </div>
        </div>
        {mainCategorySelected && (
          <div className="maximum-text">최대 3개 선택가능</div>
        )}

        <div className="item-container">
          <ul className="grid-item-container">
            {!mainCategorySelected
              ? dummy.map((name, i) => (
                  <li
                    key={i}
                    className={`job-item ${mainCategory[name] ? "active" : ""}`}
                    onClick={() => {
                      setMainCategory({
                        [name]: mainCategory[name] ? false : true,
                      });
                    }}
                  >
                    <span className="job-keyword">{name}</span>{" "}
                  </li>
                ))
              : dummy2.map((name, i) => (
                  <li
                    key={i}
                    className={`job-item ${
                      middleCategory[name] ? "active" : ""
                    }`}
                    onClick={() => {
                      checkMaximumSelected(middleCategory)
                        ? setMiddleCategory({
                            ...middleCategory,
                            [name]: false,
                          })
                        : setMiddleCategory({
                            ...middleCategory,
                            [name]: middleCategory[name] ? false : true,
                          });
                    }}
                  >
                    <span className="job-keyword">{name}</span>{" "}
                  </li>
                ))}
          </ul>
        </div>
        {!mainCategorySelected ? (
          <div
            className={`confirm-btn ${
              Object.values(mainCategory)[0] ? "active" : ""
            }`}
            {...(Object.values(mainCategory)[0] && {
              onClick: () => {
                setMainCategorySelected(true);
                dispatch({
                  type: "addMainCategory",
                  payload: getObjectKeyName(mainCategory),
                });
              },
            })}
          >
            다음
          </div>
        ) : (
          <div
            className={`confirm-btn ${
              checkMiddleCategorySelected(middleCategory) ? "active" : ""
            }`}
            {...(Object.values(mainCategory)[0] && {
              onClick: () => {
                setMainCategorySelected(true);
                dispatch({
                  type: "addMiddleCategory",
                  payload: getSeletedMiddleCategory(middleCategory),
                });
                navigate("/");
              },
            })}
          >
            확인
          </div>
        )}

        <style jsx="true">{`
          .item-container {
            display: flex;
            justify-content: center;
          }
          li {
            cursor: pointer;
          }
          .grid-item-container {
            display: grid;
            grid-template-columns: 170px 170px;
            justify-content: center;
            align-content: center;
            gap: 10px;
            float: left;
          }
          .job-item {
            width: 170px;
            height: 42px;
            border: 1px solid #e5e5e5;
            box-sizing: border-box;
            border-radius: 6px;
            text-align: center;
          }
          .job-item.active {
            background: #f0f5fe;
            border: 1px solid #5275e7;
            box-sizing: border-box;
            border-radius: 6px;
          }
          .job-keyword {
            display: inline-block;
            margin-top: 10px;
          }
          .maximum-text {
            margin-left: 23px;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 28px;
            color: #888888;
          }
        `}</style>
      </div>
    </div>
  );
}
