import React from 'react';

function App() {
  return (
    <div>
      <h1>INFRAESTRUCTURA TECNOLÓGICA</h1>
      <br />
      <label htmlFor="dropdown">Selecciona un documento:</label>
      <select id="dropdown">
        <option value="">Seleccionar</option>
        <option value="opcion1">Rector</option>
        <option value="opcion2">Infraestructura</option>
        <option value="opcion3">Servicio técnico</option>
        <option value="opcion4">Docente</option>
      </select>

      <br />

      <div className="document-library">
        <div className="document-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfGeThGrTMcnvnur2PBPfY-i10TCzLIbiCPRoaZ-FH3KtdtWE9wfN0pCG4vJ-CAYXwwo&usqp=CAU" alt="Documento 1" className="document-thumbnail" />
          <div className="document-title">Rector</div>
          <a href="https://docs.google.com/spreadsheets/d/1kpRivUEDx2mypMZjciTbMQos1mkSwjhi/edit?usp=drive_link" target="_blank" rel="noopener noreferrer">Ver documento</a>
        </div>

        <div className="document-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjEzdUcsBBhJDPjqNoN2x-s1hPMyADFzcYdaqjjiPOXe4lC3aLgqejrecsQsJjVd04zE&usqp=CAU" alt="Documento 2" className="document-thumbnail" />
          <div className="document-title">Infraestructura</div>
          <a href="https://docs.google.com/spreadsheets/d/1b5EWJghjR97poJborjMcanozrwEoFSiC/edit?usp=sharing&ouid=101411486320252556633&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Ver documento</a>
        </div>

        <div className="document-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOlabdTA13PaVhzZj7s_9Iqu9GCMg1Sdk2pbYTycG-WRRGmUZScMOEPu1F8WgXHB-R6k&usqp=CAU" alt="Documento 2" className="document-thumbnail" />
          <div className="document-title">Servicio técnico</div>
          <a href="https://docs.google.com/spreadsheets/d/1gif0CPq6Jm2yYcJnTddh67-qx9H0uSIE/edit?usp=sharing&ouid=101411486320252556633&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Ver documento</a>
        </div>

        <div className="document-card">
          <img src="https://1.bp.blogspot.com/-Dy8vuDUrxek/VhL2Ke7QPgI/AAAAAAAAAGI/sY7bWfDoAJs/s1600/tics%2Baula.jpg" alt="Documento 1" className="document-thumbnail" />
          <div className="document-title">Docente</div>
          <a href="https://docs.google.com/spreadsheets/d/1nFiHUgNGgOPMJF6c2ehJfvf1bCkKCv02/edit?usp=sharing&ouid=101411486320252556633&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Ver documento</a>
        </div>
      </div>
    </div>
  );
}

export default App;