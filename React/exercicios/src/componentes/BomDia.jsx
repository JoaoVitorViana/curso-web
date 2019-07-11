import React from 'react';

export default ptms => [
    <h1 key='bomdia'>Bom dia {ptms.nome}</h1>,
    <h2 key='idade'>{ptms.idade}</h2>
]
    
// export default ptms =>
// <React.Fragment>
//     <h1>Bom dia {ptms.nome}</h1>
//     <h2>{ptms.idade}</h2>
// </React.Fragment>

// export default ptms =>
// <div>
//     <h1>Bom dia {ptms.nome}</h1>
//     <h2>{ptms.idade}</h2>
// </div>