<template>
  <div>
    <el-button
      @click="dialogVisible = true">
      Tambah Invoice
    </el-button>

  <el-dialog
    title="Tambah Invoice"
    :visible.sync="dialogVisible"
    width="50%">

  <el-form
    @submit="formSubmit">
    <el-row :gutter="20">
      <el-col :span="12">
        Nomor Faktur
        <br>
        <el-input v-model="nomor_faktur"></el-input>
      </el-col>
      <el-col :span="12">
        Tanggal Faktur
        <br>
        <el-input v-model="tgl_faktur"></el-input>
      </el-col>
    </el-row> <br>
        Mitra
        <br>
        <el-input v-model="mitra"></el-input>
    <el-row :gutter="20">
      <el-col :span="12">
        DPP
        <br>
        <el-input v-model="dpp" placeholder="Rp.0"></el-input>
      </el-col>
      <el-col :span="12">
        PPN
        <br>
        <el-input v-model="ppn" placeholder="Rp.0"></el-input>
      </el-col>
    </el-row> <br>
        Nomor Invoice
        <br>
        <el-input v-model="nomor_invoice"></el-input>
    <br>
    Kategori Invoice
    <br>
    <el-select v-model="value" placeholder="Pilih">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </el-form>


    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="formSubmit">Simpan</el-button>
    </span>
  </el-dialog>
{{output}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      dialogVisible : false,
      vendor_id : '1630',
      start : '',
      kategori_id : '4',
      nomor_faktur : '',
      output : '',
      tgl_faktur : '',
      nomor_invoice : '',
      ppn : '',
      dpp : '',
      mitra : '',
      value : '',
      options: [{
        value: 'Option1',
        label: 'Option1'
      }],
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.dialogVisible = false
      let currentObj = this;
      var bodyFormData = new FormData();
      bodyFormData.set('vendor_id', '1630');
      bodyFormData.set('kategori_id', '4');
      bodyFormData.set('start', '');
      bodyFormData.set('data', JSON.stringify([
        {
          vendor_id: this.vendor_id,
          kategori_id: this.kategori_id,
          start: this.start,
          dialogVisible: this.dialogVisible,
          nomor_faktur: this.nomor_faktur,
          tgl_faktur: this.tgl_faktur,
          nomor_faktur: this.nomor_invoice,
          ppn: this.ppn,
          dpp: this.dpp,
          mitra: this.mitra,
          value: this.value,
          options: this.options
        }
      ]));


      this.axios.post('http://10.14.56.27/iconplus/e-tracking-backend/?u=loket/save', bodyFormData)
      .then(function (response) {
          currentObj.output = response.data;
      })
      .catch(function (error) {
          currentObj.output = error;
      })
    }
  }
}
</script>

<style>

</style>
