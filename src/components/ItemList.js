import { useEffect, useState } from "react";
import Item from "./Item";
import { Row, Spinner } from "react-bootstrap";

/* Entregable 05 */
function ItemList() {
  /* Aqui iria el consumo del API jalando una cantidad X de Items */
  const [productList, setproductList] = useState(0);
  const [loading, setLoading] = useState(true);

  const MyDataMock = [
    {
      id: 10001,
      title: "Lenovo Dynabook",
      description:
        "TECRA A40-G I3-10110U ( PMZ21U-00P001 ) 14´ - I3 - 256 SSD - 4GB.",
      price: 1500,
      pictureUrl:
        "https://www.magitech.pe/media/catalog/product/cache/1/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/1/6/16_7_7.jpg",
      stock: 20,
    },
    {
      id: 10002,
      title: "Lenovo Convertible",
      description:
        "TECRA B50-G I4-10110U ( PMZ21U-00P002 ) 15´ - I3 - 256 SSD - 8GB.",
      price: 2000,
      pictureUrl:
        "https://www.magitech.pe/media/catalog/product/cache/1/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/g/a/gateway-10.jpg",
      stock: 30,
    },
    {
      id: 10003,
      title: "Lenovo IdeaPad",
      description:
        "TECRA C60-G I5-10110U ( PMZ21U-00P003 ) 16´ - I3 - 256 SSD - 16GB.",
      price: 2500,
      pictureUrl:
        "https://www.magitech.pe/media/catalog/product/cache/1/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/g/a/gateway-verde-1.jpg",
      stock: 40,
    },
    {
      id: 10004,
      title: "Lenovo Gateway",
      description:
        "TECRA D70-G I6-10110U ( PMZ21U-00P004 ) 17´ - I3 - 256 SSD - 32GB.",
      price: 3500,
      pictureUrl:
        "https://www.magitech.pe/media/catalog/product/cache/1/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/d/ideapad-flex-5-1.jpg",
      stock: 50,
    },
  ];

  const ackData = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(MyDataMock); // ¡Todo salió bien!
    }, 2000);
  });

  ackData.then((response) => {
    setproductList(
      response.map((item, index) => <Item props={item} key={index} />)
    );

    setLoading(false);
  });

  useEffect(() => {
    

  }, []);

  return (
    <>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row>{productList}</Row>
      )}
    </>
  );
}

export default ItemList;