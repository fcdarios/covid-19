import Router from "next/router";

const Products = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.products.map((product) => (
          <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-action" key={product.id} onClick={() => Router.push(`/products/[id]`, `/products/${product.id}`)}>
            <div>
              <h3>
                {product.id}. {product.name} {product.short_description}
              </h3>
              <h6>Precio: {product.price}</h6>
              <p>Descripcion: {product.description} </p>
            </div>
            <img src={product.images[0].src} alt="" width="50" height="50"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;