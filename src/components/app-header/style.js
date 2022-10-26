import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 60px;
  font-size: 14px;
  color: #fff;
  background-color: #001529;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left{
    height: 30px;
    width: 200px;
    border-right: 1px solid #444;
    cursor: pointer;
   
    .left-img{
      margin:0 20px 0 10px;
      width:30px;
      height:30px;
    }
  }
  .right{
    .right-admin{
      margin-left: 20px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
`




