import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  getCategoriesApi,
  getPrtoductsApi,
} from "../../features/product/productApi";
import { selectProduct } from "../../features/product/productSlice";
import { Link } from "react-router-dom";

export const Products: React.FC = React.memo((): JSX.Element => {
  const { products, categories } = useAppSelector(selectProduct);
  console.log(products, categories);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPrtoductsApi());
    dispatch(getCategoriesApi());
  }, []);

  return (
    <div >
      <Form.Select aria-label="Default select example">
        {categories.map(elm => {
            return(
                <option key={elm.slug}>{elm.name}</option>
            )
        })}
      </Form.Select>

      {products.map(elm => {
        return(
            <Card style={{ width: '20rem', display:"inline-block" }}>
      <Card.Img variant="top" src={elm.thumbnail} width={200} />
      <Card.Body> 
        <Card.Title>{elm.title}</Card.Title>
        <Card.Text>
        {elm.category}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{elm.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
<Link to={'/product/' +elm.id}> See More</Link>
      </Card.Body>
    </Card>
        )
      })}
    </div>
  );
});
