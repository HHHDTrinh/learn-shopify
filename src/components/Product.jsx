const Product = () => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return <div>Product</div>;
};

export default Product;
