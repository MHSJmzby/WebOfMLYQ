<template>
  <div id="news">
    <headerTitle style="color: white;">企业新闻</headerTitle>
    <div class="mmm">
      <div class="main">
      <div class="routerview">
        <router-view/>
      </div>
      <div class="routerlink">
        <h3>近期新闻</h3>
        <router-link to="/news/first"> <h4 >热烈欢迎杭州银行文创支行行长到我司莅临指导</h4> </router-link>
        <p>2024年4月11日上午，我司接待了杭州银行文创支行的刘行长和许经理，以及投资人黄总......</p>
        <router-link to="/news/second"> <h4 >浙江省电视台新闻频道记者进我司考察</h4> </router-link>
        <p>2024年4月9日上午，我司接待了浙江省电视台新闻频道的束先生和江女士，以及投资人.....</p>
        <router-link to="/news/third"> <h4 >运联优企受邀参加元宇宙产业创新中心企业分享交流会</h4> </router-link>
        <p>2024年4月2日下午，AIGC引领新质生产力元宇宙产业创新中心企业分享交流会......</p>
        <div class="extend">
          <h3 style="margin-top:50px;">运联优企</h3>
          <figure><img src="@/assets/imgs/QRcode.jpg"></figure>
          <h3 style="margin-top:50px;">应运而生 联通天下</h3>
        </div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import headerTitle from '@/components/headerTitle.vue'
export default {
  name: 'newsPage',
  components: {
    headerTitle
  }
}
</script>

<style lang="less" scoped>
#news{
  padding: 0;
  margin: 0;
  width: calc( 100vw - 17px);
  position: relative;
  .main{
      width: 80vw;
      display: flex;
      margin: 0 10vw;
      padding: 20px;
  }
  .routerview{
    display: flex;
    width: 780px;
    margin-right: 30px;
  }
  .routerlink{
    width: 390px;
    height: 800px;
    padding: 0 15px;
    h3{
      font-size: 24px;
      margin-top: 20px  ;
      margin-bottom: 0px  ;
      font-weight: normal;
      font-family: 'Oswald', sans-serif;
    }
    h4{
      font-size: 15px;
      margin: 10px 0;
      font-weight: normal;
      font-family: 'Oswald', sans-serif;
    }
    p{
      font-size: 12px;
    }
    .extend{
      width: 390px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3{
        text-align: center;
      }
      img{
        width: 270px;
        height: 257px;
        margin-left: 25px;
      }
    }
  }

}
</style>
