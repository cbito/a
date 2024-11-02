  const canales = [
    {
      title: "Telefe",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><circle cx="80" cy="80" r="80" fill="#FF0000"/></svg>`,
      link: "/en-vivo/nombre-de-tu-canal/"
    },
    {
      title: "Sony",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" fill="#0000FF"/></svg>`,
      link: "/en-vivo/nombre-de-tu-canal/"
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
