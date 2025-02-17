import React from 'react';
import './ShiningText.css'; // Importamos los estilos


// Componente funcional ShiningText
// Recibe un texto y lo envuelve en una etiqueta <strong> con la clase shining-text

const ShiningText = ({text: children}) => {
  return (
    <strong className="shining-text">
      {children}
    </strong>
  );
};

export default ShiningText;
