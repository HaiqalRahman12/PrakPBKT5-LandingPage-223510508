<template>
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="../assets/lego.jpg" />
        <q-carousel-slide :name="2" img-src="../assets/lego2.jpg" />
        <q-carousel-slide :name="3" img-src="../assets/lego3.jpg" />
        <q-carousel-slide :name="4" img-src="../assets/lego7.png" />
      </q-carousel>
    </div>

    <div style="display: flex;justify-content: center;"><h6>Kategori</h6></div>
    
    <div class="kategori">
    <q-btn color="white" text-color="black" label="Figure" />
    <q-btn color="white" text-color="black" label="Tradisional" />
    <q-btn color="white" text-color="black" label="Boneka" />
    <q-btn color="white" text-color="black" label="Lainnya" />
    </div>

    <Card />


    <div class="btn">
      <q-btn style="background-color: black;color: white; height: 60px; width: 500px;" label="Muat Lebih Banyak" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Card from './Card.vue'


  const slide = ref(1)
  const autoplay=ref('')
  
  </script>

<style scoped>
.pertama{
    background-image: url('/src/assets/haikal.jpg');
    background-size: cover;
    background-position: center;
}

.dua{
  position:relative;
  
}

.btn{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; 
  margin-bottom: 30px;
}

.kategori{
  display: flex;
  justify-content: center;
  gap: 30px;
}


</style>


  