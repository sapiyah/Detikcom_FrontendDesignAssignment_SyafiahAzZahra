// Navbar Slide
const checkbox = document.querySelector(".category button");
const navList = document.querySelector("nav .nav-menu");
const boList = document.querySelector("nav");

checkbox.addEventListener("click", function () {
    navList.classList.toggle("slide");
    boList.classList.toggle("slide");
    document.querySelector('.nav-container').classList.toggle('slide');
    var imageElement = document.getElementById('myimage');
    
    if(boList.classList.contains('slide')) {
      imageElement.src = './img/cancel.png';
    } else {
      imageElement.src = './img/Category.png'
    }
});

// Data Sponsor
const sponsors = [
  { id: 1, image: 'https://s3-alpha-sig.figma.com/img/81d9/0de8/1b37f2e2dc7e8aa1418e355888d6cce0?Expires=1704672000&Signature=CsWOVj4lx4928G7a1Bkygol9CwM2ZNaPqbmsmHKe~Qo30s6HhPESlNKd5m1X6ChJnqjwjqzUEYEOkKVHNThWLyS~ipT~fkcG9UJhDctBkSQ8Qbj8i5NaIFY0sGeybYQb22B2e4S~H1SdkGzx3ZoiIAWmAQqvJ4zy1MfWeCotIu8WgHTGCNXnXlelWUhtFDC53tA1sTUM5O-4Dw8UOFlELA2Dmz3lg1kEFav3axeXKfWAzHWyDPYESLL27sRtZ9AbuliFl9Ol27H0Idn9uyUUK4~YoQr0kysh-NprWZP8TM82I6xrleGMVQa9PwIree8uQ~aSRvH6ztvvZYt50x1Wsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 2, image: 'https://s3-alpha-sig.figma.com/img/e563/b51a/6dedf78e2c96b74079a79b07baa7e74d?Expires=1704672000&Signature=bL3jLngJMoEiCOo-oG4cuevK-UVbYP5oVh8Xe5Ca~U2mky1ymaJYtgprHYc-Ra34xMx98PPfAofQvXa6~jxJseZyaIfL6TkNLVzUi2x2TjpOFYf4WVv1pPBhMbePpQNcDQ1IDzcB4dLgxbNipIcC1E7G8dzMUiP-4qw5KAQineolO1SK4EjZBeQoe50Cv35ZqvrK4iuh5mcZdbqgkMz9XycsrJK0W3fBRQtsvlnlosuZvmesoLEI-uQggddnLui~VtMQipapNYs33f0VHQcTae3~mFzlzF5o7Q-AUaSVacXdr995L1aavPqHn4HAUDiyks3wrVfbLtSwz~s2yVG8LQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 3, image: 'https://s3-alpha-sig.figma.com/img/8ff3/d97c/509e86001979aa2ff3e0df4f9cfe7a31?Expires=1704672000&Signature=OeV7rCSQIBKCkl~4BJZUoxVH7cD73azjqwAyZobVwrY-Zynfz9zXFmzHdLa4rNWbuj2dUSt43UisLNASBnXg9-uTWG11nbYFYySO0STizdUuTdvAnTRT6iLv~QKSqQavuf7bfCT-YyglJuSgexGMndopHiV1ZPh86u8zaIe-88dodEFwFKRw7xTFdG~c4gQa~RVi0nZXTUcR-ZFjwKchoMsxkf2p8Yj4CCIsZu0m9PmDBA7S~pstLBLBjIAsyhQcyabBLQwwpYxrnzbGEwu2~NgBOx-IyGN6rlR4M2JixnrVpLF4121D37bPQ4J4x3Acl35oM~uwnopsSo5aHBjCbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 4, image: 'https://s3-alpha-sig.figma.com/img/4f32/ba21/29275d03aa95f85b18341a757130ee45?Expires=1704672000&Signature=CTUWdiX3wE8s~AnReRNow0vluy7JCS8WFGxme~icDPeTjTRO47VdD6brmtgH4YC6utSdR2icmAiRvXx~EB6YxDikpkxCNbY5kIAdFFzWinA0K-UeyHquKewwAFnFqQRV7KDLQ2F-ALu~JCIKpjFBgCSI1ny-OXvfBkJJCV82QtZIbzZP7u62xv~a9TuMsVQCMQb6S6BUFJccNvYPdpistWVd6f9UOMpERdzkxxDp6TA9OmsuuTp7BlWu3gkHUQd0NNmZdHJSaPljDTxS-zZtt-5AVZXuI0TEVlFQvu3YjLyPkkjSZ-mMC-lQF-jAWd7CQdoSnd2GbT7jxkNEQ-AKQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 5, image: 'https://s3-alpha-sig.figma.com/img/9bdc/cf6f/db8bb11954f713f1530afc1439f20e41?Expires=1704672000&Signature=oWqKeVGF8WX4tckTBMfv5TL3WSkFOW1mP7T95r2rQmoxhv1oQjkx5oC1euFx5zFntMifTJ3k1SFUVZSexQ1Sx1P~VGbPcYxliNT0ruFg7~0OJLJTYmMJFCZX1d-69tmGoAurK5QvxSwHH9C8lVk-rfO-1sjJRPoUT1a4yX84t55I18vwkXMYqInLSSLWX3agW9nInFnsMEx31Kc4damqiNhEVrjpbfB7-lNLimrLe9tsoLn2i3o4hNOwSOf-90TCUq0gcGh0D578FSYA-E5bipgQmk-CMw4RYKJacrNdACC7-7y3~QumOXcYJcvZ~WCONVmkDrTO29NoyqPAZ-z20A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 6, image: 'https://s3-alpha-sig.figma.com/img/8ce2/1876/80c7707b140706f861ef7f831b632b56?Expires=1704672000&Signature=cv302OsZqf09uZMOJ~js9bpr6Kih53XlrbuOBWtas5t4NSw8BaWRh89pSeqjTgNP8PjLcvOvE4z6TA2YoiXsvsEQ39ehc32~-4mP5jplvq3Bg1BDGejwQSZRKdn1onGnN9k2G9SENJ0ZgqzxxRT36cTXr-mGdaKxeTtH04t~zCRanaIZWSd7c1VV6SFc2S-Ngd6xaIo6UESKh1Kr6bNaunv-yL2N7gddDW1h2THw8hCANoD49OcEpllI7FyLzsTw5VWrEI2Cotlmv5ag8e0J-czZ4moOd01V93uAbHRbKNa2ClaESKg3PFgvHUuGNSQVf2I3VBoMtDZy3W31Gp0DZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 7, image: 'https://s3-alpha-sig.figma.com/img/14e2/1daf/ad23464caced1fa6d617615da91cc26b?Expires=1704672000&Signature=qYivFzCgd4mh6AuWzvgk4pfzKVA0kPXgA49nwj9a7GvBCJ95Sw1BC2JV2mqV2I4E39R~hse~HsoAGfvMALynaMrf6rNXGTWlfnO-xQ1JqLZu5OK7ceDXnwS5jIVaNcsoM8Z8IpGCO~TzHP0woDb0v~lOs0GiL7rtwHErzRuKrxUM1FFhOqb1icOTWY7L7LvMs6qtGEZGflcpYoW0bqwPr9FOLwuPxK76v7In04rLjaWGFcwPxSfwF79EsXCCAsWHEO4uIPgdVubwV6NdoUIgyi7XV8bUvhVckvUZk9ubAGt1LuGr46bcd8I3nCVCrxz8U5jMab81ZOlUuGPf4MHCKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 8, image: 'https://s3-alpha-sig.figma.com/img/602c/5c1b/837364aa1936021f99d5fe0055affb36?Expires=1704672000&Signature=FMu~axO6~QNrVHCg~Ei5EL-mBvLSO1lPzKXH236PjiGzQOlHQFA9OJGUKw53mjaud4JlpvrtNgdKVqjKWxQqO5iaNDFSNFzO9GdCeAZXJubgNdW4bm3Lq9HX5dAoTSaB5lq7OTOaLUFGKyhNse86uFiMH~k1o9WC9Cb2sGwa1IJ2MGtdn54GaNB~FvxJlj5h~t2zrs-7d8uPnma7FppbgYsF1pYkM954Jp6GuYREQ2XX941dVmfz505vtTy2h1bFXx~rZA10p8~75UzN0pyLd~qQQs2awxMWVEH8w-q5dZ2nyQg9SqkkpKN0JSLSmIpNCM8wHJ65QySTIsZeV8gfUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
];

const duplicatedSponsors = [...sponsors, ...sponsors];

const sponsorList = document.getElementById('group');

renderSponsor();

function renderSponsor(){
  sponsorList.innerHTML = '';

  duplicatedSponsors.forEach(sponsor => {
      const itemSponsor = document.createElement('div');
      itemSponsor.classList.add('frame-1');
      itemSponsor.innerHTML = `
          <div class="frame-2">
              <div class="frame-3">
                  <img src="${sponsor.image}" alt="Sponsor ${sponsor.id}" class="sponsor-image">
              </div>
          </div>
      `;

      sponsorList.appendChild(itemSponsor);
  });
}

// Slide galeri
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.item-pict');
  const thumbnails = document.querySelectorAll('.thumb-list .thumbnail');

  thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
          changeActiveItem(index);
      });
  });

  document.getElementById('arrow-left').addEventListener('click', () => {
      const currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
      const newIndex = (currentIndex - 1 + items.length) % items.length;
      changeActiveItem(newIndex);
  });

  document.getElementById('arrow-right').addEventListener('click', () => {
      const currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
      const newIndex = (currentIndex + 1) % items.length;
      changeActiveItem(newIndex);
  });

  function changeActiveItem(index) {
      items.forEach(item => item.classList.remove('active'));
      thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
      
      items[index].classList.add('active');
      thumbnails[index].classList.add('active');
  }
});

