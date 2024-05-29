import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
async function fetchServices(id) {
  const res = await fetch(`http://api.internationalfruithub.com/api/v1/services/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch services');
  }

  return res.json();
}

const SingleServices = async ({ params }) => {
  const { id } = params;
  //console.log(params);
  const stats = await fetchServices(id);
  //console.log(stats);
  const imageUrl = `http://api.internationalfruithub.com${stats.data.img}`;
  //console.log(stats);
  //console.log(imageUrl);
  //console.log("#".repeat(55));
  return (
    <section className="pb-[120px] pt-[150px]">
      <Breadcrumb
        pageName="Service Details "
        description="know more details about our offered services to be able to know us better."
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
                      src={`${imageUrl}`}
                      alt="image"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {stats.data.decription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServices;
