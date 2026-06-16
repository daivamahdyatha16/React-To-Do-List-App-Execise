import { Fragment } from "react"
import { Card, CardContent, CardFooter } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Item, ItemActions, ItemTitle } from "../ui/item"
import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import type { TTodoList } from "@/models/to-do-items.model"

type Props = {
    data: TTodoList
}

const ListCard = ({ data }: Props) => {
  return (
    <Card className="p-0 gap-0">
      <CardContent className=" p-0">
        <ScrollArea className="h-80">
          {data.map((item) => (
            <Fragment key={item.id}>
              <Item>
                <ItemActions>
                  <Checkbox checked={item.isDone} />
                </ItemActions>
                <ItemTitle>{item.title}</ItemTitle>
              </Item>
              <Separator />
            </Fragment>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex items-center justify-between border border-t-gray-200 py-4">
        <p>{data.length} items left</p>
      </CardFooter>
    </Card>
  )
}

export default ListCard