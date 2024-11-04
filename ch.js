  const canales = [
    {
      title: "VENOM",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><circle cx="80" cy="80" r="80" fill="#FF0000"/><text x="80" y="85" font-family="Arial" font-size="20" fill="#FFFFFF" text-anchor="middle">VENOM</text></svg>`,
      link: "https://vidhidefast.com/v/lxni6eh6v7ds"
    },
    {
      title: "Arthur",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" fill="#0000FF"/><text x="80" y="85" font-family="Arial" font-size="20" fill="#FFFFFF" text-anchor="middle">ARTHUR</text></svg>`,
      link: "https://fastbrisk.com/e/dut1r3igow18"
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
