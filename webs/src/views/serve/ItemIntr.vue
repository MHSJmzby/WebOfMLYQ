<template>
  <div class="mainbox">
    <div class="centerbox">
      <p style="marginTop:40px;">运联优企客户端提供手机端和PC端服务，便利客户管理和运营。两端操作简便，助力项目管理。</p>
      <ul class="btnbox">
        <el-button type="primary " round @click="pageflag = 1" >界面</el-button>
        <el-button type="primary " round @click="pageflag = 2" >手机端</el-button>
        <el-button type="primary " round @click="pageflag = 3" >pc端</el-button>
      </ul>
      <transition name="el-zoom-in-center">
        <div class="imgbox-1" v-show="pageflag === 1">
          <div class="img1"><img src="@/assets/imgs/serve/introduction.jpg" alt=""></div>
          <div class="img2"><img src="@/assets/imgs/serve/link.jpg" alt=""></div>
          <div class="imgbox">
            <img src="@/assets/imgs/serve/ylyq.png" alt="">
            <img src="@/assets/imgs/serve/bank.png" alt="">
            <img src="@/assets/imgs/serve/trade.png" alt="">
            <img src="@/assets/imgs/serve/service.png" alt="">
          </div>
        </div>
      </transition>
      <transition name="el-fade-in-linear">
        <div class="imgbox-2" v-show="pageflag === 2">
          <div class="img2"><img class="imgs" src="@/assets/imgs/newPic3.jpeg" alt=""></div>
          <div class="img2"><img class="imgs" src="@/assets/imgs/newPic1.jpeg" alt=""></div>
          <div class="img2"><img class="imgs" src="@/assets/imgs/newPic4.png" alt=""></div>
          <div class="img2"><img class="imgs" src="@/assets/imgs/newPic2.jpeg" alt=""></div>
        </div>
      </transition>
      <transition name="el-zoom-in-top">
        <div class="imgbox-3" v-show="pageflag === 3">
          <img src="@/assets/imgs/serve/ylyq.png" alt="">
          <img src="@/assets/imgs/serve/bank.png" alt="">
          <img src="@/assets/imgs/serve/trade.png" alt="">
          <img src="@/assets/imgs/serve/service.png" alt="">
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "item-intr",
  data() {
    return {
      pageflag: 1
    }
  }
}
</script>

<style scoped lang="less">
.mainbox {
  width: 100%;
  display: flex;
  justify-content: center;

  .centerbox {
    width: 75%;
    height: 100%;
  }

  .btnbox {
    margin-left: 400px;
    margin-top: 40px;
    width: 600px;
    display: flex;
    justify-content: space-around;
  }

  .imgbox-1 {
    width: 1170px;
    height: 1170px;
    margin-top: 40px;
    margin: 40px 10% 0px 10%;
    position: relative;
    display: flex;
    justify-content: space-around;
    .imgbox {
      width: 360px;
      height: 1140px;
      img {
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }
  }
  .imgbox-2 {
    width: 1600px;
    height: 820px;
    margin: 40px 0 0 0;
    position: relative;
    display: flex;
    // justify-content: space-around;
    .img2{
      margin: auto 10px;
      width: 400px;
      height: 740px;
      overflow: hidden;
      .imgs{
        margin-top: 10px;
        margin-bottom: 20px;
        object-fit: cover;
      }
    }
  }

  .imgbox-3 {
    width: 1200px;
    margin-top: 40px;
    margin: 40px 10% 0px 10%;
    display: flex;
    flex-wrap: wrap;
    img {
      margin-bottom: 40px;
    }
  }
}

img {
  width: 360px;
  object-fit: contain;
;
  margin: 0 20px;
}

.el-button {
  cursor: pointer;
  border: 0;

  &:hover {
    background: -webkit-linear-gradient(90deg,#86d0d1,#009eff,#1134ff);

    color: #000;
  }
}
</style>
