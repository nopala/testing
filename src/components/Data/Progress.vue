<template>
  <el-card shadow="always">
      <p style="text-align:left; margin-top:-10px; font-size:20px;">
        Kuota
        <br>
        <span style="font-size:12px;">
          Januari - April 2012
        </span>
      </p>
    <el-row :gutter="80">
      <el-col :span="12">
          <el-progress type="circle" :percentage="35"></el-progress>
            <br>
            Januari
      </el-col>
      <el-col :span="12">
          <el-progress type="circle" :percentage="20"></el-progress>
            <br>
            Febuari
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="80">
      <el-col :span="12">
          <el-progress type="circle" :percentage="12"></el-progress>
            <br>
            Maret
      </el-col>
      <el-col :span="12">
          <el-progress type="circle" :percentage="52"></el-progress>
            <br>
            April
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
