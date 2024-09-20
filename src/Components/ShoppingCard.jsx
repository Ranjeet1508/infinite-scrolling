// // ShoppingCard.js
// import React from 'react';
// import './ShoppingCard.css';

// const ShoppingCard = ({ product }) => {
//   return (
//     <div className="card">
//       <img src={product.image} alt={product.title} />
//       <h3>{product.title}</h3>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//     </div>
//   );
// };

// export default React.memo(ShoppingCard);


// ShoppingCard.js
import React from 'react';
import './ShoppingCard.css';

const ShoppingCard = ({ product }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={product.image} alt={product.title}  />
            </div>
            <h3>{product.title}</h3>
            <p className="card-description">{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
};

export default React.memo(ShoppingCard);
