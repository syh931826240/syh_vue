 <template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="时间" width="80"></el-table-column>
      <el-table-column prop="date" label="作者" width="80"></el-table-column>
      <el-table-column prop="name" label="评论"></el-table-column>
    </el-table>

    <div>
      <input
        v-model="message"
        type="text"
        v-if="write"
        v-on:click="pl"
        style="height:30px;margin-top:3px;width:350px"
      >
      
      <textarea v-else v-on:blur="pl" style="width:80%" v-model="message" autofocus></textarea>
      <el-button
        type="warning"
        icon="el-icon-edit"
        style="position:relative;right:0px"
        v-on:click="pl"
      ></el-button>
    </div>
    <label>写点什么</label>
  </div>
</template>

  <script>
export default {
  mounted: function() {
    this.save();
  },
  watch: {
    write: function(nv) {
      write = nv;
    }
  },
  data() {
    return {
      message: "",
      write: true,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    publish() {
      sessionStorage.cm2;
      this.$http.post("", { blog_data: sessionStorage.cm2 }).then(
        res => {},
        () => {
          console.log("请求失败");
        }
      );
    },
    pl() {
      this.write = !this.write;
    },
    publish_comment() {
      sessionStorage.cm2 += this.cm;
      // console.log(sessionStorage.co);
      //  console.log(sessionStorage.cm1);
      this.publish();
      this.$store.commit("delicious_comment", { cm: sessionStorage.cm2 });
    },
    save() {
      sessionStorage.cm1;
      this.$store.commit("delicious_comment", { cm: sessionStorage.cm1 });
    }
  }
};
</script>
  <style>
.center {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
  