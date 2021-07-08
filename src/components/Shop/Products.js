import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMYPRODUCTS = [
  {
    id: "p1",
    title: "test item",
    price: 5,
    description: "this is a test item",
  },
  {
    id: "p2",
    title: "An apple",
    price: 7,
    description: "It's healthy eat it",
  },
  {
    id: "p2",
    title: "A pizza",
    price: 3,
    description: "Italy's finest",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMYPRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
