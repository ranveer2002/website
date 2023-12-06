import AboutUs from "../components/AboutUs";
import { BsCart4 } from "react-icons/bs";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id:"0",
      image:"https://cdn.hswstatic.com/gif/stethoscope-1-original.jpg",
      title:"STETHOSCOPE, BURGUNDY, 2451",
      desc:"The 3M Littmann Lightweight II S.E. Stethoscope is an ideal entry-level instrument, with a tunable diaphragm, dual-sided chestpiece, and reliable acoustic performance. Its teardrop shape makes auscultation around blood pressure cuffs easier.",
      price:"RS. 12000.00"
    },
    {
      id:"1",
      image:"https://cdn.hswstatic.com/gif/stethoscope-1-original.jpg",
      title:"STETHOSCOPE, BURGUNDY, 2451",
      desc:"The 3M Littmann Lightweight II S.E. Stethoscope is an ideal entry-level instrument, with a tunable diaphragm, dual-sided chestpiece, and reliable acoustic performance. Its teardrop shape makes auscultation around blood pressure cuffs easier.",
      price:"RS. 12000.00"
    },
    {
      id:"2",
      image:"https://cdn.hswstatic.com/gif/stethoscope-1-original.jpg",
      title:"STETHOSCOPE, BURGUNDY, 2451",
      desc:"The 3M Littmann Lightweight II S.E. Stethoscope is an ideal entry-level instrument, with a tunable diaphragm, dual-sided chestpiece, and reliable acoustic performance. Its teardrop shape makes auscultation around blood pressure cuffs easier.",
      price:"RS. 12000.00"
    },
    {
      id:"3",
      image:"https://cdn.hswstatic.com/gif/stethoscope-1-original.jpg",
      title:"STETHOSCOPE, BURGUNDY, 2451",
      desc:"The 3M Littmann Lightweight II S.E. Stethoscope is an ideal entry-level instrument, with a tunable diaphragm, dual-sided chestpiece, and reliable acoustic performance. Its teardrop shape makes auscultation around blood pressure cuffs easier.",
      price:"RS. 12000.00"
    }
  ]
  return (
    <div>
      <div className="w-[1280px] mx-auto flex justify-between items-center mt-10">
        <p className="text-3xl font-semibold">Products</p>
        <div className="w-14 h-14 rounded-full bg-green-100 shadow-2xl cursor-pointer right-4">
          <BsCart4 className="text-3xl text-emerald-700 mt-3 ml-3"/>
        </div>
      </div>
      <div className="w-[1280px] flex justify-evenly items-center mx-auto mt-7">
        {
          products.map((product)=>(
            <Link to={`/product-preview`} {...product}>
              <ProductCard {...product} key={product.id}/>
            </Link>
          ))
        }
      </div>
    </div>
  );
};
export default Products;
