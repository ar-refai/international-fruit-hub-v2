import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
const Frozen = () => {


  return (
    <section className="pb-[120px] pt-20">
      <Breadcrumb
        pageName="Product Details"
        description="The IQF method not only extends the shelf life of our produce but also maintains its freshness and 
        nutritional value, making them a perfect choice for year-round consumption. By offering these 
        frozen delights, International Fruit Hub ensures that your favorite fruits and vegetables are always 
        within reach, irrespective of the season."
      />
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-primary dark:text-white sm:text-4xl sm:leading-tight ">
                IQF Products
              </h2>
              <div>

                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full h-[500px] sm:aspect-[97/44]">
                    <Image
                      src="/images/frozen.png"
                      alt="image"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">

                The IQF method not only extends the shelf life of our produce but also maintains its freshness and 
nutritional value, making them a perfect choice for year-round consumption. By offering these 
frozen delights, International Fruit Hub ensures that your favorite fruits and vegetables are always 
within reach, irrespective of the season.
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">


Our commitment to excellence is reflected in our rigorous quality control processes, from careful 
selection and harvesting to the state-of-the-art IQF freezing technology. Trust International Fruit 
Hub to bring the finest of Egypt's harvest to your table with the convenience and freshness that 
only IQF products can offer.
</p>


                <h3 className="font-xl !text-4xl mb-10 font-bold leading-tight text-primary dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight text-center">
                  Our IQF List Of Products:
                </h3>
                <div className="flex justify-between">


                  {/*  PRODUCT ONE */}
                  <div className="flex-shrink-0 m-6 flex flex-col justify-around items-center relative bg-green-400 bg-opacity-25 h-[550] rounded-lg max-w-xs shadow-lg group hover:scale-95 transition-all ease-out duration-500">
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform h-full">

                      <img className="relative w-40 object-center" src="\images\strawberry.png" alt="frozen" />
                      <img className="relative w-40 object-center" src="\images\mango.png" alt="frozen" />

                    </div>
                    <span className="absolute top-0 right-0 text-center justify-center bg-neutral-50 rounded rounded-br-none rounded-bl-2xl rounded-tl-none text-green-800 text-sm capitalize font-bold px-3 py-2 leading-none items-center">
                      IQF
                    </span>
                    <div className="relative flex-grow flex items-end text-green-800 px-6 pb-6 mt-6">
                      <div className="flex flex-col text-center justify-center items-center gap-4">
                        <span className="text-xl font-bold uppercase">Strawberries & Mango</span>
                        <p className="text-gray-600 text-sm text-justify">
                          Our strawberries and mangoes are harvested at peak ripeness, ensuring
                          the sweetest flavors are locked in through the IQF process. Ideal for smoothies, desserts, or as a
                          healthy snack, these fruits maintain their vibrant colors, juicy textures, and nutritional benefits.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* PRODUCT TWO */}
                  <div className="flex-shrink-0 m-6 flex flex-col justify-around items-center relative bg-green-400 bg-opacity-25 h-[550] rounded-lg max-w-xs shadow-lg group hover:scale-95 transition-all ease-out duration-500">
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform h-full">

                      <img className="relative w-40 transform translate-x-4 object-center" src="\images\peas.png" alt="frozen" />
                      <img className="relative w-40 transform -translate-x-4 object-center" src="\images\beans.png" alt="frozen" />

                    </div>
                    <span className="absolute top-0 right-0 text-center justify-center bg-neutral-50 rounded rounded-br-none rounded-bl-2xl rounded-tl-none text-green-800 text-sm capitalize font-bold px-3 py-2 leading-none items-center">
                      IQF
                    </span>
                    <div className="relative flex-grow flex items-end text-green-400 px-6 pb-6 mt-6">
                      <div className="flex flex-col text-center justify-center items-center gap-4">
                        <span className="text-xl font-bold text-green-800 uppercase">Peas & Beans</span>
                        <p className="text-gray-600 text-sm text-justify">
                          Our strawberries and mangoes are harvested at peak ripeness, ensuring
                          the sweetest flavors are locked in through the IQF process. Ideal for smoothies, desserts, or as a
                          healthy snack, these fruits maintain their vibrant colors, juicy textures, and nutritional benefits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between" >
                  {/* PRODUCT THREE */}
                  <div className="flex-shrink-0 m-6 flex flex-col justify-around items-center relative bg-green-400 bg-opacity-25 h-[550] rounded-lg max-w-xs shadow-lg group hover:scale-95 transition-all ease-out duration-500">
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform h-full">
                      <div className="flex flex-col justify-center">

                        <img className="relative w-40 object-center" src="\images\artichoke.png" alt="frozen" />
                        <div className="flex justify-center">

                          <img className="relative w-40 object-center" src="\images\okra.png" alt="frozen" />
                          <img className="relative w-40 object-center" src="\images\cauliflower.png" alt="frozen" />
                        </div>
                      </div>


                    </div>
                    <span className="absolute top-0 right-0 text-center justify-center bg-neutral-50 rounded rounded-br-none rounded-bl-2xl rounded-tl-none text-green-800 text-sm capitalize font-bold px-3 py-2 leading-none items-center">
                      IQF
                    </span>
                    <div className="relative flex-grow flex items-end text-green-400 px-6 pb-6 mt-6">
                      <div className="flex flex-col text-center justify-center items-center gap-4">
                        <span className="text-xl font-bold text-green-800 uppercase">Cauliflower, Artichoke, & Okra</span>
                        <p className="text-gray-600 text-sm text-justify">
                          Our selection of vegetables, including cauliflower, artichoke, and
                          okra, is carefully prepared and quick-frozen to retain their natural flavors and nutritional content.
                          These vegetables are versatile kitchen staples, ready to elevate any recipe
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* PRODUCT Four */}
                  <div className="flex-shrink-0 m-6 flex flex-col justify-around items-center relative bg-green-400 bg-opacity-25 h-[550] rounded-lg max-w-xs shadow-lg group hover:scale-95 transition-all ease-out duration-500">
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform h-full">
                      <img className="relative w-40 object-center" src="\images\Spinach.png" alt="frozen" />
                      <img className="relative w-40 object-center" src="\images\jute.png" alt="frozen" />
                    </div>
                    <span className="absolute top-0 right-0 text-center justify-center bg-neutral-50 rounded rounded-br-none rounded-bl-2xl rounded-tl-none text-green-800 text-sm capitalize font-bold px-3 py-2 leading-none items-center">
                      IQF
                    </span>
                    <div className="relative flex-grow flex items-end text-green-700 px-6 pb-6 mt-6">
                      <div className="flex flex-col text-center justify-center items-center gap-4">
                        <span className="text-xl font-bold uppercase">Strawberries & Mango</span>
                        <p className="text-gray-600 text-sm text-justify">
                          Our strawberries and mangoes are harvested at peak ripeness, ensuring
                          the sweetest flavors are locked in through the IQF process. Ideal for smoothies, desserts, or as a
                          healthy snack, these fruits maintain their vibrant colors, juicy textures, and nutritional benefits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default Frozen;