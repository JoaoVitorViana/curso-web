import React from 'react';
import ReactDOM from 'react-dom';

// import Primeiro from './componentes/BomDia';
// import { BoaTarde, BoaNoite } from './componentes/Multiplos';
// import Multi, { BoaNoite } from './componentes/Multiplos';
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// ReactDOM.render(<Primeiro nome="Guilherme" idade={12} velho={true} />, document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>
//     , document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="Joao" />
//     </div>
//     , document.getElementById('root'));

ReactDOM.render(
    <div>
        {/* <Pai nome="Paulo" sobrenome="Silva" /> */}
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
    , document.getElementById('root'));