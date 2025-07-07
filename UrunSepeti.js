let user = {
    name: prompt("Adınız?"),
    age: prompt("Yaşınız?"),
    job: prompt("Mesleğiniz?")
  };
  console.log("Kullanıcı:", user);
  
  let cart = [];
  
  while (true) {
    let action = prompt("İşlem seçin:\n1: Ürün ekle\n2: Ürün sil\n3: Sepeti göster\nq: Çıkış");
    if (action === "1") {
      let product = prompt("Ürün adı:");
      let price = Number(prompt("Fiyatı:"));
      cart.push({ product, price });
      console.log(product, "sepete eklendi.");
    } else if (action === "2") {
      let remove = prompt("Silinecek ürün adı:");
      cart = cart.filter(item => item.product !== remove);
      console.log(remove, "sepetten silindi.");
    } else if (action === "3") {
      console.log("Sepetiniz:", cart);
      let total = cart.reduce((t, i) => t + i.price, 0);
      console.log("Toplam:", total, "TL");
    } else if (action === "q") {
      console.log("Çıkış yapıldı. Sepet:", cart);
      break;
    }
  }
  