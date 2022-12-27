function searchCardProduct() {
  const input = document.querySelector('.kotak-pencarian').value.toLowerCase();
  const cardList = document.querySelectorAll('.card-title');
  for (card of cardList) {
    if (card.innerText.toLowerCase().includes(input)) {
      card.parentElement.parentElement.parentElement.style.display = 'block';
    } else {
      card.parentElement.parentElement.parentElement.style.display = 'none';
    }
  }
}
function textPemandu() {
  const pemandu = document.querySelector('.textPemandu');
  const input = document.querySelector('.kotak-pencarian').value;
  pemandu.innerText = input;
  if (input == '') {
    document.querySelector('.textPemandu').innerText = 'Semua Produk';
  }
}
function pencarianKembali() {
  const cardList = document.querySelectorAll('.card-title');
  for (card of cardList) {
    card.parentElement.parentElement.parentElement.style.display = 'block';
  }
  textPemandu();
}
function menghapusTeksInput() {
  const input = (document.querySelector('.kotak-pencarian').value = '');
}
document.querySelector('.k-1').addEventListener('click', function () {
  const triger = document.querySelector('.k-1').innerText;
  const pemandu = (document.querySelector('.textPemandu').innerText = triger);
  const cardList = document.querySelectorAll('.card-title');
  for (card of cardList) {
    if (card.innerText.includes(pemandu)) {
      card.parentElement.parentElement.parentElement.style.display = 'block';
    } else {
      card.parentElement.parentElement.parentElement.style.display = 'none';
    }
  }
});
document.querySelector('.k-2').addEventListener('click', function () {
  const triger = document.querySelector('.k-2').innerText;
  const pemandu = (document.querySelector('.textPemandu').innerText = triger);
  const cardList = document.querySelectorAll('.card-title');
  for (card of cardList) {
    if (card.innerText.includes(pemandu)) {
      card.parentElement.parentElement.parentElement.style.display = 'block';
    } else {
      card.parentElement.parentElement.parentElement.style.display = 'none';
    }
  }
});
document.querySelector('.k-3').addEventListener('click', function () {
  const triger = document.querySelector('.k-3').innerText;
  const pemandu = (document.querySelector('.textPemandu').innerText = triger);
  const cardList = document.querySelectorAll('.card-title');
  for (card of cardList) {
    if (card.innerText.includes(pemandu)) {
      card.parentElement.parentElement.parentElement.style.display = 'block';
    } else {
      card.parentElement.parentElement.parentElement.style.display = 'none';
    }
  }
});
document.querySelector('.k-4').addEventListener('click', function () {
  const triger = document.querySelector('.k-4').innerText;
  const pemandu = (document.querySelector('.textPemandu').innerText = triger);
  const cardList = document.querySelectorAll('.card-title');
  for (card of cardList) {
    if (card.innerText.includes(pemandu)) {
      card.parentElement.parentElement.parentElement.style.display = 'block';
    } else {
      card.parentElement.parentElement.parentElement.style.display = 'none';
    }
  }
});
document.querySelector('.tombol-pencarian').addEventListener('click', function () {
  searchCardProduct();
  textPemandu();
  menghapusTeksInput();
});
document.querySelector('.tombol-kembali').addEventListener('click', function () {
  pencarianKembali();
});
