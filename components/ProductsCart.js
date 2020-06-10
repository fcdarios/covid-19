import Router from "next/router";


const ProductsCart = (props) => {
  return (
    <div>
        {JSON.parse(props.products).map((product) => (
        <div className="d-flex justify-content-between align-items-center">
          <div className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
            <div>
              <h3>
                {product.id}. {product.name} {product.short_description}
              </h3>
              <h6>Precio: {product.price}</h6>
              <p>Descripcion: {product.description} </p>
            </div>
            <div>
            <img src={product.images[0].src} alt="" width="110" height="110"/>
            </div>
          </div>
          </div>
        ))}
    </div>
  );
};

export default ProductsCart;