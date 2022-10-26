import React, { memo, useState } from "react";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { AppMenuWrapper, MenuTop } from "./style";
import { getMenuItemAction } from "./store/actionCreators";

export default memo(function AppMenu() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // redux hooks
  const { menuItems } = useSelector(
    (state) => ({
      menuItems: state.getIn(["menu", "menuItems"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  //选中菜单
  const changeMenuItem = (item) => {
    dispatch(getMenuItemAction(item));
  };

  return (
    <AppMenuWrapper>
      <Menu
        style={{ height: "100%" }}
        inlineCollapsed={collapsed}
        defaultSelectedKeys={["menu11"]}
        defaultOpenKeys={["menu1", "menu2"]}
        theme="dark"
        mode="inline"
      >
        <div>
          <MenuTop onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </MenuTop>
        </div>
        {menuItems.map((item) => {
          return (
            <Menu.SubMenu key={item.key} title={item.label}>
              {item.children?.map((iten) => {
                return (
                  <Menu.Item
                    key={iten.key}
                    onClick={() => changeMenuItem(iten)}
                  >
                    <NavLink to={iten.link}>{iten.label}</NavLink>
                  </Menu.Item>
                );
              })}
            </Menu.SubMenu>
          );
        })}
      </Menu>
    </AppMenuWrapper>
  );
});
