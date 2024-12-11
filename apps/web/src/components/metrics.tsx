import Link from "next/link";

export function Metrics() {
  return (
    <div className="grid grid-cols-2 md:flex md:flex-nowrap gap-8 lg:absolute bottom-0 left-0 md:divide-x mt-20 lg:mt-0">
      <Link href="/">
        <div className="flex flex-col md:pr-8 text-center">
          <h4 className="text-[#878787] text-sm mb-4">讲学练展</h4>
          <span className="text-2xl font-mono text-stroke">“9+1”天</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col md:px-8 text-center">
          <h4 className="text-[#878787] text-sm mb-4">急速创作</h4>
          <span className="text-2xl font-mono text-stroke">72小时</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col md:px-8 text-center">
          <h4 className="text-[#878787] text-sm mb-4">
            与“重庆”有关的AIGC短片
          </h4>
          <span className="text-2xl font-mono text-stroke">25个</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col md:px-8 text-center">
          <h4 className="text-[#878787] text-sm mb-4">展映时间</h4>
          <span className="text-2xl font-mono text-stroke">12月12日</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col md:px-8 text-center">
          <h4 className="text-[#878787] text-sm mb-4">展映地点</h4>
          <span className="text-2xl font-mono text-stroke">A区烟雨剧场</span>
        </div>
      </Link>
    </div>
  );
}
