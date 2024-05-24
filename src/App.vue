<template>
  <q-layout view="hHh lpR fff" >

    <q-header elevated class="bg-primary text-white" height-hint="98" style="background-color: black;">
      <q-toolbar style="background-color: black;">
        <q-toolbar-title >
          Toko Mainan
        </q-toolbar-title>


        <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
      </q-toolbar>

      <q-tabs  class="tab" style="background-color: black;">
    <div class="q-pa-md q-gutter-sm" >
      <router-link to="/" ><q-btn style="background: black; color: white" label="Home" /></router-link>
<q-btn style="background: black; color: white" label="Toko" />
<q-btn style="background: black; color: white" label="Profile" />
    </div>
      </q-tabs>

      
  
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="footer" >
      <q-footer elevated class="bg-black-8 text-white blc">
        <q-toolbar style="background-color: black;">
          <q-toolbar-title>
            <div class="zzz">Copyright © 2023-2024 Toko Mainan. - All Rights Reserved.</div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </div>

  </q-layout>
</template>

<style scoped>
.zzz{
  position: relative;
  font-family: system-ui;
  width: 100%;
  text-align: center;
}
</style>

<script setup>
import { ref } from 'vue'

const text = ref('')
</script>