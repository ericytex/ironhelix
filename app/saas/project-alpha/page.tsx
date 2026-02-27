import ProductPage from '@/components/ProductPage'
import { saasProducts } from '@/data/saas-products'

export default function ProjectAlphaPage() {
  const product = saasProducts.find(p => p.id === 'project-alpha')!
  return <ProductPage product={product} />
}

