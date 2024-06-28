const Card = (props) => {
//destructing 
const { image } = props.data;
  return (
    <div className="w-[50%] h-[250px] rounded  lg:w-[20%]">
      <img src={image} className="cursor-pointer hover:invert-[0]"/>
    </div>
  );
};
export default Card;
