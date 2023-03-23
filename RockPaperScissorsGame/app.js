function oyunuBaslat(secim){
    let kullaniciSecimi=secim.id;
    console.log(kullaniciSecimi)

    let rastgeleSayi=Math.floor(Math.random()*3)
    let bilgisayarSecimi=["tas","kagit","makas"][rastgeleSayi]
    console.log(bilgisayarSecimi)

    let oyunPuanlamalari={
        "tas":{"makas":1,"tas":0.5,"kagit":0},
        "kagit":{"tas":1,"kagit":0.5,"makas":0},
        "makas":{"kagit":1,"makas":0.5,"tas":0}
        
        
    }
    let kullaniciPuan=oyunPuanlamalari[kullaniciSecimi][bilgisayarSecimi];
    console.log(kullaniciPuan)

    let kayitliResimler={
        "tas":document.getElementById("tas").src,
        "kagit":document.getElementById("kagit").src,
        "makas":document.getElementById("makas").src
    }
    document.getElementById("tas").remove();
    document.getElementById("kagit").remove();
    document.getElementById("makas").remove();

    let kullaniciResmi=document.createElement("img");
    let bilgisayarResmi=document.createElement("img");
    let sonucMesaji=document.createElement("div");

    kullaniciResmi.src=kayitliResimler[kullaniciSecimi]
    bilgisayarResmi.src=kayitliResimler[bilgisayarSecimi]

    document.getElementById("container").appendChild(kullaniciResmi);
    document.getElementById("container").appendChild(sonucMesaji); 
    document.getElementById("container").appendChild(bilgisayarResmi);

    if(kullaniciPuan  === 0){
        sonucMesaji.innerHTML="Ay Aksi Kaybettin :("
        sonucMesaji.classList.add("basarisiz")
    }
    else if(kullaniciPuan === 0.5){
        sonucMesaji.innerHTML="Bir daha dene Berabere ;)"
        sonucMesaji.classList.add("berabere")
    }
    else{
        sonucMesaji.innerHTML="Tebrikler Kazandınız :d"
        sonucMesaji.classList.add("basarili")
    }

}
