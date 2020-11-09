<template>
  <!-- 搜索模块 -->
  <div>
    <el-main>
      <el-form ref="form" :model="form" label-width="200px">
        <el-row>
          <el-form-item align="right" style="margin-right: 5%">
            <el-button
              type="primary"
              icon="el-icon-search"
              size="medium"
              
              >搜索</el-button
            >
            <el-button
              type="primary"
              icon="el-icon-refresh"
              size="medium"
           
              >重置</el-button
            >
          </el-form-item>
        </el-row>
        <el-row>
          <el-col :span="7">
            <el-form-item label="轮播图名称">
              <el-input v-model="form.name" style="width: 280px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="是否显示">
              <el-select
                v-model="form.show"
                placeholder="请选择"
                style="width: 280px"
              >
                <el-option label="是" value="是"></el-option>
                <el-option label="否" value="否"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="生效时间">
              <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="生效时间"
                style="width: 280px"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <el-form-item label="失效时间">
              <el-date-picker
                v-model="form.date2"
                type="date"
                placeholder="失效时间"
                style="width: 280px"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="位置">
              <el-select
                v-model="form.address"
                placeholder="请选择"
                style="width: 280px"
              >
                <el-option label="首页轮播图" value="首页轮播图"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-main>
    <el-main>
      <el-row>
        <el-col style="margin-bottom: 10px">
          <el-button
            type="primary"
            icon="el-icon-circle-plus-outline"
            size="medium"
            @click="drawer = true"
            >新增</el-button
          >
          <el-switch v-model="switch1" inactive-color="black"></el-switch>
          <el-button
            type="primary"
            icon="el-icon-refresh"
            size="small"
        
          ></el-button>
          <el-button
            type="primary"
            icon="el-icon-view"
            size="small"
          ></el-button>
        </el-col>
      </el-row>
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%"
        header-align="center"
        :highlight-current-row="true"
      >
        <el-table-column type="index" width="100"> </el-table-column>
        <el-table-column prop="name" label="轮播图名称" width="260">
        </el-table-column>
        <el-table-column prop="address" label="位置" width="220">
        </el-table-column>
        <el-table-column prop="type" label="轮播图类别" width="220">
        </el-table-column>
        <el-table-column prop="sequence" label="显示顺序" width="200">
        </el-table-column>
        <el-table-column prop="isShow" label="是否显示" width="200">
        </el-table-column>
        <el-table-column prop="pic" label="图片预览" width="220">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
            ></el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="deluser(scope.$index, scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row>
        <el-button
          type="primary"
          align="left"
          style="margin-right: 5%; margin-top: 10px"
          icon="el-icon-refresh"
          size="small"
      
          >刷新</el-button
        >
        <el-pagination
          align="right"
          style="margin-right: 5%"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1"
        >
        </el-pagination>
      </el-row>
    </el-main>

    <el-drawer>
      title="新增广告条" :visible.sync="drawer" :direction="direction"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="200px">
        <el-form-item label="轮播图名称">
          <el-input v-model="form.name" style="width: 280px"></el-input>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-select
            v-model="form.isShow"
            placeholder="请选择"
            style="width: 280px"
          >
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="轮播图类别">
          <el-select
            v-model="form.type"
            placeholder="请选择"
            style="width: 280px"
          >
            <el-option label="其他" value="其他"></el-option>
            <el-option label="商品" value="商品"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="显示顺序">
          <el-input v-model="form.sequence" style="width: 280px"></el-input>
        </el-form-item>
        <el-form-item label="生效时间">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="生效时间"
            style="width: 280px"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="失效时间">
          <el-date-picker
            v-model="form.date2"
            type="date"
            placeholder="失效时间"
            style="width: 280px"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="位置">
          <el-select
            v-model="form.address"
            placeholder="请选择"
            style="width: 280px"
          >
            <el-option label="首页轮播图" value="首页轮播图"></el-option>
          </el-select>
        </el-form-item>
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="medium"
          @click="addinfo"
          >保存</el-button
        >
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage4: 0,
      switch1: '',
      form: {
        name: "",
        show: "",
        address: "",
        date1: "",
        date2: "",
        add: "",
      },
      drawer: false,
      direction: "rtl",
      tableData: [
        {
          name: "测试1",
          address: "首页轮播图",
          type: "其他",
          sequence: "",
          isShow: "是",
          pic: "",
        },
        {
          name: "test3",
          address: "首页轮播图",
          type: "其他",
          sequence: "2",
          isShow: "是",
          pic: "",
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    resetForm(form) {
      this.$refs[form].resetFields();
    },
    // this.tableData.push(this.form)
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    addinfo() {
      this.tableData.push(this.form);
    },
    deluser(idx) {
      this.$confirm("确认删除?").then((_) => {
        this.tableData.splice(idx, 1);
      });
    },
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 0px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  margin: 0px 250px 10px 250px;
}
.el.table {
  margin: 5px 50px 5px 50px;
}
.el-table-column {
  text-align: center;
}
</style>
