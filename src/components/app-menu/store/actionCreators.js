
import * as actionTypes from './constants';
import {updateNodeInTree} from '@/utils/index'
const changeMenuAction = (menuItems) => ({
  type: actionTypes.CHANGE_MENU,
  menuItems
});
const changeMenuItemAction= (selectedMenu) => ({
  type: actionTypes.CHANGE_MENU_ITEM,
  selectedMenu
});
export const getChangeMenuAction = (value) => {
  return (dispatch, getState) => {
    const menuList = getState().getIn(["menu", "menuItems"]);
    const selectedMenu = getState().getIn(["menu", "selectedMenu"]);

    const cloneSelectedMenu=JSON.parse(JSON.stringify(selectedMenu))
    cloneSelectedMenu.label=value

    const cloneList =JSON.parse(JSON.stringify(menuList))
    updateNodeInTree(cloneList,selectedMenu.key,cloneSelectedMenu)

    dispatch(changeMenuAction(cloneList))
  }
}
export const getMenuItemAction = (item) => {
  return (dispatch) => {
    dispatch(changeMenuItemAction(item))
  }
}



