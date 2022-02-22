import CompanyItem from "./CompanyItem";
import { useState } from "react";
import MapHeader from "./MapHeader";
const ControlData = [
  {
    연봉: "전체",
    value: "true",
  },
  {
    연봉: "2,400미만",
    value: "false",
  },
  {
    연봉: "2,400~2,800 미만",
    value: "false",
  },
  {
    연봉: "2,800~3,200 미만",
    value: "false",
  },
  {
    연봉: "3,200~3,600 미만",
    value: "false",
  },
  {
    연봉: "3,600~4,000 미만",
    value: "false",
  },
  {
    연봉: "4,000~6,000 미만",
    value: "false",
  },
  {
    연봉: "6,000 이상",
    value: "false",
  },
  {
    연봉: "기타",
    value: "false",
  },
  {
    연봉: "",
    value: "false",
  },
];

const ControlMenu = () => {
  const [control, setControl] = useState(false);
  return (
    <div className="control-menu">
      <div
        className="control-menu__toggle"
        onClick={() => setControl(!control)}
      >
        전체
      </div>
      <div className="control-list">
        {control === true
          ? ControlData.map((it, index) => {
              return (
                <div key={index} className="control-list__item">
                  {it.연봉}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

const CompanyList = () => {
  return (
    <div className="company-list">
      <div className="setting">
        <ControlMenu /> <div className="list-view">목록보기</div>
      </div>
      <div className="company-list__inner">
        <CompanyItem />
        <CompanyItem />
        <CompanyItem />
      </div>
    </div>
  );
};

export default CompanyList;
