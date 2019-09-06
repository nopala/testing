<template>
  <el-container>
      <el-header>
        <Head/>
      </el-header>

    <el-container>
      <SideNav/>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item>Dashboard</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="bg-main">
          <el-row :gutter="20">
            <el-col :span="12">
              <Progress/>
            </el-col>
            <el-col :span="12">
              <costumer/>
            </el-col>
          </el-row>
            <br>

          <Chart/>
            <br>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Head from '@/components/Navigasi/Header.vue'
import SideNav from '@/components/Navigasi/SideNav.vue'
import Progress from '@/components/Data/Progress.vue'
import Costumer from '@/components/Data/Costumer.vue'
import Chart from '@/components/Data/Charts.vue'

export default {
  components : {
    Head,
    Chart,
    SideNav,
    Costumer,
    Progress,
  }
}
</script>

<style scoped>
  .el-main {
    text-align: center;
    margin-top: -7px;
    background-color: rgba(255, 192, 203, 0.1);
  }
  .bg-main {
    margin-top: 20px;
  }
  .bg-white {
    background-color: white;
  }
  .border {
    border: 1px solid pink;
  }
</style>
