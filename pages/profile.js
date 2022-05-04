import Link from 'next/link';
import Image from 'next/image';


export default function ProfilePage() {
    return (
        <>
            <h1>Profile</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <Image
                src="/images/profile.jpeg" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
            />
        </>
    );
}


