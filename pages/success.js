import Link from 'next/link';

export default function SuccessPage() {
    return (
        <>
            <h1>Success</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}
