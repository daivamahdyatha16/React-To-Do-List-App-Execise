import { Checkbox } from "./ui/checkbox"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./ui/input-group"

const Header = () =>{
  return (
    <main>
      <div className="relative h-75 bg-[url('/src/assets/background-header.png')] bg-cover bg-center">
        <div className="absolute z-10 size-full bg-linear-to-bl from-[#5596FF]/60 to-[#AC2DEB]/60">
          <div className="z-20 container mx-auto h-full max-w-135.25">
            <div className="flex size-full w-full flex-col justify-center gap-8">
              <h1 className="text-[40px] font-bold tracking-[15px] text-white">
                TODO
              </h1>
              <InputGroup className="h-12 bg-white px-2">
                <InputGroupAddon className="px-4">
                  <Checkbox className="size-7 rounded-full" />
                </InputGroupAddon>
                <InputGroupInput
                  className="text-black"
                  placeholder="Create a to do"
                />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Header;
