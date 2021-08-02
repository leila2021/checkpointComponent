
import React from "react";
import { Button, Table } from "react-bootstrap";

const Productlist = () => {
  const products = [
    {
      imgSrc:
        "https://tse2.mm.bing.net/th?id=OIP.pxmujo7t5fBi707jneVRRQHaJ8&pid=Api&P=0&w=300&h=300",
      name: "iphone",
      price: "1000dt",
    },
    {
      imgSrc:
        "https://tse2.mm.bing.net/th?id=OIP.pxmujo7t5fBi707jneVRRQHaJ8&pid=Api&P=0&w=300&h=300",
      name: "iphone",
      price: "1000dt",
    },
    {
      imgSrc:
        "https://tse2.mm.bing.net/th?id=OIP.pxmujo7t5fBi707jneVRRQHaJ8&pid=Api&P=0&w=300&h=300",
      name: "iphone",
      price: "1000dt",
    },
  ];
  const clickme = (nom) => {
    alert(` le nom de ce produit est ${nom}`);
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((produit) => (
            <tr>
              <td>
                {" "}
                <Button
                  onClick={() => {
                    clickme(produit.name);
                  }}
                  variant="outline-success"
                >
                  Success
                </Button>{" "}
              </td>
              <td>
                <img src={produit.imgSrc} alt="" />
              </td>
              <td>{produit.name}</td>
              <td>{produit.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Productlist;
