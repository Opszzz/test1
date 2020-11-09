<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col>
          <el-card class="box-card1" style="margin-top: 0px"
            ><el-row style="margin-top: 0px">33</el-row
            ><el-row style="margin-top: 15px">租户总数</el-row>
          </el-card>
        </el-col>
        <el-col>
          <el-card
            class="box-card2"
            style="margin-top: -102px; margin-left: 380px"
            ><el-row style="margin-top: 0px">102400</el-row
            ><el-row style="margin-top: 15px">点击总数</el-row>
          </el-card>
        </el-col>
        <el-col>
          <el-card
            class="box-card3"
            style="margin-top: -102px; margin-left: 760px"
          >
            <el-row>76</el-row>
            <el-row style="margin-top: 15px">用户总数</el-row>
          </el-card>
        </el-col>
        <el-col>
          <el-card
            class="box-card4"
            style="margin-top: -102px; margin-left: 1140px"
            ><el-row style="margin-top: 0px">81</el-row
            ><el-row style="margin-top: 15px">租户总数</el-row>
          </el-card>
        </el-col>
        <el-col>
          <el-card
            class="box-card5"
            style="margin-top: -102px; margin-left: 1520px"
          >
            <el-row>85</el-row
            ><el-row style="margin-top: 15px">设备接入总数</el-row>
          </el-card>
        </el-col>
      </el-row>
      <div
        id="pic1"
        style="width: 1300px; height: 350px; margin-top: 20px"
      ></div>
      <div
        id="pic2"
        style="width: 550px; height: 350px; margin-left: 50px; margin-top: 0px"
      ></div>
      <div
        id="pic3"
        style="
          width: 430px;
          height: 300px;
          margin-top: -650px;
          margin-left: 1350px;
        "
      ></div>
      <div
        id="pic4"
        style="width: 540px; height: 350px; margin-left: 700px; margin-top: 0px"
      ></div>
      <div
        id="pic5"
        style="
          width: 540px;
          height: 350px;
          margin-left: 1300px;
          margin-top: -350px;
        "
      ></div>
    </el-main>
  </el-container>
</template>
      

<script>
export default {
  data() {
    return {
      isCollapse: true,
      tabPosition: "left",
    };
  },
  methods: {
    handleclick(tab, event) {
      this.$router.push("/Home/Banner");
    },
    // Hom() {
    //   this.$router.push("/Home");
    // },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var pic1 = this.$echarts.init(document.getElementById("pic1"));
      // 绘制图表
      pic1.setOption({
        xAxis: {
          //坐标轴类型
          type: "category",
          //配置类目名称。 可以逐一设置，具体看文档
          data: ["mom", "tue", "wen", "thu", "fri", "sat", "sun"],
          //配置 鼠标移入时显示的 阴影指示器'line' 直线指示器 'shadow' 阴影指示,器  'none' 无指示器
          axisPointer: {
            show: true, //show 必须写，开关的作用
            type: "shadow",
          },
        },
        //配置Y轴
        yAxis: [
          {
            type: "value", //坐标轴类型
            name: "租户设备采集记录", //名称
            min: 0, //最小值
            max: 600, //最大值
            interval: 100, //列数
          },
        ],
        //系列列表。每个系列通过 type 决定自己的图表类型,一个对象表示一个列表
        series: [
          {
            name: "电子查阅",
            type: "line",
            data: [150, 280, 80, 450, 300, 187, 525],
          },
        ],
      });
      //鼠标事件
      pic1.on("click", function (params) {
        console.log(params);
      });
      var pic2 = this.$echarts.init(document.getElementById("pic2"));
      // 绘制图表
      pic2.setOption({
        color: ["#E6A23C"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "8%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            data: ["", "", "", "", "", ""],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "每周提交流程总数录", //名称
            min: 0, //最小值
            max: 18, //最大值
            interval: 3, //列数
          },
        ],
        series: [
          {
            name: "2020.8.20",
            type: "bar",
            barWidth: "30%",
            data: [0, 5, 0, 0, 17, 0],
          },
        ],
      });
      //鼠标事件
      pic2.on("click", function (params) {
        console.log(params);
      });
      var pic3 = this.$echarts.init(document.getElementById("pic3"));
      // 绘制图表
      pic3.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["赛意IOT子公司", "行政管理", "拉米科技", "测试公司"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 3, name: "赛意IOT子公司" },
              { value: 1, name: "行政管理" },
              { value: 1, name: "拉米科技" },
              { value: 1, name: "测试公司" },
            ],
          },
        ],
      });
      var pic4 = this.$echarts.init(document.getElementById("pic4"));
      // 绘制图表
      pic4.setOption({
        color: ["#35d7f3"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "6%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            data: ["", "", "", "", "", "", "", "", "", ""],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "每周提交流程总数录", //名称
            min: 0, //最小值
            max: 120, //最大值
            interval: 20, //列数
          },
        ],
        series: [
          {
            name: "1",
            type: "bar",
            barWidth: "30%",
            data: [17, 17, 105, 17, 17, 17, 17, 17, 17, 17],
          },
        ],
      });
      //鼠标事件
      pic4.on("click", function (params) {
        console.log(params);
      });
      var pic5 = this.$echarts.init(document.getElementById("pic5"));
      // 绘制图表
      pic5.setOption({
        color: ["#F56C6C"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "6%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            data: ["", "", "", "", "", "", "", "", "", ""],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "每周提交流程总数录", //名称
            min: 0, //最小值
            max: 120, //最大值
            interval: 20, //列数
          },
        ],
        series: [
          {
            name: "1",
            type: "bar",
            barWidth: "30%",
            data: [17, 17, 105, 17, 17, 17, 17, 17, 17, 17],
          },
        ],
      });
      //鼠标事件
      pic5.on("click", function (params) {
        console.log(params);
      });
    },
  },
  mounted() {
    this.drawLine();
  },
};
</script>

<style scoped>
.el-header {
  background-color: #0ab1e9;
  color: #fff;
  line-height: 60px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 120px;
  min-height: 600px;
}
.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  width: 120px;
  height: 965px;
}
.el-main {
  background-color: rgb(248, 246, 246);
  color: #333;
  text-align: center;
  width: 920px;
  height: 965px;
}
.box-card1 {
  width: 350px;
  background-color: #409eff;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  height: 100px;
  border-radius: 8%;
}
.box-card2 {
  width: 350px;
  background-color: #67c23a;
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  border-radius: 8%;
  height: 100px;
}
.box-card3 {
  width: 350px;
  background-color: #e6a23c;
  color: #fff;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8%;
  height: 100px;
}
.box-card4 {
  font-weight: bold;
  width: 350px;
  background-color: #f56c6c;
  color: #fff;
  text-align: center;
  font-size: 20px;
  border-radius: 8%;
  height: 100px;
}
.box-card5 {
  width: 350px;
  background-color: #67c23a;
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  border-radius: 8%;
  height: 100px;
}
.pic1 {
  background-color: #fff;
}
.pic2 {
  background-color: #fff;
  width: 400px;
  height: 300px;
}
.box {
  margin-top: 150px;
}
</style>