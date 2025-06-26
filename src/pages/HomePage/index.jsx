import ProductCard from "../../components/ProductCard";

const HomePage = () => {
  const products = [
    {
      id: 10024,
      name: "Balenciaga Running Shoes #Show Stopper",
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "33.00",
      original_price: "66.00",
      discount: "50",
    },
    {
      id: 10025,
      name: "Vans Skate Board Shoes",
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "33.00",
      original_price: "66.00",
      discount: "50",
    },
    {
      id: 10026,
      name: "Nike The Red Running",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "33.00",
      original_price: "66.00",
      discount: "50",
    },
    {
      id: 10026,
      name: "Nike Blue Lagoon",
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "33.00",
      original_price: "66.00",
      discount: "50",
    },
  ];
  return (
    <div className="grid 2xl:grid-cols-6 lg:grid-cols-4 grid-cols-3 gap-1">
      {products.map((item, index) => (
        <ProductCard data={item} key={index} />
      ))}
    </div>
  );
};

export default HomePage;
