'use client'
import useBrowsingHistory from '@/hooks/use-browsing-history'
import React, { useEffect } from 'react'
import ProductSlider from './product/product-slider'
import { Separator } from '../ui/separator'
import { cn } from '@/lib/utils'

function ProductList({
  title,
  type = 'history',
  hideDetails = false,
}: {
  title: string
  type: 'history' | 'related'
  hideDetails?: boolean
}) {
  const { products } = useBrowsingHistory()
  const [data, setData] = React.useState([])

  useEffect(() => {
    if (products.length === 0) return
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `/api/products/browsing-history?type=${type}&categories=${products
            .map((product) => product.category)
            .join(',')}&ids=${products.map((product) => product.id).join(',')}`
        )
        if (!res.ok) return
        const data = await res.json()
        setData(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [products, type])

  if (data.length === 0) return null

  return (
    <ProductSlider
      title={title}
      products={data}
      hideDetails={hideDetails}
    />
  )
}

export default function BrowsingHistoryList({
  className,
}: {
  className?: string
}) {
  const { products } = useBrowsingHistory()

  if (products.length === 0) return null

  return (
    <div className='bg-background'>
      <Separator className={cn('mb-4', className)} />
      <ProductList
        title={"İlgili ürünler"}
        type='related'
      />
      <Separator className='mb-4' />
      <ProductList
        title={'Görüntülenen ürünler'}
        hideDetails
        type='history'
      />
    </div>
  )
}