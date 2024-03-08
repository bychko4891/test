import Image from "next/image";
import {getUserAPI} from "@/app/(protected)/user/profile/getUserAPI";

export const UserInfo = async () => {

    const user = await getUserAPI();

// console.log(user?.dateOfCreated + ' 1 1 1 date !');

    return (
        <div className="col-md-6 col-12 text-justify">
            <span>@</span>
            <span>{user?.login}</span>
            <div className="row">
                <h3>{user?.name}</h3>
                <div>
                    <Image className="colored-svg reset-styles male" src="/images/male.svg" alt="profile" width="20" height="20"/>
                </div>
                {/*<div>*/}
                {/*    <Image className="colored-svg reset-styles"*/}
                {/*           src="/images/female.svg" alt="profile" width="20" height="20"/>*/}
                {/*</div>*/}
            </div>
            <div className="d-flex align-items-center ma-10-0">
                <Image className="colored-svg reset-styles me-1" src="/images/mail.svg" alt="profile" width="20" height="20"/>
                <span>{user?.email}</span>
            </div>
            <div className="d-flex align-items-center ma-10-0">
                <Image className="colored-svg reset-styles me-1" src="/images/date.svg" alt="profile" width="20" height="20"/>
                <span>{user?.dateOfCreated}</span>
            </div>
            <div className="user-about">
                <p>{user?.about}</p>
            </div>
        </div>
    );
};