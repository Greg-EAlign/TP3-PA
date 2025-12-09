import logo from './logo.svg';
import './App.css';
import Vue from './Assets/Vue.avif'
import Chambre from './Assets/home-design.jpg'
import { useState,useId } from 'react' ;
import Message from './Components/Message'
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from "@fullcalendar/interaction" 
import { DateComponent } from '@fullcalendar/core/internal';




const marks = [
  {
    value: 2,
    label: <div style={{color:'white'}}>2</div>,
  },
  {
    value: 4,
    label: <div style={{color:'white'}}>4</div>,
  },
  {
    value: 6,
    label: <div style={{color:'white'}}>6</div>,
  },
  {
    value: 8,
    label: <div style={{color:'white'}}>8</div>,
  }
  ];
  const marks2 = [
  {
    value: 100,
    label: <div style={{color:'white'}}>100</div>,
  },
  {
    value: 200,
    label: <div style={{color:'white'}}>200</div>,
  },
  {
    value: 300,
    label: <div style={{color:'white'}}>300</div>,
  },
  {
    value: 400,
    label: <div style={{color:'white'}}>400</div>,
  },

];
const PrettoSlider = styled(Slider)({
  color: '#cf879fff',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#af52a3ff',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

function App() {

  const [lesRes, setlesRes] = useState([
    {}
  ])
const [lesChambres, setLesChambres] = useState([
  {"id":1,"chambre":"101","Capacité":4,"Étage":1,"Prix":230,"Vue":true,"Description":"Chambre spacieuse avec vue sur le jardin.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":2,"chambre":"102","Capacité":2,"Étage":1,"Prix":150,"Vue":false,"Description":"Petite chambre confortable idéale pour un couple.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":3,"chambre":"201","Capacité":4,"Étage":2,"Prix":176,"Vue":true,"Description":"Chambre lumineuse avec balcon.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":4,"chambre":"202","Capacité":8,"Étage":1,"Prix":350,"Vue":false,"Description":"Grande chambre familiale avec lits superposés.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":5,"chambre":"301","Capacité":3,"Étage":3,"Prix":150,"Vue":true,"Description":"Chambre cosy avec vue panoramique.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":6,"chambre":"103","Capacité":5,"Étage":1,"Prix":203,"Vue":false,"Description":"Chambre familiale pratique proche de la réception.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":7,"chambre":"302","Capacité":2,"Étage":3,"Prix":140,"Vue":false,"Description":"Chambre économique au calme.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":8,"chambre":"303","Capacité":6,"Étage":3,"Prix":280,"Vue":true,"Description":"Grande chambre avec vue sur la ville.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":9,"chambre":"304","Capacité":2,"Étage":3,"Prix":160,"Vue":false,"Description":"Chambre moderne décorée avec soin.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":10,"chambre":"203","Capacité":3,"Étage":2,"Prix":175,"Vue":true,"Description":"Chambre agréable avec accès au balcon.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":11,"chambre":"204","Capacité":5,"Étage":2,"Prix":220,"Vue":false,"Description":"Chambre familiale avec coin salon.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":12,"chambre":"401","Capacité":4,"Étage":4,"Prix":200,"Vue":true,"Description":"Chambre lumineuse avec grande fenêtre.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":13,"chambre":"402","Capacité":7,"Étage":4,"Prix":310,"Vue":true,"Description":"Chambre spacieuse avec belle vue sur la mer.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":14,"chambre":"403","Capacité":2,"Étage":4,"Prix":155,"Vue":false,"Description":"Petite chambre pratique et moderne.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":15,"chambre":"404","Capacité":8,"Étage":4,"Prix":360,"Vue":true,"Description":"Suite familiale de luxe avec deux balcons.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":16,"chambre":"501","Capacité":3,"Étage":5,"Prix":190,"Vue":true,"Description":"Chambre moderne avec bureau intégré.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":17,"chambre":"502","Capacité":2,"Étage":5,"Prix":145,"Vue":false,"Description":"Chambre simple et économique.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":18,"chambre":"503","Capacité":6,"Étage":5,"Prix":275,"Vue":true,"Description":"Grande chambre avec espace salon.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":19,"chambre":"504","Capacité":4,"Étage":5,"Prix":210,"Vue":false,"Description":"Chambre classique avec mobilier moderne.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
  {"id":20,"chambre":"601","Capacité":5,"Étage":6,"Prix":240,"Vue":true,"Description":"Chambre panoramique avec terrasse privée.","Image": <img src={Chambre} className='miniature' />,"Imagedet":<img src={Chambre} className='imgdet' />},
])
  const nbjoursInputId = useId();
  const nbpersonnesInputId = useId();
  const [value, setValue] = React.useState([2,8]);
  const [DetCh, setValue3] = React.useState(1);

  const Capacité = lesChambres.filter((UneChambre)=>{
  return 
  })
  const [value2, setValue2] = React.useState([100,400]);
  const Filtre = lesChambres.filter((UneChambre)=>{
  return (UneChambre.Prix >= value2[0] && UneChambre.Prix <= value2[1] && UneChambre.Capacité >= value[0] && UneChambre.Capacité <= value[1])
})
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  
const  [afficheAcc,setAfficheAcc] = useState(true)
const  [afficheLCh,setAfficheLCh] = useState(false)
const  [afficheRes,setAfficheRes] = useState(false)
const  [afficheGes,setAfficheGes] = useState(false)
const  [afficheAdm,setAfficheAdm] = useState(false)
const  [afficheDet,setAfficheDet] = useState(false)

const  [afficheDroitAdmin,setAfficheDroitAdmin] = useState(false)
const [age, setAge] = useState(0);
const [Revenu, setRevenu] = useState(0);
const ageAsNumber = Number(age);
function LeMenu(tab,chambreselectionne){
setAfficheAcc(false)
setAfficheLCh(false)
setAfficheRes(false)
setAfficheGes(false)
setAfficheAdm(false)
setAfficheDet(false)
switch (tab){
  case 0:
    setAfficheAcc(true)
    break;
  case 1:
    setAfficheLCh(true)
    break;
  case 2:
    setAfficheRes(true)
    setValue3(chambreselectionne)
    break;
  case 3:
    setAfficheGes(true)
    break;
  case 4:
    setAfficheAdm(true)
    break;
  case 5:
    setAfficheDet(true)
    setValue3(chambreselectionne)
    break;
}
}
function Réservation(num){
setRevenu(Revenu+num)
LeMenu(0)
}
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='titre'>Salut Greg ! <input type="checkbox" name="myCheckbox" defaultChecked={false} onChange={()=>setAfficheDroitAdmin(!afficheDroitAdmin)}/>Admin?</h2>
        
      
        <div className="menu">
          <button className={afficheAcc ? "btn_navbar":"btn_navbar_sel"} onClick={() => LeMenu(0)} >Accueil</button>
          <button className={afficheLCh ? "btn_navbar":"btn_navbar_sel"} onClick={() => LeMenu(1)}>Liste des Chambres</button>
          <button className={afficheGes ? "btn_navbar":"btn_navbar_sel"} onClick={() => LeMenu(3)}>Profil</button>
          {afficheDroitAdmin &&< button className={afficheAdm ? "btn_navbar":"btn_navbar_sel"} onClick={() => LeMenu(4)}>Admin</button>}
        </div>
      </header>
      <div className="App-body">
        {afficheAcc && <div className="fg_acc">
        <p>Bienvenue chez vue sur Mer!</p>
        <br />
        Connectez-vous pour profiter de toutes les fonctionnalitées!
              </div>} 
      {afficheLCh && <div className="fg_LCh">
        <Box sx={{ width: 600 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <p>Capacité:</p>
        <PrettoSlider
        aria-label="Capacité" value={value} onChange={handleChange}
        shiftStep={3}
        step={1}
        marks={marks}
        min={2}
        max={8}
        valueLabelDisplay="auto"
        />
        <p>Prix:</p>
        <PrettoSlider
        aria-label="pretto slider" value={value2} onChange={handleChange2}
        shiftStep={3}
        step={10}
        marks={marks2}
        min={100}
        max={400}
        valueLabelDisplay="auto"
        
        />
        
      </Stack>
      
      <div>
        <br/>
        Vue?: 
      <input type="radio" id="Oui" name="contact" />
      <label for="contactChoice1">Oui</label>

      <input type="radio" id="Non" name="contact"  />
      <label for="contactChoice2">Non</label>

      <input type="radio" id="PI" name="contact" />
      <label for="contactChoice3">Peut Importe.</label>
      <br/>
      Date Départ <input className='inputRes'id="date" name="Jours" type="date"/>
        Date Arrivée <input className='inputRes'id="date" name="Jours" type="date"/>
    </div>
    </Box>
        
        <br />
        {Filtre.map((UneChambre)=>(
          <div className='Chambreinlist'>
            <p>{UneChambre.Image}</p><h1>| Chambre #{UneChambre.chambre} |</h1><p> Capacité: {UneChambre.Capacité}<p> Prix: {UneChambre.Prix}</p></p>
            <button className={"btn_List"} onClick={() => LeMenu(5,UneChambre.id-1)}>Détails</button>
            <button className={"btn_List"} onClick={() => LeMenu(2,UneChambre.id-1)}>Réserver</button>
            {afficheDroitAdmin && <button className={"btn_List"} onClick={() => LeMenu(2,UneChambre.id-1)}>Modifier</button>}
            {afficheDroitAdmin && <button className={"btn_List"} onClick={() => LeMenu(2,UneChambre.id-1)}>Supprimer</button>}
            
          </div>
        ))}
      </div>} 
      {afficheDet && <div className="fg_det">
        <div className='imgdet'>
          {lesChambres[DetCh].Imagedet}
        </div>
        <div className='restedet'>
          <h1>Chambre #{lesChambres[DetCh].chambre}, Étage {lesChambres[DetCh].Étage}</h1>
          <h4>Capacité: {lesChambres[DetCh].Capacité}</h4>
          <h4>Prix: {lesChambres[DetCh].Prix}$</h4>
          <h4>{lesChambres[DetCh].Description}</h4>
          <h4>Vue sur le Lac?: {lesChambres[DetCh].Vue}</h4>
          <button className={afficheLCh ? "btn_navbar":"btn_navbar_sel"} onClick={() => LeMenu(2,DetCh)}>Réserver</button>
          <br />
        </div>
      </div>} 
      {afficheRes && <div className="fg_Res">
        <h1>Réservation de la chambre {lesChambres[DetCh].chambre}</h1>
        Date Départ <input className='inputRes'id="date" name="Jours" type="date"
        />
        Jours <input className='inputRes' id={nbjoursInputId} name="Jours" type="number" min ="1" 
        onChange={e => setAge(e.target.value)}
        />
        <br />
        Personnes <input className='inputRes'id={nbpersonnesInputId} name="Jours" type="number" min ="1" max={lesChambres[DetCh].Capacité}
        />
        <br />
        Tarif: {lesChambres[DetCh].Prix}$
        <br />
        <h1>Total: {ageAsNumber*lesChambres[DetCh].Prix}$ <button className={"btn_navbar"} onClick={() => Réservation(ageAsNumber*lesChambres[DetCh].Prix)}>Réserver</button></h1>
        <h2>Vous gagnerez {ageAsNumber*lesChambres[DetCh].Prix/100} points de fidélité! </h2>
      
      </div>} 
      {afficheGes && <div className="fg_Ges">
        <br />
        <div className='dernRes'>
          <h2>Vos Infos</h2>
          <ul>
            <li> Nom: Grégory Cloutier</li>
            <li> Adresse Courriel: 123gregorycloutier@gmail.com</li>
            <li> Points: {Revenu/10}</li>

          </ul>
        </div>
        <div className='dernRes'>
          <h2>Vos Réservations</h2>
          <ul>
            <li> chambre 302, 2 personnes, 5 jours</li>
            <li> chambre 404, 4 personnes, 5 jours</li>
            <li> chambre 201, 3 personnes, 5 jours</li>
            <li> chambre 503, 6 personnes, 5 jours</li>

          </ul>
        </div>
      </div>} 
      {afficheAdm && <div className="fg_Adm">
        <div>
          <p>Revenu de la journée: {Revenu}</p>
          <p>Taux d'occupation: 0%</p>
        </div>
        <div className='dernRes'>
          <h2>Dernières Réservations</h2>
          <ul>
            <li>René Gosselin, chambre 302, 2 personnes</li>
            <li>Marie Tremblay, chambre 404, 4 personnes</li>
            <li>Julien Dubois, chambre 201, 3 personnes</li>
            <li>Sophie Boucher, chambre 503, 6 personnes</li>

          </ul>
        </div>
        <br />
      </div>} 
      </div>
      
      
      
      
      
      <footer  className='App-footer'>Application Réalisée par Grégory Cloutier, 202239523
      </footer>
    </div>
  );
}

export default App;
