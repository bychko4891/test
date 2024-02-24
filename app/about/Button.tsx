import {Button2} from "@/app/about/Button2";

export const Button = ({ onClick }:{onClick:any }) => {
    // const BurgerIcoClickHandler = () => {
    //     if (onClick) {
    //         onClick();
    //     }
    // }
    return (
        <>

                {/*<button onClick={BurgerIcoClickHandler}>Send form</button>*/}
            <Button2 onClick={onClick} />

        </>
    );
};