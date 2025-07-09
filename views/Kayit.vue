<script setup>
    import { kullanKullanici } from '@/stores/kullanici';
    import { useRouter } from 'vue-router'; 
    import {ref} from 'vue';

    const kullanici = kullanKullanici()
    const router = useRouter()

   const kullaniciAdi = ref('')
    const ad = ref('')
    const soyad = ref('')
    const sifre = ref('')
    const email = ref('')
    const telefon = ref('')
    const kullaniciID = ref('')

function kullaniciekle() {
  const yeniKullanici = {
    kullaniciAdi: kullaniciAdi.value,
    ad: ad.value,
    soyad: soyad.value,
    sifre: sifre.value,
    email: email.value,
    telefon: telefon.value,
    kullaniciID: kullaniciID.value
  }

  kullanici.kullaniciListesi.push(yeniKullanici)

  router.push('/');
}

</script>
<template>
    <div>
        <input v-model="kullaniciAdi" placeholder="Kullanıcı Adı"/>
        <input v-model="ad" placeholder="Ad" />
        <input v-model="soyad" placeholder="Soyad"/>
        <input v-model="sifre" placeholder="Şifre"/>
        <input v-model="email" placeholder="Email" />
        <input v-model="telefon" placeholder="Telefon NO"/>
        <input v-model="kullaniciID" placeholder="Kullanıcı ID'niz"/>

        <button @click="kullaniciekle">Kullanıcı Ekle</button>
    </div>
</template>