// artikel content
const artikel = [
  { id: 1, image: 'https://s3-alpha-sig.figma.com/img/28fa/8c20/7a66c12b01bde431f1ddefca6c2fcb14?Expires=1704672000&Signature=VIMxItPq496yNrxAkGSz2vp61jMMBW-00YXBWVLOZqIFcQWmQaM9p9nwoIOdQmelmWNTvrj4~0LGTZzrp2PRtX0rk6eHBntjxR3L2ao2bRWBh0RkNcl69HA2Rjp0DIUIeHVJgfR3mFwXBjDA6RkZDwZLj61OtrYj4OMrg4wtlR7P1Fu4G-3znIbmy-0Od69DFuQG0tEVcEO0oK9lQlb9gDZlaYAYsTRhmX7padbZ7BmQ8Nn4sgbAm~-n6KDHPQh~5RTYid5sJGF1EgiQswmVYDfh6R6cQNzu8nlfvm1fYLdM-EIqui8IiXV9OOf1jJ2o20kaQoX41DGTKFeRAFe-aA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', title: 'Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya', time: 'Sabtu, 25 Nov 2023 20:00 WIB'},
  { id: 2, image: 'https://s3-alpha-sig.figma.com/img/47e5/b4c6/b5abf81598ac4f92a40a299fc03f8a78?Expires=1704672000&Signature=nTh~6s8AptY8jm~AJI~~0HDldicu5VpiUPGxKRZiB-WIifPg8yb226IgT1MDSlf13OY7oJpxAq~WnbUtVxBvsjeh4h8qAQ49VUgNp6EJLRPg5GCw8xcI67WjrxYbRA-8T8i7oKGRbPwR0BNIE0HjbfcUo7Xuxeiejhnq7LT0Qqbg85BCujXwUguWpOFcOmcFH0jVnCG1nm9~hj9pscF4prorlWwAzv6JBbeIYYI1L1nePPMVuIW1hnPY5huPFtY~ZQn864u70fy5aXdr9s0~btRhXJ-pmJ2j6E89ravdxsZMJ7g5TeCIXFLOUVUydK9mWIOL7MOnpBCBBfmqI0COoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', title: 'Edukasi Lingkungan Hidup Bonus Sehat di \'Misi Lestari 2023: See Nature\'', time: 'Selasa, 28 Nov 2023 07:42 WIB'},
  { id: 3, image: 'https://s3-alpha-sig.figma.com/img/9344/23cc/4b6b5098c051551d57341269fe1cebce?Expires=1704672000&Signature=h-end~xE8jFFEVK-e1~8P6upXEEb6Dr7wXtpYfmivz~UvYSf---o4RoxuvoDL7-xm4cxS3B-bIz8SnVHbJArhbxLO050i-8E7i6UrDX2vJO1jtUbHDttKRuNZyOPdrFdGsoelWTfhsmj50~J1mQr7Tp0v3TCv0FkvDe5odHuMujuS1rWLOFAzye1cKCiIDndCKGl4Ps2W-PVMFe8b2Jr3EviodysGJStEBSdXXzEwQ4wrYvWvkSk-PKXZ~lbRoJuzTq5CW8OhcbThzZyWJAxyYzwXHUaxm~ZWvlBNlwvTsDh6MC5gMDS07ycefCl9DB3TWDcjJDFYVK1knLHXVtJqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', title: 'Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023', time: 'Minggu, 26 Nov 2023 13:04 WIB'},
  { id: 4, image: 'https://s3-alpha-sig.figma.com/img/0755/123a/6308b48f919617cd2f9ba916ea0bba45?Expires=1704672000&Signature=X3MsgIBlvCB6o6lTzVHUksXnu2u9fOTyj2MbS9xpePYuXKKA4R5helXBqbG7oL23HICCfLF6yd8d54Vjp0QAwj1JyzOtILLsTpumtkV~n~m-BQ2KgXwvM73QGuJJPXAbhofuVQXzDvRRrB~LmA4A2o9~2CtM30vw46Hwky-WuGc6gtNhR6uefJOFv-rtHGmNaR72CCGLvvKQpXpxXCPvkVSOBW7n-KnlPg1ylfmb2sS1PFEmO8HOtpirHMxUseNPnTRcuBq16obLUHyZ~p2wKdOpoDwz915eVM0~iTIyXdUQci-bBmdcEfWOhbwgchPQb3Imay-KUGoU928TcZM7WA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', title: 'Kelar Lari di CT Arsa Charity Fun Run, \'Recharge\' Energi Nonton Maliq & D\'essentials', time: 'Sabtu, 18 Nov 2023 17:39 WIB'},
  { id: 5, image: 'https://s3-alpha-sig.figma.com/img/e713/ab81/d4c8612b71172f14c3497ae7b8f2eedc?Expires=1704672000&Signature=lIISaY7mC3xLsBfccx2fBgGHbmQ-HcJNVU8p0uBftHfdwQ-AXUQdX8TKcpBaXTzr1znN9RetFZM3nHBdx3a~BN9WvsYITMxie8qsWbqbtFJos6vOKmPFudBffux8A3tkPYqRb-4NteArzyhQtpJbYV6~IpOVXaUWmQjHJ6HV27PUHst-EvKJs6dOVN8~uLkA1q7Ne1Ua-M8tR2syP06w65K8hEuguQW4XN0RSQjbtDW7X6T9puuqjv5RAsNq1YyzFqeA~~a6rIuFloTWH~wE0pGcP9IWmyFXwtsg4gT6-NhHf-kJKqNsteLHzJvvgqhuEZhzoFkL3PzwWmYb7r-alg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', title: 'CT Arsa Charity Fun Run 2023 Bertabur Emas', time: 'Kamis, 16 Nov 2023 16:34 WIB'},
  { id: 6, image: 'https://s3-alpha-sig.figma.com/img/3f86/9fd3/d9b4e4153bfbed76c579c5e3cfd0c22f?Expires=1704672000&Signature=EsY6uGivUASmthgb-Wo06x4URHQb3nyXVTWglW9-d2tB6i3uVJVnKsSKJOWBwOBVclwQ1o5u8ocHCT-iyi8EIMiEVGbO6BqXUCTqx8aDoTwNvg9RqXPBp5r5Hdssz98pkBsd18NkZ6B5sLmCnNIZIEHCp0Cq~yLnqaQP25FE4rcorPbfgmetxEGr~hhKJVyrp4O179SPXGlyRTQxWFUvxF0LH5eY6Wu4vT20hyPVGGh2~ZLi-wJiLKLK5YQxtDuPhxr~jlnZ59x5n9Y1jEL6QnsHteAmM3QOz4EEDya3uqRIhxUeGuen8uYYsyW~vJuX0-5nDOE9zrYFOlE~XTCTLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', title: 'BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta', time: 'Minggu, 12 Nov 2023 11:55 WIB'},
];

