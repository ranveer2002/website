
const ProductCard = ({image,title,desc,price})=>{
    return(
        <div>
          <div className="w-[320px] h-[460px]">
            <img src={image} alt="stethoscope" loading="lazy" className="w-[300px] h-56 rounded-md"/>
            <p className="text-lg font-semibold mt-2 mx-auto">{title}</p>
            <p className="text-sm text-slate-400 mt-2">{desc}</p>
            <p className="text-green-500 text-lg font-semibold mt-2">{price}</p>
        </div>
        </div>
    );
}

export default ProductCard;