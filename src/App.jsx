import React from 'react';

import Forms from './components/Forms';
import Navbar from './components/Navbar';

const App = () => (
  <div className="app">
    <Navbar />
    <div className="header" data-testid="app-header">
      <h1 className="title">
        Pide presupuestos
      </h1>
      <div className="subtitle">
        Construcciones y reformas, instalaciones, limpieza, mudanzas, arquitectos y más…
      </div>
    </div>
    <div className="content" data-testid="app-content">
      <div className="info-steps">
        <div className="step">
          <div className="step-number">
            1
          </div>
          <p>
            Cuéntanos
            <b> qué necesitas</b>
          </p>
        </div>
        <div className="step">
          <div className="step-number">
            2
          </div>
          <p>
            Recibe hasta
            <b> 4 presupuestos de tu zona</b>
          </p>
        </div>
        <div className="step">
          <div className="step-number">
            3
          </div>
          <p>
            Compara ofertas y
            <b> elige (o no) la mejor</b>
          </p>
        </div>
        <div className="info-box">
          <i className="fas fa-tag icon-info" />
          <div className="body-info">
            <b className="info-title">
              Es Gratis
            </b>
            Recibe varios presupuestos de forma gratuita y sin compromiso.
          </div>
        </div>
        <div className="info-box">
          <i className="fas fa-clock icon-info" />
          <div className="body-info">
            <b className="info-title">
              Ahorra tiempo
            </b>
            No pierdas tiempo buscando empresas. Ellas te contactan a ti.
          </div>
        </div>
        <div className="info-box">
          <i className="fas fa-coins icon-info" />
          <div className="body-info">
            <b className="info-title">
              Ahorra dinero
            </b>
            Tienes más de un presupuesto para comparar.
          </div>
        </div>
        <div className="info-box">
          <i className="fas fa-medal icon-info" />
          <div className="body-info">
            <b className="info-title">
              Encuentra a los mejores
            </b>
            Elige a los profesionales mejor valorados por los usuarios.
          </div>
        </div>
      </div>
      <Forms />
    </div>
  </div>
);

export default App;
