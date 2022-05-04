import Link from 'next/link';

export default function FailPage() {
    return (
        <>
            <h1>Fail xx</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}
