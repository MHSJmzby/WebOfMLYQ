<template>
  <div id="footerComp">
    <div class="footer1">
      <div class="imgbox">
        <router-link to="/contact"><img src="../assets/imgs/wechatlogo.png" alt=""></router-link> 
        <router-link to="/contact"><img src="../assets/imgs/emaillogo.png" alt=""></router-link>
        <router-link to="/contact"><img src="../assets/imgs/phonelogo.png" alt=""></router-link>
      </div>
    </div>
    <div class="footer2">
      <div class="footermsg">
        <div class="leftmsg">
          <router-link to="/"><span>主页</span></router-link><span>|</span>
          <router-link to="/about/companyIdeal"><span>关于我们</span></router-link><span>|</span>
          <router-link to="/serve/itemIntroduction"><span>服务中心</span></router-link><span>|</span>
          <router-link to="/news/first"><span>新闻中心</span></router-link><span>|</span>
          <router-link to="/contact"><span>联系我们</span></router-link>
        </div>
        <div class="rightmsg">
          <span>Copyright © 2022.Company name All rights reserved.</span>
          <router-link to="/contact"><span>运联优企</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerComp'
}
</script>

<style lang="less" scoped>
#footerComp {
  margin: 0;
  position: absolute;
  width: calc( 100vw - 17px);
  height: 136px;

  .footer1 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 86px;
    background-color: #ECECEC;

    .imgbox {
      width: 1140px;
      height: 46px;
      display: flex;
      justify-content: center;

      img {
        width: 40px;
        height: 38px;
        margin-left: 30px;
        margin-right: 30px;
      }
    }
  }

  .footer2 {
    height: 50px;
    background-color: #AE1302;
    display: flex;
    align-items: center;
    justify-content: center;

    .footermsg {
      width: 1170px;
      color: #aaaA;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 100px;

      span {
        margin: 5px;
      }
    }
  }

  a {
    text-decoration: none;
    color: #aaa;
  }

  .router-link-active {
    text-decoration: none;
  }
}
</style>
