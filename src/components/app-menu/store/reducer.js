import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  menuItems: [
    {
      label: "菜单一",
      key: "menu1",
      children: [
        { label: "子菜单1-1", key: "menu11", link: "/menu11" },
        { label: "子菜单1-2", key: "menu12", link: "/menu12" },
      ],
    },
    {
      label: "菜单二",
      key: "menu2",
      children: [
        { label: "子菜单2-1", key: "menu21", link: "/menu21" },
        { label: "子菜单2-2", key: "menu22", link: "/menu22" },
      ],
    },
  ],
  selectedMenu: { label: "子菜单1-1", key: "menu11", link: "/menu11" },
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_MENU:
      return state.set("menuItems", action.menuItems);
    case actionTypes.CHANGE_MENU_ITEM:
      return state.set("selectedMenu", action.selectedMenu);
    default:
      return state;
  }
}

export default reducer;
