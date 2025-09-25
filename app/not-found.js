'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="error-page container">
            <Image alt="Not found image" src="/404.png" width={600} height={200} ></Image>
            <h1>Page Not Found</h1>
            <div className='actions'>
                <button className='outline' onClick={() => router.back()}>Go back</button>
            </div>
        </div>
    )
}
