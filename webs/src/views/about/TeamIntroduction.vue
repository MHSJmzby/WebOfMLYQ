<template>
  <div class="team-introduction">
    <h2>团队介绍</h2>
    <!-- <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="@/assets/imgs/PhOfChen.png" class="manage">
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="@/assets/imgs/PhOfLi.jpg" class="manage">

        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="@/assets/imgs/PhOfXian.png" class="manage">
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="@/assets/imgs/PhOfZhou.png" class="manage">
        </div>
      </el-col>
    </el-row> -->
    <div class="intr">
      <ul>
        <li>
          <img src="@/assets/imgs/PhOfChen.png" class="manage">
          <div style="text-align: center;">
            <p class="name">陈杰辉</p>
            <p class="manage-position">董事长</p>
            <p class="text">陈杰辉，信息化行业资深专家及创业者，拥有12年行业经验和工程管理硕士学位。
              作为信息化中级工程师，他在团队管理和行业知识方面有深厚造诣。
              陈董事长现致力于二次创业，领导日常经营和技术发展，
              旨在帮助企业实现全面的业务闭环。
            </p>
          </div>
        </li>
        <li>
          <img src="@/assets/imgs/PhOfLi.jpg" class="manage">
          <div style="text-align: center;">
            <p class="name">李伟</p>
            <p class="manage-position">董事长</p>
            <p class="text">
              李伟，有多年的铁矿、煤矿自营经历，
              后任中原应急（天津）国际贸易有限公司副总经理职务；
              中国庆华集团（天津）国际贸易有限公司市场经营部总监；
              江苏国泰集团汇贸通有限公司，华北煤炭业务总经理；荷兰托克（上海）公司，
              出任转口贸易融资项目总监，兼职中国中小企业双创服务联盟副会长，中国管理科学院研究院特约研究员
              。有20多年供应链金融工作经验，创新新型供应链金融模式，入选北大“供应链金融专家智库”获得专家称号
              ，现任浙江运联优企业科技有限公司总经理。
            </p>
          </div>
        </li>
        <li>
          <img src="@/assets/imgs/PhOfXian.png" class="manage">
          <div style="text-align: center;">
            <p class="name">咸伟志</p>
            <p class="manage-position">董事长</p>
            <p class="text">
              咸伟志博士后，在重庆大学计算机学院以专业第一毕业
               发表多篇期刊，专研人工智能、
               计算机视觉和区块链 曾在哈尔滨工业大学深化计算机研究，
               主导技术研发和项目攻坚。
            </p>
          </div>
        </li>
        <li>
          <img src="@/assets/imgs/PhOfZhou.png" class="manage">
          <div style="text-align: center;">
            <p class="name">周骏腾</p>
            <p class="manage-position">董事长</p>
            <p class="text">
              周骏腾，英国格拉斯哥大学经济学士毕业，
              拥有丰富的实践经验，
              成功落实并推动了多个创业项目。现在企业当中担任项目经理，
              协助企业完成技术团队搭建以及产品从设计到交付的全流程业务。
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "team-introduction"
}
</script>

<style>
.team-introduction {
  margin: 20px 20%;

  .intr {
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;

      li {
        height: 700px;
        width: 250px;
        margin-right: 50px;

        .manage {
          width: 250px;
          height: 250px;
        }

        .text {
          font-size: 14px;
          text-align: left;
          line-height: 24px;
        }

        .manage-position {
          padding-top: 8px;
          margin: 0;
        }

        .name {
          font-size: 20px;
          font-weight: bold;
          margin: 0;
          margin-top: 8px;
          padding: 0;
        }
      }

    }

  }

}
</style>
