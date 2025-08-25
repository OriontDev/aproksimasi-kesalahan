// impor sumber daya kebutuhan
import { useState } from 'react'
import BackgroundCanvas from './BackgroundCanvas';


// Memulai pendefinisian aplikasi
export default function App() {

  // State yang menyimpan data nilai internal
  const [nomer, setNomer] = useState("");
  const [hasil, setHasil] = useState(0);
  const [revealIdentity, setRevealIdentity] = useState(false);


  // Fungsi yang melakukan operasi pembulatan
  function Satuan() {
    const angka = nomer;
    const pembulatan = Math.round(angka);
    setHasil(pembulatan);
  }

  // Prosesnya mirip
  function Puluhan() {
    const angka = nomer
    const pembulatan = Math.round(angka / 10) * 10;
    setHasil(pembulatan);
  }

  function Ratusan() {
    const angka = nomer
    const pembulatan = Math.round(angka / 100) * 100;
    setHasil(pembulatan);
  }

  function Ribuan() {
    const angka = nomer
    const pembulatan = Math.round(angka / 1000) * 1000;
    setHasil(pembulatan);
  }


  const onInputChange = v => {
    v = Number(v);
    v = v > 100000 ? 100000 : v;
    v = Math.floor(v*10) / 10;
    setNomer(v === 0 ? "" : v);
  };

  // Fungsi yang akan menunjukkan pop up identitas kelompok
  const toggleReveal = _ => setRevealIdentity(!revealIdentity);


  return (
    <>
      {/* Tampilan Latar */}
      <BackgroundCanvas /> 
      {/* Pop up identitas */}
      {<Identity onClick={toggleReveal} transparency={revealIdentity ? 1 : 0} revealed={revealIdentity} />}
      <div className='everything-container'>
        <div className='converter-container'>
          {/* Judul */}
          <div className='title-container' onClick={toggleReveal}>
            <h1 className='title-text'>Aproksimasi<br/>Kesalahan</h1>
            <h1 className='subtitle-text'>Pembulatan Angka Satuan</h1>
          </div>
          {/* Input angka yang akan dibulatkan */}
          <input type='number' placeholder='Masukkan angka' value={nomer} 
            onChange={(e) => {onInputChange(e.target.value)}}/>
          <div className='button-container'>
            {/* Tombol yang akan melakukan operasi pembulatan */}
            <button onClick={Satuan}>Satuan</button>
            <button onClick={Puluhan}>Puluhan</button>
            <button onClick={Ratusan}>Ratusan</button>
            <button onClick={Ribuan}>Ribuan</button>
          </div>
          {/* Tampilan hasil dari operasi pembulatan */}
          <div className='result-container'>
            <h2>Hasil</h2>
            <h1>{hasil}</h1>
          </div>
        </div>

        <hr />

        {/* Paragraf pembahasan materi */}
        <div className='explanation-container'>
          <h2 className='explanation'>
            Pembulatan ke satuan puluhan, ratusan, dan ribuan adalah proses mendekatkan angka ke nilai terdekat berdasarkan digit tertentu.
            <br/><br/>Pada pembulatan ke puluhan, kita melihat angka satuan: jika 5 atau lebih maka puluhan dinaikkan, jika kurang dari 5 tetap.
            <br/><br/>Pada pembulatan ke ratusan, angka puluhan yang jadi acuan: jika 50 atau lebih maka ratusan dinaikkan, jika kurang dari 50 tetap.
            <br/><br/>Sedangkan pada pembulatan ke ribuan, kita melihat angka ratusan: jika 500 atau lebih maka ribuan dinaikkan, jika kurang dari 500 tetap.
          </h2>
        </div>
      </div>
    </>
  )
}

function Identity({onClick, transparency, revealed}) {
  return (
    <div className='identity-bg' onClick={onClick} 
      style={{ opacity:transparency, pointerEvents: revealed ? '' : 'none' }}>
      <div className='container'>
        <h1>Kelompok Pembuat</h1>
        <p>I Wayan Widhyadana Sadhu Gunawan <span className='hg'>/ 15</span></p>
        <p>Kadek Anggi Sekarsari <span className='hg'>/ 18</span></p>
        <p>Made Oriont Fedora <span className='hg'>/ 24</span></p>
        <p>Ni Luh Putu Devina Trisnasari Putri <span className='hg'>/ 30</span></p>
        <p>Ni Made Anggita Dwi Putri <span className='hg'>/ 31</span></p>
        <p>Wahyudi Adhika Wijaya <span className='hg'>/ 40</span></p>
        <p>Noviana Diva <span className='hg'>/ 43</span></p>
      </div>
    </div>
  )
}