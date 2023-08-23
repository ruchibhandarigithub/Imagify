const Image = ({ image }) =>{
   return (
     
     <a href={image.urls.regular} >
         <img className="h-72 w-full object-cover rounded-lg shadow-md" src={image.urls.small} alt={image.alt_description} />    
     </a>
   
   )
}
export default Image;