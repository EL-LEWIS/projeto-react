import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function DishDetail({ dish }) {
  /**
   * Função para renderizar os detalhes do prato.
   * @param {Object} dish - Objeto do prato a ser renderizado.
   */
  const renderDish = (dish) => {
    if (!dish) {
      return <div></div>; // Retorna vazio se o prato for nulo
    }

    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  };

  /**
   * Função para renderizar os comentários do prato.
   * @param {Array} comments - Lista de comentários do prato.
   */
  const renderComments = (comments) => {
    if (!comments || comments.length === 0) {
      return <div>Nenhum comentário disponível.</div>; // Retorna mensagem se não houver comentários
    }

    return (
      <div>
        <h4>Comentários</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>
                -- {comment.author}, {new Date(comment.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        {/* Detalhes do prato */}
        <div className="col-12 col-md-5 m-1">{renderDish(dish)}</div>

        {/* Comentários */}
        <div className="col-12 col-md-5 m-1">
          {dish ? renderComments(dish.comments) : null}
        </div>
      </div>
    </div>
  );
}

export default DishDetail;
