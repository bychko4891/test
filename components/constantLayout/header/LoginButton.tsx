import Link from "next/link";

export const LoginButton = () => {
    return (
        <li>
            <Link href="/login" className="btn_main">
                Вхід
            </Link>
        </li>
    )
};