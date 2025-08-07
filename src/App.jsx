import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [nomer, setNomer] = useState(0)
  const [hasil, setHasil] = useState(0)


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


  return (
    <>
      <div className='everything-container'>
        <div className='title-container'>
          <h1 className='title-text'>Pembulatan Satuan</h1>
        </div>
        <input type='number' placeholder='masukkan angka' value={nomer} onChange={(e) => {setNomer(e.target.value)}}/>
        <div className='button-container'>
          <button onClick={Puluhan}>Puluhan</button>
          <button onClick={Ratusan}>Ratusan</button>
          <button onClick={Ribuan}>Ribuan</button>
        </div>
        <div className='result-container'>
          <h1>Result :  </h1>
          <h1>{hasil}</h1>
        </div>
        <div className='explanation-container'>
          <h2 className='explanation'>Pembulatan ke satuan puluhan, ratusan, dan ribuan adalah proses mendekatkan angka ke nilai terdekat berdasarkan digit tertentu. Pada pembulatan ke puluhan, kita melihat angka satuan: jika 5 atau lebih maka puluhan dinaikkan, jika kurang dari 5 tetap. Pada pembulatan ke ratusan, angka puluhan yang jadi acuan: jika 50 atau lebih maka ratusan dinaikkan, jika kurang dari 50 tetap. Sedangkan pada pembulatan ke ribuan, kita melihat angka ratusan: jika 500 atau lebih maka ribuan dinaikkan, jika kurang dari 500 tetap.</h2>
        </div>
      </div>
    </>
  )
}

export default App
