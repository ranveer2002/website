
const ProductPreview = ({image,title,desc,price})=>{
    return(
        <div>
            <div>
                <img src={image} alt="stethoscope" loading="lazy"/>
            </div>
            <div>
                <p>{title}</p>
                <p>{desc}</p>
                <p>{price}</p>
                <div className="flex space-x-5 mt-5">
                    <button className="bg-emerald-500 text-white px-4 py-1 rounded-md hover:bg-emerald-700 duration-500">Add to cart</button>
                    <button className="bg-emerald-500 text-white px-4 py-1 rounded-md hover:bg-emerald-700 duration-500">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPreview;