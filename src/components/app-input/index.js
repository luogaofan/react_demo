import React, { memo, useState } from "react";
import { Input, Button } from "antd";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getChangeMenuAction } from "@/components/app-menu/store/actionCreators.js";
import { AppInputWrapper } from "./style";

export default memo(function AppInput() {
  const [inputValue, _inputValue] = useState("");
  // redux hooks
  const { selectedMenu } = useSelector(
    (state) => ({
      selectedMenu: state.getIn(["menu", "selectedMenu"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const changeInputValue = (e) => {
    _inputValue(e.target.value);
  };

  //保存修改菜单
  const changeMenu = () => {
    if (inputValue) {
      dispatch(getChangeMenuAction(inputValue));
    }
  };

  return (
    <AppInputWrapper>
      <Input defaultValue={selectedMenu.label} onChange={changeInputValue} />
      <Button onClick={changeMenu} type="primary" className="button">
        保存
      </Button>
    </AppInputWrapper>
  );
});
