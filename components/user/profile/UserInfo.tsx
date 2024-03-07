import Image from "next/image";
import {getUserAPI} from "@/app/(protected)/user/profile/getUserAPI";

export const UserInfo = async () => {

const user = await getUserAPI();


    return (
        <div className="col-md-6 col-12 text-justify">
            <span>@</span>
            <span>{user?.login}</span>
            <div className="row">
                <h3>{user?.name}</h3>
                <div>
                    <Image className="colored-svg reset-styles male"
                           src="/images/male.svg" alt="profile" width="20" height="20"/>
                </div>
                {/*<div>*/}
                {/*    <Image className="colored-svg reset-styles"*/}
                {/*           src="/images/female.svg" alt="profile" width="20" height="20"/>*/}
                {/*</div>*/}
            </div>
            <div className="d-flex align-items-center">
                <Image className="colored-svg reset-styles me-1" src="/images/mail.svg" alt="profile"
                       width="20" height="20"/>
                <span>{user?.email}</span>
            </div>
            {/*<br/>*/}
            <Image className="colored-svg reset-styles me-1" src="/images/date.svg" alt="profile"
                   width="20" height="20"/>
            <span>dateOfCreated, dd.MM.yyyy</span>
            <div className="user-about">
                <p>{user?.about}</p>
            </div>
        </div>
    );
};