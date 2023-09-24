import ProductSection from '@/components/ProductSection'
import {getAllProductsFromJson} from '@/context/Data'
import SEO from '@/components/SEO'


function ProductPage({ products }) {  
  const pageTitle = `${products.title} | ${process.env.siteTitle}`  

  return (
    <div className="min-h-screen py-12 sm:pt-20">
        <SEO title={pageTitle} />
      <ProductSection products={products} />
    </div>
  )
}

export async function getStaticPaths() {

  const products = await getAllProductsFromJson()


  // const arr = products.map((data) => {    
  //   const getID = String(data.id)
  //   return {
  //     params: { getID }
  //   }
  // })
  var  paths  = products.map(function(data){
    return "/products/"+data.slug;
  })
  


  return {
    paths,
    fallback: false,
  }
}




export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1


  let products = await getAllProductsFromJson()


  const objectLength = obj => Object.entries(obj).length;

  const lenOfProducts =  [...'x'.repeat(objectLength(products)).split('').keys()]


  
  lenOfProducts.some(function(item,index){
    if(products[item].slug == (params.product)){
      products = products[item]
      return true;
    }
  });

  return { props: { products } };
}
 

export default ProductPage
