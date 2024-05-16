import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';

import './styles.css';

import logo from '../../assets/logo.svg';



const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Logo-Ecoleta" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>
      <form>
        <h1>Cadastro do <br /> Ponto de Coleta</h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input 
              type="text" 
              name="name"
              id="name"
            />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input 
                type="email" 
                name="email"
                id="email"
              />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input 
                type="text" 
                name="whatsapp"
                id="whatsapp"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o Endereço no mapa</span>
          </legend>
          <Map center={[-23.5614216, -46.6594511]} zoom={15}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado(UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma Cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de Coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>

       <ul className="items-grid">
        <li><img src="http://localhost:3333/uploads/baterias.svg" alt="Baterias-img"></img><span>Baterias</span></li>
        <li><img src="http://localhost:3333/uploads/eletronicos.svg" alt="Eletrônicos-img"></img><span>Eletrônicos</span></li>
        <li><img src="http://localhost:3333/uploads/lampadas.svg" alt="Lâmpadas-img"></img><span>Lâmpadas</span></li>
        <li><img src="http://localhost:3333/uploads/oleo.svg" alt="Óleo-img"></img><span>Óleo</span></li>
        <li><img src="http://localhost:3333/uploads/organicos.svg" alt="Orgânicos-img"></img><span>Orgânicos</span></li>
        <li><img src="http://localhost:3333/uploads/papeis-papelao.svg" alt="Papéis e Papelão-img"></img><span>Papéis e Papelão</span></li>
       </ul>
        </fieldset>
        <button type="submit">
          Cadastrar Ponto de Coleta
        </button>
      </form>
    </div>
  );
}

export default CreatePoint;