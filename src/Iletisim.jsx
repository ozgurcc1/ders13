import { useState } from 'react';
function Iletisim(){
const[formalanlari,formalanlariGuncelle] = useState({});

const topluGuncelleme = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  formalanlariGuncelle(values => ({...values, [name]: value}))
}

  const formGonder = (olay) =>{
    olay.preventDefault();//formun tarayıcı tarafından gönderim işlemi durduruluyor.
  if(!formalanlari.isim || formalanlari.isim.length < 2){
    alert("İsim uzunluğu 2'ten küçük olamaz.")
    return;
  }

    if(formalanlari.isim?.length > 10){
      alert("İsim uzunluğu 10 dan büyük olamaz")

      return;
    }

    if(formalanlari.soyisim?.length > 10){
      alert("Soyisim uzunluğu 10 dan büyük olamaz")
      return;
    }

    if(formalanlari.telefon?.length > 10){
      alert("Telefon uzunluğu 10 dan büyük olamaz")
      return;
    }
    if(formalanlari.site?.length > 10){
      alert("Site uzunluğu 100 dan büyük olamaz")
      return;
    }
    alert("Mesajınız gönderildi")
  }
  return(
    <>
    <form onSubmit={formGonder}>
      <div>
        <p>İsminiz:</p>
        <input name="isim" onChange={topluGuncelleme} type="text" />
        {formalanlari?.isim?.length}
      </div>

      <div>
        <p>Soyisminiz:</p>
        <input name="soyisim" onChange={topluGuncelleme} type="text" />
        {formalanlari?.soyisim?.length}
      </div>

      <div>
        <p>Telefon:</p>
        <input name="telefon" onChange={topluGuncelleme} type="number" />
        {formalanlari?.telefon?.length}
      </div>

      <div>
        <p>Site adresiniz:</p>
        <input name="site" onChange={topluGuncelleme} type="text" />
        {formalanlari?.site?.length}
      </div>
      <div>
        <p>Bizi Nereden duydunuz?</p>
        <select name="neredenduyuldu" onChange={topluGuncelleme}>
        <option value="Google">Google</option>
        <option value="Arkadaslar">Arkadaslar</option>
        <option value="Instagram">Instagram</option>
      </select>
      </div>
      <div>
        <p>Mesajınız:</p>
        <textarea name="mesaj" onChange={topluGuncelleme} type="text" />
        {formalanlari?.mesaj?.length}
      </div>
     
      <button type="submit">Gönder</button>
    </form>
    </>
    )
}
export default Iletisim;