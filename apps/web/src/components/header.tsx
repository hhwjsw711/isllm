import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="absolute top-0 w-full flex items-center justify-center p-4 z-10">
      <Link href="/">
        <div className="relative">
          <Image
            src="/aigc-logo.png"
            alt="V1 logo"
            width={700} // 保持 1:7 比例
            height={100} // 高度基准
            className="w-[280px] h-[40px] md:w-[420px] md:h-[60px]" // 调小移动端尺寸
            quality={100}
          />
        </div>
      </Link>
    </header>
  );
}
