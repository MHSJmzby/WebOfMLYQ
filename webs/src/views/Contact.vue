<template>
  <div id="contact">
    <headerTitle>联系我们</headerTitle>
    <!-- 联系我们页面所有内容 -->
    <div class="allmsgbox">
      <div class="card">
        <cardBox>
          <template v-slot:icon>
            <img src="@/assets/svg/address.svg" alt="">
          </template>
          <template v-slot:title>
            <h2>公司地址</h2>
          </template>
          <template v-slot:msg1>
            <p>浙江省杭州市西湖区翠苑街道文三路478号华星时代广场A座10层1002室</p>
          </template>
        </cardBox>
      </div>
      <div class="card">
        <cardBox>
          <template v-slot:icon>
            <img src="@/assets/svg/time.svg" alt="">
          </template>
          <template v-slot:title>
            <h2>工作时间</h2>
          </template>
          <template v-slot:msg1>
            <p>周一———周五</p>
          </template>
          <template v-slot:msg2>
            <p>09:00AM-06:30PM</p>
          </template>
        </cardBox>
      </div>
      <div class="card">
        <cardBox>
          <template v-slot:icon>
            <img src="@/assets/svg/email.svg" alt="">
          </template>
          <template v-slot:title>
            <h2>电子邮箱</h2>
          </template>
          <template v-slot:msg1>
            <p>yunlianyouqi@163.com</p>
          </template>
        </cardBox>
      </div>
      <div class="card">
        <cardBox>
          <template v-slot:icon>
            <img src="@/assets/svg/telphone.svg" alt="">
          </template>
          <template v-slot:title>
            <h2>联系电话</h2>
          </template>
          <template v-slot:msg1>
            <p>0571-87998131</p>
          </template>
          <template v-slot:msg2>
            <p>0571-87968531</p>
          </template>
          <template v-slot:msg3>
            <p>0571-86728616</p>
          </template>
        </cardBox>
      </div>
      <div class="other">
        <div class="otherTitle">
          <h2>联系我们</h2>
        </div>
        <div class="otherMsg">
          <p>
            感谢您访问我们的网站并查看联系我们栏目。我们期待与您建立联系，为您提供最优质的服务和支持。无论您有任何问题、建议或合作意向，都请随时与我们联系。您的每一次沟通都是我们前进的动力，我们将竭诚为您服务，共同创造美好的合作机会。期待与您的交流！
          </p>
        </div>
        <div class="QRcode">
          <img src="@/assets/imgs/QRcode.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerTitle from '../components/headerTitle.vue'
import cardBox from '../components/cardBox.vue'
export default {
  name: 'contactPage',
  components: {
    headerTitle,
    cardBox
  }
}
</script>

<style lang="less" scoped>
#contact {
  width: calc(100vw - 17px);
  height: 760px;
  padding: 0;
  margin: 0;

  .allmsgbox {
    width: 1400px;
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    margin: 0 auto;
  }

  h3 {
    text-align: left;
    color: #333;
    font-size: 24px;
    margin: 20px 0px;
  }

  p {
    margin: 10px 0;
    text-align: left;
    font-size: 15px;
    line-height: 20px;
  }

  .card {
    height: 260px;
    margin: 40px 45px 0 20px;
  }

  .other {
    width: 1000px;
    height: 200px;
    margin: 50px 0 0 20px;
    display: flex;

    .otherTitle {
      width: 30px;
      height: 200px;
    }

    .otherMsg {
      width: 400px;
      height: 200px;
      margin: 12px 12px 0 50px;
    }

    .QRcode {
      width: 110px;
      height: 110px;
      margin: 20px 0 0 10px;

      img {
        width: 110px;
        height: 110px;
      }
    }
  }
}
</style>
