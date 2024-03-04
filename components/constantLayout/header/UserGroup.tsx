import React, { useEffect } from "react";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";

export const UserGroup = () => {

    const session = useSession();

    useEffect(() => {
        import("./bootstrap.bundle.min").then((bootstrap) => {
        });
    }, []);

    const avatar = session.data?.user?.image || "/images/avatar-2.jpeg";

    return (

        <li className="dropdown ms-2 mb__1">
            <a className="rounded-circle" href="#!" role="button" id="dropdownUser" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="avatar avatar-md avatar-indicators avatar-online">

                    <img id="userAvatar"  src={avatar}  alt="User avatar" className="rounded-circle"/>

                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">

                <div className="px-4 pb-0 pt-2">
                    <div className="lh-1 ">
                        <h5 className="mb-1">{session.data?.user?.name}</h5>
                        <Link href="/user/profile" className="text-inherit fs-6">View my profile</Link>
                    </div>
                    <div className=" dropdown-divider mt-3 mb-2"></div>
                </div>

                <ul className="list-unstyled">

                    <li>
                        <Link className="dropdown-item d-flex align-items-center" href="user/edit">
                            <img className="colored-svg reset-styles me-2" src="/images/edit-user.svg" alt="User edit profile"
                                 width="15" height="15"/>
                            Редагувати
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item d-flex align-items-center" href="user/statistics">
                            <img className="colored-svg reset-styles me-2" src="/images/statistics.svg"
                                 alt="User statistics" width="15" height="15"/>
                            Статистика
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item d-flex align-items-center" href="#!">
                            <img className="colored-svg reset-styles me-2" src="/images/settings.svg"
                                 alt="User statistics" width="15" height="15"/>
                            Налаштування
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item d-flex align-items-center" onClick={() => signOut({callbackUrl: "/"})} href="#">
                            <img className="colored-svg reset-styles me-2" src="/images/power-off.svg"
                                 alt="User statistics" width="15" height="15"/>
                            Вихід
                        </Link>
                    </li>
                </ul>

            </div>
        </li>
    )
}