import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const a:number = 5;
  return (
    <main>
        <h1>{a}</h1>
        <h1>HOME</h1>
    </main>
  );
}
