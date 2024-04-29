<template>
  <div id="home">

    <!-- 头部 -->
    <div class="header">
      <!-- 轮播图 -->
      <el-carousel indicator-position="outside" height="600px">
        <el-carousel-item>
          <img src="@/assets/imgs/yl9.png" style="width: 100%;">
        </el-carousel-item>
        <el-carousel-item v-for="item in 2" :key="item">
          <!-- <img :src="require(`@/assets/imgs/huapian${item}.jpeg`)" style="height: 600px;width: 100%;object-fit: cover;"> -->
          <img :src="require(`@/assets/imgs/huapian${item +1}.jpeg`)" style="height: 600px;width: 100%;">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 内容 -->
    <div class="content">
      <div class="commerce-news">
        <h2>商业动态</h2>
        <ul>
          <li>
            <div class="inner">
              <div class="news-img-wrapper">
                <img src="@/assets/imgs/news/art1.png" class="news-img">
              </div>
              <div class="news-content">
                <h5>热烈欢迎杭州银行文创支行行长到我司莅临指导</h5>
                <div class="test-div">
                  <span class="text">
                    随着项目演讲的深入，刘行长感受到了我司在市场的发展潜力，我司深耕供应链金融、科技赋能，实现对供应链整体的高效管理。
                    这种模式不仅有助于解决银行资金安全问题及中小企业融资难、融资贵的问题，还能够提升整个供应链的运营效率，降低运营成本。
                  </span>
                </div>
              </div>
              <div class="link-position">
                <router-link to="/news/first"><span class="news-link">阅读原文</span> </router-link>
              </div>
            </div>
          </li>
          <li>
            <div class="inner">
              <div class="news-img-wrapper">
                <img src="@/assets/imgs/news/art2.png" class="news-img">
              </div>
              <div class="news-content">
                <h5>浙江省电视台新闻频道记者进我司考察</h5>
                <div class="test-div">
                  <span class="text">
                    2024年4月9日上午，我司接待了浙江省电视台新闻频道的束先生和江女士，以及投资人潘总、
                    王总进行项目考察。考察中，众人详细了解了供应链金融在港口贸易中的运作机制。通过与港口企业、
                    金融机构以及上下游企业的紧密合作，供应链金融实现了资金流、信息流和物流的高效对接。
                    在港口贸易中，供应链金融为各方提供了融资、结算、风险管理等全方位服务，有效降低了交易成本，提升了贸易效率。
                  </span>
                </div>
              </div>
              <div class="link-position">
                <router-link to="/news/second"><span class="news-link">阅读原文</span> </router-link>
              </div>
            </div>
          </li>
          <li>
            <div class="inner">
              <div class="news-img-wrapper">
                <img src="@/assets/imgs/news/art3.png" class="news-img">
              </div>
              <div class="news-content">
                <h5>热烈欢迎杭州银行文创支行行长到我司莅临指导</h5>
                <div class="test-div">
                  <span class="text">
                    2024年4月9日上午，我司接待了浙江省电视台新闻频道的束先生和江女士，以及投资人潘总、
                    王总进行项目考察。考察中，众人详细了解了供应链金融在港口贸易中的运作机制。通过与港口企业、
                    金融机构以及上下游企业的紧密合作，供应链金融实现了资金流、信息流和物流的高效对接。
                    在港口贸易中，供应链金融为各方提供了融资、结算、风险管理等全方位服务，有效降低了交易成本，提升了贸易效率。
                  </span>
                </div>


              </div>
              <div class="link-position">
                <router-link to="/news/third"><span class="news-link">阅读原文</span> </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="other-info">
        <div class="about-us">
          <h2>关于我们</h2>
          <div class="about-us-text">
            <p style="font-weight: 800;">
              区块链、大数据和人工智能技术在供应链服务平台创新引领者。
            </p>
            <p>
              运联优企是一家通过区块链，人工智能，算力和大数据做技术支撑，通过创新的供应链金融服务模式，让银行在资金安全的情况下，服务在港口经营的贸易公司和供应链相关的企业服务平台。
            </p>
          </div>

        </div>
        <div class="cooperation">
          <h2>合作企业</h2>
          <ul>
            <li><a href="https://www.fegroup.com.cn/">远东集团</a></li>
            <li><a href="https://www.hzbank.com.cn/">杭州银行</a></li>
            <li><a href="https://www.czbank.com/cn/index.shtml">浙商银行</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'homePage',
}
</script>

<style scoped lang="less">
h2 {
  padding: 0;
  margin: 0;
}

.header {
  border-top: 2px solid #ae130c;
}

.content {
  margin: 20px 20%;

  .commerce-news ul {
    display: flex;
    justify-content: space-between;
    list-style: none;

    li {
      width: 25%;
      height: 400px;
      padding: 4px;
      border: 1px solid #ccc;

      .inner {
        height: 100%;
        background-color: #e7e7e7;
        position: relative;

        .news-img-wrapper {
          position: relative;
        }

        .link-position {
          position: absolute;
          bottom: 20px;
          left: 5px;
        }

        .news-link {

          color: #ae130c;
          font-weight: 800;
        }

        .news-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .news-content {
    font-size: 16px;
    padding: 4px;

    .test-div {
      margin: 10px 0;
    }

    .text {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 14px;
      text-align: justify;
      text-overflow: ellipsis;
    }


    h5 {
      margin: 0;
      padding: 0;
    }
  }

  .other-info {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    .about-us {
      width: 30%;

      .about-us-text {
        padding-left: 40px;
        font-size: 14px;
      }
    }

    .cooperation {
      width: 35%;

      ul {
        
        color: #ae130c;
        li {
          margin: 0;
          padding: 4px 0 5px 30px;
          border-top: 1px solid #f2f2f2;
          position: relative;
          &::marker{
            content: '▸';
            font-size: 20px;
          }
        }
        
      }

    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
