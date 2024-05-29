import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

async function fetchProduct(id) {
  const res = await fetch(`http://api.internationalfruithub.com/api/v1/product/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch Product');
  }

  return res.json();
}

const SingleProduct = async ({ params }) => {
  const { id } = params;

  // Log params for debugging
  //console.log("Params: ", params);

  // Fetch data
  let stats;
  try {
    stats = await fetchProduct(id);
  } catch (error) {
    // Handle error gracefully
    return (
      <section className="pb-[120px] pt-[150px]">
        <Breadcrumb
          pageName="Product Details"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        />
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Error Fetching Product
                </h2>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  There was an error fetching the product details. Please try again later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Log fetched data for debugging
  //console.log("Fetched Data: ", stats);

  return (
    <section className="pb-[120px] pt-[150px]">
      <Breadcrumb
        pageName="Product Details"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {stats.data.title}
              </h2>
              <div>
                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <img
                      src={`http://api.internationalfruithub.com/${stats.data.img}`}
                      alt="image"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p className="mb-8 text-base font-medium leading-relaxed  sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {stats.data.description}
                </p>
                {stats.data.product_details.map((item, index) => (
                  <>
                  <p key={index} className="mb-4 text-base text-black font-bold  leading-relaxed  sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {item.title}
                  </p>
                  <p key={index} className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {item.description}
                  </p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
