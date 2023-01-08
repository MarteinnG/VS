import { TopMenu, TopBar, Logo } from "./Styled";

export function Topbander() {
    return(
        <TopBar>
          <TopMenu>
            <Logo src={"http://ih1.redbubble.net/image.181146356.8650/sticker,375x360.u1.png"} alt="Logo"></Logo>
            <h>ABOUT US</h>
            <h>LOCATIONS</h>
            <h>MENU</h>
            <h>CONTACT</h>
          </TopMenu>
        </TopBar> 
    )
};

export default Topbander;