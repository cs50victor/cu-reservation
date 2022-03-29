import { useEffect, useState } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { Button, StyledLink } from "@components"
import UserUIContainer from "@layouts/UserUIContainer"

const rooms = ["103", "119", "128", "303", "304", "311", "315", "318"]

export default function Rahall() {
  return (
    <UserUIContainer title="Rahall Building Rooms" headerBorder footer>
      <main tw="h-full">
        <section tw="max-w-screen-md mx-auto text-center my-28">
          <h1 className="h2-headline" tw="mt-20 pb-5">
            Rahall Building Rooms
          </h1>
          <div tw="max-w-md mx-auto">
            <ul tw="list-inside list-disc text-left text-lg">
              {rooms.map((room) => (
                <li key={room}>
                  <Link href="/demo-room" passHref>
                    <StyledLink underline>{room}</StyledLink>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </UserUIContainer>
  )
}

Rahall.theme = "light"
