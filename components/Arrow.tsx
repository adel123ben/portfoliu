import {RiArrowDownSLine} from "react-icons/ri"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const Arrow = () => {
    return(
        <div className="flex flex-row mb-20 items-center justify-center cursor-pointer mt-72 hover:text-gray-400/70">
            <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
          <RiArrowDownSLine  size={40}/>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="flex font-bold">Scroll</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
            
        </div>
    )
}

export default Arrow;