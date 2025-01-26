import { HomeCard } from "@/components/shared/home/home-card";
import { HomeCarousel } from "@/components/shared/home/home-carousel";
import { toSlug } from "@/lib/utils";
import {
  getAllCategories,
  getProductsForCard,
  getProductsByTag,
} from "@/lib/actions/product.actions";
import data from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import ProductSlider from "@/components/shared/product/product-slider";
import BrowsingHistoryList from "@/components/shared/browsing-history-list";

export default async function HomePage() {
  const todaysDeals = await getProductsByTag({ tag: "todays-deal" });
  const bestSellingProducts = await getProductsByTag({ tag: "best-seller" });

  const categories = (await getAllCategories()).slice(0, 4);
  const newArrivals = await getProductsForCard({
    tag: "new-arrival",
    limit: 4,
  });
  const featureds = await getProductsForCard({
    tag: "featured",
    limit: 4,
  });
  const bestSellers = await getProductsForCard({
    tag: "best-seller",
    limit: 4,
  });

  const cards = [
    {
      title: "Kategorileri Keşfedin",
      link: {
        text: "Daha Fazla Görüntüle",
        href: "/search",
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: "Yeni Gelenler",
      items: newArrivals,
      link: {
        text: "Daha Fazla Görüntüle",
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: "En Çok Satanlar",
      items: bestSellers,
      link: {
        text: "Daha Fazla Görüntüle",
        href: "/search?tag=best-seller",
      },
    },
    {
      title: "Öne Çıkan Ürünler",
      items: featureds,
      link: {
        text: "Daha Fazla Görüntüle",
        href: "/search?tag=featured",
      },
    },
  ];

  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className="md:p-4 md:space-y-4 bg-border">
        <HomeCard cards={cards} />
        <Card className="w-full rounded-none">
          <CardContent className="p-4 items-center gap-3">
            <ProductSlider
              title={"Bugünün Fırsatları"}
              products={todaysDeals}
            />
          </CardContent>
        </Card>

        <Card className="w-full rounded-none">
          <CardContent className="p-4 items-center gap-3">
            <ProductSlider
              title="En Çok Satanlar"
              products={bestSellingProducts}
              hideDetails
            />
          </CardContent>
        </Card>
      </div>


      <div className='p-4 bg-background'>
        <BrowsingHistoryList />
      </div>
    </>
  );
}
