import gallery_data from '../data.js'
import Card from "../components/Card";
const Gallery = (props) => {
  const newImages = gallery_data.map(function(images, index){
    return <Card key={index} data={images} />
  })
  return (
    <section className="px-[20px] gap-y-[20px] w-full h-full flex flex-row flex-wrap lg:px-[75px] lg:gap-y-[40px]">
       {newImages}
    </section>
  );
};
export default Gallery;