import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link className="navbar-brand" href="/" >
            <Image src="/images/logo.png" alt="Learn English" width="33" height="30" />
            <div className="logo">
                <span>Learn</span><span className="danger">English</span>
            </div>
        </Link>
    );
};