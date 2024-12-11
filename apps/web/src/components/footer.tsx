import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-[1px] border-border px-4 md:px-6 pt-10 md:pt-16 bg-[#fff] dark:bg-[#0C0C0C] overflow-hidden md:max-h-[820px]">
      <div className="container">
        <div className="flex justify-between items-center border-border border-b-[1px] pb-10 md:pb-16 mb-12">
          <Link href="/" className="scale-50 -ml-[52px] md:ml-0 md:scale-100">
            <Image
              src="/logos/fizz.svg"
              alt="FizzDragon Logo"
              height={60}
              width={500}
            />
            <span className="sr-only">FizzDragon</span>
          </Link>
          <Link href="/" className="scale-50 -ml-[52px] md:ml-0 md:scale-100">
            <Image
              src="/logos/yu.svg"
              alt="FizzDragon Logo"
              height={60}
              width={500}
            />
            <span className="sr-only">Yu</span>
          </Link>
          <Link href="/" className="scale-50 -ml-[52px] md:ml-0 md:scale-100">
            <Image
              src="/logos/xing.svg"
              alt="FizzDragon Logo"
              height={60}
              width={500}
            />
            <span className="sr-only">Xing</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
