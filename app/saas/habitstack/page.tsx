import ProductPage from '@/components/ProductPage'
import { saasProducts } from '@/data/saas-products'

export default function HabitStackPage() {
  const product = saasProducts.find(p => p.id === 'habitstack-pro')!
  return <ProductPage product={product} />
}

