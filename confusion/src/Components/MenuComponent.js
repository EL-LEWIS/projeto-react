import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

/**
 * Componente para exibir o menu de pratos.
 * @param {Object} props - Recebe os pratos disponíveis como props.
 */
function MenuComponent({ dishes }) {
  // Estado para armazenar o prato selecionado
  const [selectedDish, setSelectedDish] = useState(null);

  /**
   * Atualiza o prato selecionado no estado.
   * @param {Object} dish - Objeto do prato selecionado.
   */
  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };

  /**
   * Renderiza os cartões de pratos do menu.
   */
  const renderMenu = dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <Card onClick={() => onDishSelect(dish)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        {/* Renderiza o menu com os pratos */}
        {renderMenu}
      </div>
      <div className="row">
        {/* Renderiza os detalhes do prato selecionado */}
        <DishDetail dish={selectedDish} />
      </div>
    </div>
  );
}

export default MenuComponent;

