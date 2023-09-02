import { ModeToggle } from "../Toggel-Button";
import {AiFillInstagram, AiFillLinkedin,AiFillFacebook, AiOutlineGithub} from "react-icons/ai"

const Header = () => {
    return(
        <div className="flex top-0 inset-0 flex-row items-center p-3 justify-between">
            <div className="flex flex-row gap-2 cursor-pointer">
            <AiFillInstagram size={20} />
            <AiFillFacebook  size={20} />
            <AiOutlineGithub   size={20} />
            <AiFillLinkedin size={20}/>
            </div>
            
            <div>
            <ModeToggle />
            </div>
            
        </div>
    )
}

export default Header;