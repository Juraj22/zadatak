import React, { useEffect, useState } from "react";

const Ispis = () => {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [liked, setLiked] = useState(true);

  useEffect(() => {
    alert("Dogodila se promjena!");
  }, [liked]);

  function handleChangeIme(e) {
    setIme(e.target.value);
  }

  function handleChangePrezime(e) {
    setPrezime(e.target.value);
  }

  function handleChangePutnik(e) {
    setLiked(e.target.checked);
  }

  return (
    <div>
      <h1>Podaci o osobi</h1>

      <span>First name: </span>
      <input value={ime} onChange={handleChangeIme} />

      <span>Last name: </span>
      <input value={prezime} onChange={handleChangePrezime} />

      <span>
        <input type="checkbox" checked={liked} onChange={handleChangePutnik} />
        Putnik sam
      </span>

      <h4>
        Bok,ja sam {ime} {prezime} rođen sam 1960 i {""}
        {liked ? "putnik sam" : "nisam putnik"}
      </h4>

      <button
        onClick={() => {
          alert("Bok " + ime + " " + prezime);
        }}
      >
        Reci Bok osobi!
      </button>
    </div>
  );
};

export default Ispis;
