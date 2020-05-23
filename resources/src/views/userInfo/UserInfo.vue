<template>
  <div>
    <header style="overflow: hidden;">
      <div id="left">
        <span>Overview</span>
        <span>Company Summary</span>
      </div>
    </header>

    <div id="content">
      <div id="content-top">
        <div class="cont-l">
          <div id="cont-l-top">
            <a-card  style="width: 34%;height:20rem;float: left;" :bordered="false">
              <!--<div v-if="flag">whatever content</div>-->
              <div style="width: 100%;height: 100%;">
                <div id="card1-top">
                  <div id="bigRadius">
                    <div id="smallRadius">
                      <span>Profit</span>
                      <span>p8000</span>
                    </div>
                    <span>Total</span>
                    <span>p10000</span>
                  </div>
                </div>
                <hr>
                <ul id="card1-bot">
                  <li>
                    <span>105,726,23</span>
                    <span>Total Sales</span>
                  </li>
                  <li>
                    <span>25,726,23</span>
                    <span>Total Profit</span>
                  </li>
                </ul>
              </div>
            </a-card>
            <div id="cont-l-top-r" style="float: right;width:64%;margin-left: 2%;">
              <a-row>
                <a-col class="card-col">
                  <a-card :loading="loading" class="user-card" title="Card title">
                    <chart-div :echartObj="ecObj1" v-if="flag"></chart-div>
                  </a-card>
                </a-col>
                <a-col class="card-col card-ml">
                  <a-card :loading="loading" class="user-card" title="Card title">
                    whatever content
                  </a-card>
                </a-col>
              </a-row>
              <a-row class="row-top">
                <a-col class="card-col">
                  <a-card :loading="loading" class="user-card" title="Card title">
                    whatever content
                  </a-card>
                </a-col>
                <a-col class="card-col card-ml">
                  <a-card :loading="loading" class="user-card" title="Card title">
                    whatever content
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </div>
        </div>
        <div class="cont-r">
          <div id="cont-r-top">
            <a-card :loading="loading" title="Card title" style="height:20rem;">
              whatever content
            </a-card>
          </div>
        </div>
      </div>

      <div id="content-bot">
        <div class="cont-l">
          <a-card :loading="loading" title="Card title" style="height:25rem;">

          </a-card>
        </div>
        <div class="cont-r">
          <a-card :loading="loading" title="Card title" style="height:25rem;">

          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #left{display: flex;flex-direction: column;float:left;}
  #content{margin-top: 2rem;}
  #content-top{overflow: hidden;}
  .cont-l{width: 72%;float: left;overflow: hidden;}
  .cont-r{width: 25%;float:right;}
  .user-card{height:9.5rem;}
  .card-col{width:48%;float: left}
  .card-ml{margin-left: 3.125%;}
  .row-top{margin-top: 1rem;}
  #content-bot{margin-top: 2rem;}
  #card1-top{width: 100%;display: flex;justify-content: center;}
  #bigRadius{width: 12rem;height:12rem;border-radius: 50%;background: #F18EC8;display: flex;justify-content: center;flex-direction: column;align-items: center;}
  #smallRadius{width: 6rem;height:6rem;border-radius: 50%;background: #EAFF00;display: flex;justify-content: center;flex-direction: column;align-items: center;}
  #card1-bot{width: 100%;overflow: hidden;}
  #card1-bot li{width: 50%;float: left;display: flex;flex-direction: column;justify-content: center;}
</style>

<script>
import { chartDiv } from '@/components'

export default {
  name: 'UserInfo',
  components: {
    chartDiv
  },
  data () {
    return {
      countryList: [
        { val: 'Philippines', name: '菲律宾' },
        { val: 'China', name: '中国' },
        { val: 'Britain', name: '英国' }
      ],
      loading: true,
      flag: false,
      ecObj1: {
        echartId: 'userInfo-pie-yl',
        width: '100%',
        height: '400px',
        title: '盈利占比',
        legendData: [],
        xData: [],
        seriesData: [
          {
            name: '',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ]
      }
    }
  },
  methods: {
    changeCountry () {

    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  }
}
</script>
