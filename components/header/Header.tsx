import {LogoMobile} from "@/components/header/LogoMobile";
import {BurgerIco} from "@/components/header/BurgerIco";

export const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="navbar-custom navbar navbar-expand-lg">
                    <div className="container-fluid px-0">
                        <BurgerIco onClick={onBurgerIcoClick}/>
                        <LogoMobile/>
                        <RightGroup/>
                    </div>
                </div>
            </div>
        </header>
    );
};