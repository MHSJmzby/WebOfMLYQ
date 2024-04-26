<template>
  <div id="company-ideal">
    <div class="company">
      <div class="logo">
        <img src="@/assets/imgs/logo.jpg" style="width: 450px;">
      </div>
      <div class="text">
        <h2>运联优企</h2>
        <p>我们是在<strong>区块链，大数据和人工智能技术</strong>在供应链服务平台创新引领者。<br>
          运联优企是一家通过<strong>区块链，人工智能，算力和大数据</strong>做技术支撑，
          通过创新的供应链金融服务模式，让银行在<strong>资金安全</strong>的情况下，
          服务在港口经营的贸易公司和供应链相关的企业服务平台。<br>
          Yunlian Youqi is a company supported by blockchain, artificial intelligence, computing power, and big data
          technologies. We provide innovative supply chain financial services to trading companies and supply
          chain-related enterprises operating in ports, ensuring fund security.
        </p>
        <h2>公司理念</h2>
        <p><strong>应运而生，联通天下</strong><br>
          运联优企，是一家致力于通过区块链，人工智能，算力和大数据技术，创新引领供应链服务平台的公司。
          优质的服务，良好的信誉，以满足客户需求为经营理念，为会员提供务实、特质、方便、快捷、专业的信息服务及交易一体化平台。
          <br>Our business philosophy is to provide high-quality services and maintain a good reputation to meet
          customer
          needs. We offer pragmatic, distinctive, convenient, fast, and professional information services and integrate
          them into a trading platform for our members.
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'company-ideal'
}
</script>

<style>
#company-ideal {
  margin: 20px 20%;

  .company {
    display: flex;
    justify-content: space-between;
    .logo {
      padding-top: 120px;
    }

    .text {
      flex: 1;
      margin-left: 20px;
      p {
        line-height: 40px;
      }
    }
  }
}
</style>
