  const canales = [
    {
      title: "VENOM",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><circle cx="80" cy="80" r="80" fill="#FF0000"/><text x="80" y="85" font-family="Arial" font-size="38" fill="#FFFFFF" text-anchor="middle">VENOM</text></svg>`,
      //link: "https://vidhidefast.com/v/lxni6eh6v7ds"
      link: "https://fastbrisk.com/e/r1jl1vl7ktdp"
    },
    {
      title: "Arthur",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" fill="#0000FF"/><text x="80" y="85" font-family="Arial" font-size="36" fill="#FFFFFF" text-anchor="middle">ARTHUR</text></svg>`,
      link: "https://fastbrisk.com/e/dut1r3igow18"
    },
    {
      title: "MEGALODON",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" fill="#000000"/><text x="100" y="85" font-family="Arial" font-size="30" fill="#FFFFFF" text-anchor="middle">MEGALODON</text></svg>`,
      link: "https://file-zz40pd56-embed.com/ptsd/mdkvgoinnpa0"
    },
    {
      title: "MLS",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><polygon points="80,10 150,150 10,150" fill="#0000FF"/><text x="80" y="100" font-family="Arial" font-size="40" fill="#FFFFFF" text-anchor="middle">MLS</text></svg>`,
      link: "https://cabrillos.github.io/bc/m3u8.html?get=aHR0cHM6Ly90ZXMxLmRiY2FzdC5saXZlL2hJQkl2eTdONERVUnAyU3BKZHNrRHcvMTczMDYxNjU1OS8zMTM4MzEyZTMxMzIyZTMxMzEzMTJlMzkzMC9mZjU0OS9wbGF5bGlzdC5tM3U4"
    },
    {
      title: "MLS2",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" fill="#000000"/><text x="80" y="100" font-family="Arial" font-size="40" fill="#FFFFFF" text-anchor="middle">MLS 2</text></svg>`,
      link: "https://streamtp1.com/global1.php?stream=eventos3"
    },
    {
      title: "TYC",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><polygon points="80,10 150,150 10,150" fill="#0000FF"/><text x="80" y="100" font-family="Arial" font-size="40" fill="#FFFFFF" text-anchor="middle">TYC</text></svg>`,
      link: "https://cabrillos.github.io/bc/m3u8.html?get=aHR0cHM6Ly9jaDAxLTA0LTExLXR5Yy52b2RnYy5uZXQvb3V0L3YxLzg0ZWUyYjBjY2UzODRhMzBhYmQ3MGIwNTU2MmRkZDkxL2luZGV4XzkubTN1OA=="
    },
    {
      title: "BOX",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><polygon points="80,10 150,150 10,150" fill="#0000FF"/><text x="80" y="100" font-family="Arial" font-size="40" fill="#FFFFFF" text-anchor="middle">box</text></svg>`,
      link: "https://streamtp1.com/global1.php?stream=eventos8"
    }
    // Aquí puedes agregar más canales
  ];

  const canalesList = document.getElementById('canales');

  canales.forEach(canal => {
    const li = document.createElement('li');
    li.className = "canal-item col-6 col-xs-6 col-sm-6 col-md-3 col-lg-2";
    
    const a = document.createElement('a');
    a.href = canal.link;
    
    const div = document.createElement('div');
    div.className = "lm-canal lm-info-block gray-default";
    div.title = canal.title;
    
    const containerImage = document.createElement('div');
    containerImage.className = "container-image";

    // Usa innerHTML para insertar el SVG
    containerImage.innerHTML = canal.svg;
    
    // Ensambla los elementos
    div.appendChild(containerImage);
    a.appendChild(div);
    li.appendChild(a);
    canalesList.appendChild(li);
  });
