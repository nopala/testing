<template>
  <div class="sider">
    <div style="margin-top:-60px; margin-right:-200px;">
      <el-button
        @click="hide ^= true"
        type="text"
        class="el-icon-menu">
          MENU
      </el-button>
    </div>
    <el-aside
      width="200px"
      v-show="hide">
      <el-menu>
        <el-menu-item
        style="font-size:20px;">
          Dashboard
        </el-menu-item>
        <el-menu-item
        style="font-size:20px;">
          <router-link
          to="/Tabel">
            Tabel
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide : false,
    }
  }
}
</script>

<style scoped>
  .el-icon-menu {
    font-size: 26px;
    color: violet !important;
    text-align: center;
  }
  .el-icon-menu:hover {
    color: pink !important;
  }
  .el-menu {
    height: 100%;
    background-color : pink !important;
    text-align: center;
    border: none;
  }
  .el-menu-item {
    color: white;
  }
  .el-menu-item:hover {
    background-color: violet !important;
  }
  .sider {
    margin-left: 15px;
  }
</style>
