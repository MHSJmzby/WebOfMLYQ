<template>
  <div id="ourServices">
    <h2>我们的服务</h2>
    <ul class="services">
      <li>
        <img src="@/assets/imgs/active.svg" width="60px">
        <span style="display: inline-block; width: 70%;">
          <span class="title">全动态查询货物信息</span>
          企业至终端用户的物流供应链全链条，
          让客户和企业对于物流供应链每个环节的追踪，
          让物流过程中不再存在盲点。
        </span>


      </li>
      <li>
        <img src="@/assets/imgs/data.svg" width="60px">
        <span style="display: inline-block; width: 70%;">
          <span class="title">一站式货运操作系统</span>
          通过对行车路线计划、车辆管理等进行处理和操作，系统编制出最佳的路线计划，帮助企业降低与运输相关的成本。
        </span>


      </li>
      <li>
        <img src="@/assets/imgs/order.svg" width="60px">
        <span style="display: inline-block; width: 70%;">
          <span class="title">货物交易平台</span>
          通过物联网赋能传统平台，有效整合行业供应链上下游，打通行业壁垒，实现货物运输可视化，降低企业获客成本。
        </span>


      </li>
      <li>
        <img src="@/assets/imgs/company.svg" width="60px">
        <span style="display: inline-block; width: 70%;">
          <span class="title">企业信誉查询</span>
          通过对供应链上下游的实时把控，结合大数据模型的分析计算，切实可靠的信息有效避免了不同企业间的信息差。
        </span>


      </li>
      <li>
        <img src="@/assets/imgs/money.svg" width="60px">
        <span style="display: inline-block; width: 70%;">
          <span class="title">低息融资通道</span>
          在多家银行伙伴的见证下，通过对物流过程中的全过程监督、担保、负责，为企业提供安全放心的低息融资通道。
        </span>


      </li>
      <li>
        <img src="@/assets/imgs/work.svg" width="60px">
        <span style="display: inline-block; width: 70%;">
          <span class="title">低息融资通道</span>
          在多家银行伙伴的见证下，通过对物流过程中的全过程监督、担保、负责，为企业提供安全放心的低息融资通道。
        </span>


      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ourServices"
}
</script>

<style>
#ourServices {
  margin: 20px 20%;
  padding-bottom: 60px;
  .services {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    li {
      width: 31%;
      display: flex;
      height: 160px;
      border: 1px solid #ccc;
      margin-top: 20px;

      .title{
        color: #333;
        font: 24px Oswald, sans-serif;
        margin: 20px 0;
        display: block;
      }
      span{
        font-size: 14px
      }
      img{
        margin: 20px;
      }
    }
  }
}
</style>
