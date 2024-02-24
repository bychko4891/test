export const Button2 = ({ onClick }:{ onClick: () => void }) => {
    const BurgerIcoClickHandler = () => {
        if (onClick) {
            onClick();
        }
    }
    return (
        <>

            <button onClick={BurgerIcoClickHandler}>Send form</button>

        </>
    );
};