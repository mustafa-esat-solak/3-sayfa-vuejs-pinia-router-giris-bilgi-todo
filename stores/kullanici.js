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
      },
      {
        kullaniciAdi: 'admin4',
        sifre: '1234',
        ad: 'can',
        soyad: 'Solak',
        email: 'Solak4@mail.com',
        telefon: '0555555558',
        kullaniciID:'4'
      },
      {
        kullaniciAdi: 'admin5',
        sifre: '1234',
        ad: 'ali',
        soyad: 'solak',
        email: 'solak5@mail.com',
        telefon: '05555555559',
        kullaniciID:'5'
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
},
ToDoSil(index) {
  this.todostore.todolar.splice(index, 1);
  this.todostore.todoid.splice(index, 1);
}
    
  }
})
