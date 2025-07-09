import { defineStore } from 'pinia'

export const kullanKullanici = defineStore('kullanici', {
  state: () => ({
    kullaniciListesi: [
      {
        kullaniciAdi: 'admin',
        sifre: '1234',
        ad: 'Mustafa',
        soyad: 'Solak',
        email: 'Solak@mail.com',
        telefon: '0555555555',
        kullaniciID: '0'
      },
      {
        kullaniciAdi: 'admin2',
        sifre: '1234',
        ad: 'ahmet',
        soyad: 'Solak',
        email: 'Sola2k@mail.com',
        telefon: '0555555556',
        kullaniciID:'1'
      },
      {
        kullaniciAdi: 'admin3',
        sifre: '1234',
        ad: 'mehmet',
        soyad: 'Solak',
        email: 'Sola3k@mail.com',
        telefon: '0555555557',
        kullaniciID:'2'
      }
    ],
    aktifKullanici: {
        kullaniciAdi: 'admin',
        sifre: '1234',
        ad: 'Mustafa',
        soyad: 'Solak',
        email: 'Solak@mail.com',
        telefon: '0555555555',
        kullaniciID: '3'
      },
    mesaj: '',
      todostore: 
        {
          todolar: [ {
            title: 'ornek',
          }],
          todoid: [
            {
              title: '0',
            }
          ]
        }
      
    
  }),
  actions: {
    girisYap(ad, sifre) {
      const bulunan = this.kullaniciListesi.find(
        (k) => k.kullaniciAdi === ad && k.sifre === sifre
      )
      if (bulunan) {
        this.aktifKullanici = bulunan
        this.mesaj = ''
        return true
      } else {
        this.mesaj = 'Hatalı giriş yaptınız'
        return false
      }
    },
    cikisYap(){
      this.aktifKullanici = null
      router.push('/')
    },
    ToDoEkle(yToDo) {
 

  this.todostore.todolar.push(yToDo);
  this.todostore.todoid.push(this.aktifKullanici.kullaniciID);
}
    
  }
})