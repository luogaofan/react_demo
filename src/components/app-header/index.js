import React, { memo } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { HeaderWrapper } from "./style";

export default memo(function AppHeader() {
  // 返回的jsx
  return (
    <HeaderWrapper>
      <div className="left">
        <img
          className="left-img"
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
        react
      </div>
      <div className="right">
        <QuestionCircleOutlined />
        <span className="right-admin">
        admin
        </span>
      </div>
    </HeaderWrapper>
  );
});
