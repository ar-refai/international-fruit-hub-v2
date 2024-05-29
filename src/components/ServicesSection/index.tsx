import SectionTitle from "../Common/SectionTitle";
import SingleServicesSection from "./SingleServicesSection";
async function fetchServices() {
  const res = await fetch('http://api.internationalfruithub.com/api/v1/services'); 
  if (!res.ok) {
    throw new Error('Failed to fetch services');
  }

  return res.json();
}
const Service = async () => {
  const stats =await fetchServices();
  //console.log(stats);
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
        

          <div className="grid grid-cols-1 gap-x-8 gap-y-14  lg:grid-cols-3">
            {stats.status=="200"?stats.data.map((feature) => {
              //console.log(feature);
              //console.log("#".repeat(40));
              return <SingleServicesSection key={feature.id} feature={feature} />
            }):<>There is No Data</>}
          </div>
        </div>
      </section>


    </>
  );
};

export default Service;
