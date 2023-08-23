import Image from "./Image.js";
const Images = ({data})=>{
   return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
         {
            data.map((image) => (
             <Image image={image} key={image.id} />
            ))
         }
      </div>
   )
}
export default Images;