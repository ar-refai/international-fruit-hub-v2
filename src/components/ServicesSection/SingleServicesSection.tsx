import { Services } from "@/types/services";
import Link from "next/link";
 

const SingleServicesSection = ({ feature }: { feature: Services }) => {
  const { img, title, decription, id } = feature;
  const imageUrl = `http://api.internationalfruithub.com${img}`;
  //console.log(feature);



  const getWords = () =>{
    let words = decription.trim().split(/\s+/);
    
    // Get the first 10 words
    let first10Words = words.slice(0, 20);
    
    // Join the first 10 words back into a string
    let result = first10Words.join(' ');
    
    return result;

  }
  return (
    <div className="max-w-sm rounded overflow-hidden pb-20 relative shadow-lg">
    <img  src={`${imageUrl}`} className=" w-full h-52" alt="Sunset in the mountains"/>
    <div className="px-6 py-4 ">
      <div className="font-bold text-primary text-xl mb-2">The Coldest Sunset</div>
      <p className="text-gray-700 text-base">
      {
                    getWords()
                  }...
      </p>
    </div>
    <div className="px-6 pt-4 pb-10 absolute bottom-0 ">
    <Link href={`/services/${id}`} className=" bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded">
  Read More
</Link>
    </div>
  </div>
  );
};

export default SingleServicesSection;
/*

<div className="w-full">
      <div className="wow fadeInUp singlesrve h-20" data-wow-delay=".15s">
        <div 
          className="mb-10 flex items-center justify-center rounded-md text-primary"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px', // You can adjust the height as needed
            width: '100%',
          }}
        ></div>
        <div className="shadow"></div>
        <Link href={`/services/${id}`}>
          <h3 className="mb-5 text-xl item-h1 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
        </Link>
        <p className="pr-[10px] item-p text-base font-medium leading-relaxed text-body-color">
          {decription}
        </p>
      </div>
    </div>

*/ 