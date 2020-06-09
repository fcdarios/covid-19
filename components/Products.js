import Router from "next/router";


const Products = (props) => {
  return (
    <div>
        {props.products.map((product) => (
        <div className="d-flex justify-content-between align-items-center">
          <div className="list-group-item d-flex justify-content-between align-items-center list-group-item-action" key={product.id} onClick={() => Router.push(`/products/[id]`, `/products/${product.id}`)}>
            <div>
              <h3>
                {product.id}. {product.name} {product.short_description}
              </h3>
              <h6>Precio: {product.price}</h6>
              <p>Descripcion: {product.description} </p>
            </div>
            <div>
            <img src={product.images[0].src} alt="" width="100" height="100"/>
            </div>
          </div>
            <button className="btn btn-success btn-sm" >Add to cart</button>
          </div>
        ))}
    </div>
  );
};

export default Products;