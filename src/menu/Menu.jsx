import React from 'react';
import './menu.css';
import Card from 'react-bootstrap/Card';

const menuItems = [
  { img: '/images/item2.jpg', price: '$10' },
  { img: '/images/item3.jpg', price: '$12' },
  { img: '/images/item4.jpg', price: '$9' },
  { img: '/images/item5.jpg', price: '$11' },
  { img: '/images/item6.jpg', price: '$13' },
  { img: '/images/item7.jpg', price: '$8' },
  { img: '/images/item8.jpg', price: '$14' },
  { img: '/images/item9.jpg', price: '$15' },
  { img: '/images/itme1.jpg', price: '$7' },
 
];

const Menu = () => {
  return (
    <section className="menu-section py-5">
      <h2 className="menu-title text-center mb-5">Menu</h2>
      <div className="container">
        <div className="row justify-content-center">
          {menuItems.map((item, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-5th d-flex justify-content-center mb-4" key={item.img + idx}>
              <Card className="menu-card w-100">
                <Card.Img variant="top" src={item.img} className="menu-card-img" />
                <Card.Body className="text-center">
                  <Card.Text className="menu-card-price">{item.price}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu; 