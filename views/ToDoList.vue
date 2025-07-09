<script setup>
import {kullanKullanici} from '../stores/kullanici'
import KullaniciBilgileri from './KullaniciBilgileri.vue'
import {useRouter} from 'vue-router'
import {ref} from 'vue'
import { computed } from 'vue'

const kullaniciToDosu = computed(() => {
  return kullanici.todostore.todolar
    .map((todo, index) => {
      if (kullanici.todostore.todoid[index] === kullanici.aktifKullanici.kullaniciID) {
        return todo;
      }
      return null;
    })
    .filter(todo => todo !== null);
});


const router = useRouter();
const kullanici = kullanKullanici();
const yToDo = ref('');

function ToDoGonder() {
  kullanici.ToDoEkle(yToDo.value);
  yToDo.value = '';
}
  function todosil(index)
    {
      kullanici.todosil(index);
    }
</script>
<template>
    <div>
    <h2> ToDo Listeniz: {{ kullanici.kullaniciAdi }}!</h2>
    <ul>
        <input type ="text" v-model ="yToDo" placeholder="ToDo Ekle" />
        <button @click = "ToDoGonder">Görev Ekle</button>
    </ul>
    <ul>
    <li v-for="(todo, index) in kullaniciToDosu" :key="index">
    {{ todo }}
      <button @click = "todosil(index)">Sil</button>
    </li>
    </ul>
    

  </div>
</template>
