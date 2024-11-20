//Mobile Responsive In Tailwind CSS
import Image from "next/image";
const FeaturedProducts = () => {
    return(
        <div className="bg-gray-800">
       <div className="flex flex-wrap justify-center items-center">
  {/* Product 1 */}
  <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center items-center flex-col my-10">
    <Image
      src="/Brownies.jpg"
      alt="Product One"
      width={300}
      height={500}
      className="border-4 border-white rounded-2xl"
    />
    <p className="text-center text-white font-bold pt-10">PKR 150</p>
    <div className="flex justify-center items-center my-3">
      <button className="px-10 py-3 bg-orange-500 hover:bg-orange-700 border-2 border-white text-white font-mono rounded-md">
        Buy Now
      </button>
       </div>
       </div>

             {/* Product 2 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-20 flex justify-center items-center flex-col my-10">
            <Image src="/Chocolate Desserts.png"
            alt="Product Two"
            width={300}
            height={300}
            className="border-4 border-white rounded-2xl"
            
            />
            <p className="text-center text-white font-bold pt-10">PKR 400</p>
             <div className="flex justify-center items-center my-3">
                <button className="px-10 py-3 bg-orange-500 hover:bg-orange-700 border-2 border-white text-white font-mono rounded-md">
                       Buy Now
                </button>
             </div>
             </div>

             {/* Product 3 */}
            <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center items-center flex-col my-10">
            <Image src="/freshly-baked-bread.jpg"
            alt="Product Three"
            width={300}
            height={500}
            className="border-4 border-white rounded-2xl"
            />
            <p className="text-center text-white font-bold pt-10">PKR 100</p>
             <div className="flex justify-center items-center my-3">
                <button className="px-10 py-3 bg-orange-500 hover:bg-orange-700 border-2 border-white text-white font-mono rounded-md">
                       Buy Now
                </button>
             </div>
             </div>

            {/* Product 4 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-20 flex justify-center items-center flex-col my-10">
            <Image src="/Drinks.jpg"
            alt="Product Four"
            width={300}
            height={300}
            className="border-4 border-blue-600 rounded-2xl"
            />
            <p className="text-center text-white font-bold pt-10">PKR 100</p>
             <div className="flex justify-center items-center my-3">
                <button className="px-10 py-3 bg-orange-500 hover:bg-orange-700 border-2 border-white text-white font-mono rounded-md">
                       Buy Now
                </button>
             </div>
             </div>

               {/* Product 5 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-20 flex justify-center items-center flex-col my-10">
            <Image src="/croissants.jpg"
            alt="Product Five"
            width={300}
            height={300}
            className="border-4 border-blue-600 rounded-2xl"
            />
            <p className="text-center text-white font-bold pt-10">PKR 120</p>
             <div className="flex justify-center items-center my-3">
                <button className="px-10 py-3 bg-orange-500 hover:bg-orange-700 border-2 border-white text-white font-mono rounded-md">
                       Buy Now
                </button>
             </div>
             </div>

               {/* Product 6 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-20 flex justify-center items-center flex-col my-10">
            <Image src="/customized cakes.jpg"
            alt="Product Six"
            width={300}
            height={300}
            className="border-4  border-blue-600 rounded-2xl"
            />
            <p className="text-center text-white font-bold pt-10">PKR 700</p>
             <div className="flex justify-center items-center my-3">
                <button className="px-10 py-3 bg-orange-500 hover:bg-orange-700 border-2 border-white text-white font-mono rounded-md">
                       Buy Now
                </button>
             </div>
             </div>

               {/* Product 7 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-20 flex justify-center items-center flex-col my-10">
            <Image src="/cookies and biscuits.jpg"
            alt="Product Seven"
            width={300}
            height={300}
            className="border-4 border-blue-600 rounded-2xl"
            />
            <p className="text-center text-white font-bold pt-10">PKR 220</p>
             <div className="flex justify-center items-center my-3">
                <button className="px-10 py-3 bg-orange-500 hover:bg-orange-700 border-2 border-white text-white font-mono rounded-md">
                       Buy Now
                </button>
             </div>
             </div>

               {/* Product 8 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-20 flex justify-center items-center flex-col my-10">
            <Image src="/colorful cupcakes.jpg"
            alt="Product Eight"
            width={300}
            height={300}
            className="border-4 border-white rounded-2xl"
            />
            <p className="text-center text-white font-bold pt-10">PKR 250</p>
             <div className="flex justify-center items-center my-3">
                <button className="px-10 py-3 bg-orange-500 hover:bg-orange-700 border-2 border-white text-white font-mono rounded-md">
                       Buy Now
                </button>
             </div>
             </div>

               {/* Product 9 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-20 flex justify-center items-center flex-col my-10">
            <Image src="/mango cheesecake.jpg"
            alt="Product Nine"
            width={300}
            height={300}
            className="border-4 border-blue-600 rounded-2xl"
            />
            <p className="text-center text-white font-bold pt-10">PKR 350</p>
             <div className="flex justify-center items-center my-3">
                <button className="px-10 py-3 bg-orange-500 hover:bg-orange-700 border-2 border-white text-white font-mono rounded-md">
                       Buy Now
                </button>
             </div>
             </div>

               {/* Product 10 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-20 flex justify-center items-center flex-col my-10">
            <Image src="/savory pastries.jpg"
            alt="Product Ten"
            width={300}
            height={300}
            className="border-4 border-white rounded-2xl"
            />
            <p className="text-center text-white font-bold pt-10">PKR 300</p>
             <div className="flex justify-center items-center my-3">
                <button className="px-10 py-3 bg-orange-500 hover:bg-orange-700 border-2 border-white text-white font-mono rounded-md">
                       Buy Now
                </button>
             </div>
             </div>

               {/* Product 11 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-20 flex justify-center items-center flex-col my-10">
            <Image src="/seasonal treats.jpg"
            alt="Product Eleven"
            width={300}
            height={300}
            className="border-4 border-white rounded-2xl"
            />
            <p className="text-center text-white font-bold pt-10">PKR 1000</p>
             <div className="flex justify-center items-center my-3">
                <button className="px-10 py-3 bg-orange-500 hover:bg-orange-700 border-2 border-white text-white font-mono rounded-md">
                       Buy Now
                </button>
             </div>
             </div>

               {/* Product 12 */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-20 flex justify-center items-center flex-col my-10">
            <Image src="/Stuff Donuts.jpg"
            alt="Product Twelve"
            width={300}
            height={300}
            className="border-4 border-blue-600 rounded-2xl"
            />
            <p className="text-center text-white font-bold pt-10">PKR 450</p>
             <div className="flex justify-center items-center my-3">
                <button className="px-10 py-3 bg-orange-500 hover:bg-orange-700 border-2 border-white text-white font-mono rounded-md">
                       Buy Now
                </button>
             </div>
             </div>
        </div>
        </div>
    )
}
export default FeaturedProducts;