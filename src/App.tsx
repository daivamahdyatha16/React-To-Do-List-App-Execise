import { Fragment } from "react"
import Header from "./components/header"
import { Card, CardContent } from "./components/ui/card"
import { Checkbox } from "./components/ui/checkbox"
import { Item, ItemActions, ItemTitle } from "./components/ui/item"
import { ScrollArea } from "./components/ui/scroll-area"
import { Separator } from "./components/ui/separator"
import ToDoListData from "./data/to-do-list.data"


export function App() {
  return (
    <>
      <Header />
      <div className="relative -top-2 container mx-auto max-w-135.25">
        <Card className="p-0">
          <CardContent className="h-72 p-0">
            <ScrollArea className="h-72">
              {ToDoListData.map((item) => (
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
        </Card>
      </div>
    </>
  )
}

export default App
