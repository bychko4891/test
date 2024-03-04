import {Login} from "@/components/auntification/Login";
import {GetServerSideProps} from "next";
import {getServerSession} from "next-auth";

export default function LoginPage() {

    return (

        <Login/>

    );
}