export const updateNodeInTree = (treeList, id, obj) => {
  if (!treeList || !treeList.length) {
    return;
  }
  for (let i = 0; i < treeList.length; i++) {
    if (treeList[i].key === id) {
      treeList[i] = obj;
      break;
    }
    updateNodeInTree(treeList[i].children, id, obj);
  }
};