const artikelList = document.getElementById('frame-1');
const fotoList = document.getElementById('frame-2');
const videoList = document.getElementById('frame-3');

renderArtikel();
renderFoto();
renderVideo();

function renderArtikel() {
  artikelList.innerHTML = '';

  artikel.forEach(article => {
    const itemArtikel = document.createElement('div');
    itemArtikel.classList.add('card'); // Ubah 'articels' menjadi 'articles'
    itemArtikel.innerHTML = `
      <div class="frame-4">
        <img src="${article.image}" alt="artikel-image">
      </div>
      <div class="frame-5">
        <h3>${article.title}</h3>
        <p>${article.time}</p>
      </div>
    `;
    artikelList.appendChild(itemArtikel);
  });
}

function renderFoto() {
  fotoList.innerHTML = '';

  artikel.forEach(article => {
    const itemArtikel = document.createElement('div');
    itemArtikel.classList.add('card'); // Ubah 'articels' menjadi 'articles'
    itemArtikel.innerHTML = `
        <div class="frame-4">
          <img src="${article.image}" alt="artikel-image">
          <div class="time-stamp">
            <i class="fa-solid fa-camera"></i>
            <p>5 Foto</p>
          </div>
        </div>
        <div class="frame-5">
          <h3>${article.title}</h3>
          <p>${article.time}</p>
        </div>
    `;
    fotoList.appendChild(itemArtikel);
  });
}

function renderVideo() {
  videoList.innerHTML = '';

  artikel.forEach(article => {
    const itemArtikel = document.createElement('div');
    itemArtikel.classList.add('card'); // Ubah 'articels' menjadi 'articles'
    itemArtikel.innerHTML = `
        <div class="frame-4">
          <img src="${article.image}" alt="artikel-image">
          <div class="time-stamp">
            <i class="fa-solid fa-play"></i>
            <p>01:45</p>
          </div>
        </div>
        <div class="frame-5">
          <h3>${article.title}</h3>
          <p>${article.time}</p>
        </div>
    `;
    videoList.appendChild(itemArtikel);
  });
}


//   navbar link artikel
document.addEventListener('DOMContentLoaded', function(){
  const frame = document.querySelectorAll('.content .frame .frame-container');
  const links = document.querySelectorAll('.artikel');

  links.forEach((link, index) => {
      link.addEventListener('click', () => {
          changeActiveItem(index);
      });
  });

  function changeActiveItem(index) {
    console.log('frame')
    frame.forEach(item => item.classList.remove('active'));
    links.forEach(link => link.classList.remove('active'));

    frame[index].classList.add('active');
    links[index].classList.add('active');
  }
});