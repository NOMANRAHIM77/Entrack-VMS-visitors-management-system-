import * as React from "react"
import { Card, CardContent } from "./card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function CarouselPlugin() {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const imagesCarosel = [
    { path: "/images/tesla.png" },
    { path: "/images/bmw.png" },
    { path: "/images/usarmy.png" },
    { path: "/images/amazon.png" },
    { path: "/images/aston-martin.png" },
    { path: "/images/cisco.png" },
    { path: "/images/ferrari.png" },
    { path: "/images/louis-viton.png" },
    { path: "/images/master-card.png" },
    { path: "/images/mercedes.png" },
    { path: "/images/oracle.png" },
    { path: "/images/uniliver.png" },
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>

        {imagesCarosel.map((val, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={val.path}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}

      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
