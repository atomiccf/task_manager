import Link from "next/link";
import {Button} from "@/shared/ui/Button/Button";

export default function About() {
    return (
        <main>
            <h1 className="text-3xl font-bold">About project</h1>
            <p className="mt-4">It is a simple task manager</p>
            <Button>
                <Link href="/">Back to the main page</Link>
            </Button>
        </main>

    );
}
