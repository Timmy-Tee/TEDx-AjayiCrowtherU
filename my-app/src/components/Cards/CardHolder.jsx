import Cards from "./Cards";

function CardHolder(e) {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 w-full md:grid-cols-2 md:gap-x-3 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-3 gap-y-5  ">
        {e.dataProps.map((data) => {
          return (

            <Cards
              key={data.key}
              image={data.Image}
              name={data.name}
              job={data.job}
              instagram={data.instagram}
              twitter={data.twitter}
              linkedin={data.linkedin}
              facebook={data.facebook}
              tiktok={data.tiktok}
            />
          );
        })}
      </div>
    </div>
  );
}
export default CardHolder;
