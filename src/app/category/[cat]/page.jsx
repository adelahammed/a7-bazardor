import ProductList from "./productlist";

const getProductList = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const getresponse = await res.json();
  return getresponse;
};

const textBn = (text) => {
  return new Intl.NumberFormat("bn-BD").format(text);
};

const page = async ({ params }) => {
  const { cat } = await params;
  const productList = await getProductList();
  const categorised = productList.filter((product) => product.category == cat);

  return <ProductList categorised={categorised} />;
};

export default page;
