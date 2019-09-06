<template>
  <el-container>
    <el-header>
      <el-button type="text">
        <li
        class="el-icon-user">
        </li>
      </el-button>
    </el-header>
    <hr>
  </el-container>
</template>

<script>
export default {

}
</script>

<style scoped>
  .el-button,li {
    float: right;
  }
  .el-icon-user {
    font-size: 26px;
    color: violet;
  }
  .el-icon-user:hover {
    color: pink;
  }
  hr {
    border: 1px solid violet;
    width: 100%;
    margin-top : -8px;
  }
</style>
