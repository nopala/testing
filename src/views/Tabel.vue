<template>
  <div style="padding:20px;">
    <Form/>
    <br>
    <el-table
      border
      style="width: 100%"
      :data="info">

        <el-table-column
          prop="etdoc__mitra"
          label="Mitra">
        </el-table-column>
        <el-table-column
          prop="nomor_ap"
          label="Nomor AP">
        </el-table-column>
        <el-table-column
          prop="fb60"
          label="FB60 (Penambah)">
        </el-table-column>
        <el-table-column
          prop="etuser__lengkap"
          label="User">
        </el-table-column>
        <el-table-column
          prop="etdoc__faktur"
          label="Faktur">
        </el-table-column>
        <el-table-column
          prop="etdoc__dpp"
          label="DPP">
        </el-table-column>
        <el-table-column
          prop="etdoc__ppn"
          label="PPN">
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Form from './Form.vue'
import axios from 'axios'
export default {
  data() {
    return {
      info : '',
    }
  },
  components : {
    Form,
  },
  mounted () {
    axios
    .get('http://10.14.56.27/iconplus/e-tracking-backend/?u=loket/proses')
    .then (response => (this.info = response.data.etproses))
  }
}
</script>

<style>

</style>
