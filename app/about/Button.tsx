import {AboutContent} from "@/app/about/AboutContent";

export const Button = ({ onClick }:{onClick:any }) => {
    // const BurgerIcoClickHandler = () => {
    //     if (onClick) {
    //         onClick();
    //     }
    // }
    return (
        <>

                {/*<button onClick={BurgerIcoClickHandler}>Send form</button>*/}
            <AboutContent onClick={onClick} />

        </>
    );
};