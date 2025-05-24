import Link from "next/link";
import {Button} from "@/shared/ui/Button/Button";

export default function Home() {
  return (
   <main className='p-8'>
     <h1 className="text-3xl font-bold">Task Manager</h1>
     <p className="mt-4">Welcome to Task Manager</p>
   <Button className='link_button'>
       <Link href="/about">
           About project
       </Link>
   </Button>
   </main>
  );
}
