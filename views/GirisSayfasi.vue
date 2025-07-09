<script setup>
import { ref } from 'vue'
import { kullanKullanici } from '../stores/kullanici'
import KullaniciBilgileri from './KullaniciBilgileri.vue'
import {useRouter} from 'vue-router'


const router = useRouter();
const kullanici = kullanKullanici()

const kullaniciAdi = ref('')
const sifre = ref('')
const girisYapildi = ref(false)

function giris() {
  girisYapildi.value = kullanici.girisYap(kullaniciAdi.value, sifre.value)
}

</script>

<template>
  <div v-if="!girisYapildi">
    <h2>Kullanıcı Girişi</h2>
    <input v-model="kullaniciAdi" placeholder="Kullanıcı Adı" /><br /><br />
    <input type="password" v-model="sifre" placeholder="Şifre" /><br /><br />
    <button @click="giris">Giriş Yap</button>
    <p style="color:red">{{ kullanici.mesaj }}</p>
  </div>

  <KullaniciBilgileri v-else />
</template>