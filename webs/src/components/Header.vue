<template>
  <div class="head">
    <img style="width: 171px;height: 63px;" src="@/assets/imgs/ylyqlogo.jpg">
    <div class="options">
      <span>
        <routerLink class="el-dropdown-link" to="/">
          主页
        </routerLink>
      </span>
      <el-dropdown>
        <span class="el-dropdown-link">
          <routerLink class="el-dropdown-link" to="/about/companyIdeal">
            关于我们
          </routerLink><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><routerLink class="el-dropdown-link" to="/about/companyIdeal">公司理念</routerLink></el-dropdown-item>
          <el-dropdown-item><routerLink class="el-dropdown-link" to="/about/TeamIntroduction">团队介绍</routerLink></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          <routerLink class="el-dropdown-link" to="/serve/itemIntroduction">
            服务中心
          </routerLink><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><routerLink class="el-dropdown-link" to="/serve/itemIntroduction">项目界面展示</routerLink></el-dropdown-item>
          <el-dropdown-item><routerLink class="el-dropdown-link" to="/serve/ourService">产品服务功能</routerLink></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          <routerLink class="el-dropdown-link" to="/news/first">
            新闻中心
          </routerLink><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><routerLink class="el-dropdown-link" to="/news/first">商业动态</routerLink></el-dropdown-item>
          <el-dropdown-item><routerLink class="el-dropdown-link" to="/news/first">企业新闻</routerLink></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          <routerLink class="el-dropdown-link" to="/contact">
            联系我们
          </routerLink><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>人才招聘</el-dropdown-item>
          <el-dropdown-item>交流学习</el-dropdown-item>
          <el-dropdown-item>商务合作</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerPage'
}
</script>

<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  font-size: 16px;
  color: #8A8A8A;

  &:hover {
    color: #ae130c;
  }
}

.el-icon-arrow-down {
  font-size: 12px;
}

.el-dropdown-menu__item {
  color: #910606;
}

.head {
  display: flex;
  height: 100px;
  color: #8A8A8A;
  justify-content: space-between;
  align-items: center;
  margin: 0 15%;

  .options {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
