import ProductCard from '@/components/ProductCard'

function ProductListings({ products }) {

  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {
        
        products.map((products, index) => (
          <ProductCard key={index} products={products} />
        ))
      }
    </div>
  )
}

export default ProductListings
