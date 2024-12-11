"use client";

import { Avatar } from "@v1/ui/avatar";
import { AvatarImageNext } from "@v1/ui/avatar";
import { Button } from "@v1/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@v1/ui/dialog";
import { Icons } from "@v1/ui/icons";
import { useEffect, useMemo, useRef, useState } from "react";
import { type Story, StoryCard } from "./story-card";

const stories = [
  {
    id: 1,
    title: "《白鹤粱奇梦缘》",
    name: "山茶花",
    company: "江丹",
    country: "冉雨菲、陈思羽",
    src: "/stories/group1.jpg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group1-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "林悦被神秘的梦境困扰，在查阅资料时意外穿书，参与了一场对抗邪恶力量侵害的斗争，回到现实，劝说无良开发商李总停止破坏白鹤梁，一起保护白鹤梁的故事。",
      },
    ],
  },
  {
    id: 2,
    title: "《不一样的五星红旗》",
    name: "小野猫",
    company: "向玥",
    country: "牟圳垚、甘梦雪",
    src: "/stories/group2.jpg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group2-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "1949年，罗广斌被关在渣滓洞狱中的时候听闻新中国成立的消息，凭想象制作了一面五星红旗并逃出去的故事。",
      },
    ],
  },
  {
    id: 3,
    title: "《愈炸愈强》",
    name: "乒乒乓乓队",
    company: "李单",
    country: "谭昕、陈道欢",
    src: "/stories/group3.jpg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group3-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "大一女孩渝佑安穿越重庆大轰炸时期，疏散村民避险，回到现实后对历史有更深的感悟。",
      },
    ],
  },
  {
    id: 4,
    title: "《穿书奇缘》",
    name: "农奴翻身变富婆",
    company: "何影",
    country: "唐宇轩、梁青娜",
    src: "/stories/group4.png",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group4-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "大学生魏小米被神秘系统绑架，穿越到《走马镇民间故事集》变成一只会说话的小猫。她成功协助书中人魏行舟举办比赛解决镇民与走马商人的矛盾，传承走马故事。",
      },
    ],
  },
  {
    id: 5,
    title: "《火锅情暖山城》",
    name: "菜鸟冲锋队",
    company: "刘佳佳",
    country: "王文杰、傅梦雪",
    src: "/stories/group5.jpg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group5-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "一个外地女孩来重庆吃火锅并爱上火锅，在重庆这方土地体验地方人情并感到温暖的故事。",
      },
    ],
  },
  {
    id: 6,
    title: "《江雾纤歌》",
    name: "三剑客",
    company: "任珊珊",
    country: "朱颖颖、王文学",
    src: "/stories/group6.jpg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group6-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "老纤夫督促偷懒的年轻纤夫工作，后遇革命军求助，老纤夫帮其拉纤时遇暴风雨牺牲，年轻纤夫接力，终助革命志士成功逃离。",
      },
    ],
  },
  {
    id: 7,
    title: "《只有梦里看得见》",
    name: "正确率",
    company: "胡秩铭",
    country: "刘杨清、秦钰璐",
    src: "/stories/group7.jpg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group7-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "除夕夜，大足石刻文物修复师陈思远接到紧急修复文物的任务，由于劳累在文物旁睡着，睡梦中文物复活，同他一起过年。",
      },
    ],
  },
  {
    id: 8,
    title: "《天梯之爱》",
    name: "少女先疯队",
    company: "梁欢",
    country: "洪新月、汤文晗",
    src: "/stories/group8.jpeg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group8-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "一对有矛盾的夫妻在博物馆游玩时意外看到了50年代在重庆江津的深山，刘国江为妻子手工开凿出六千多级石梯。故事结束，两人回忆起过往，最终谅解。",
      },
    ],
  },
  {
    id: 9,
    title: "《梦忆山城》",
    name: "有福同享有难退队",
    company: "颜兰苏",
    country: "尹好、江雨栅",
    src: "/stories/group9.png",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group9-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "故事内核是关于时间的流逝、社会变迁以及个人对过去的怀念和对未来的适应。通过老李的梦境，故事展现了重庆从一个老山城到现代化城市的转变，梦中重温了他年轻时的山城生活，感受到了那个时代的生活气息和社会风貌。醒来后，他意识到自己和这个时代格格不入，不知自己的立身之处。",
      },
    ],
  },
  {
    id: 10,
    title: "《潮起潮落》",
    name: "猫和老鼠",
    company: "师佳绵",
    country: "杨佳怡、陈凡",
    src: "/stories/group10.jpg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group10-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "传说朝天门有时光之门，失踪的金钱板唱艺人张守德的日记曾记载过相关内容……偶然间孙子张浩发现日记，决心揭开真相。",
      },
    ],
  },
  {
    id: 11,
    title: "《山城奇幻夜》",
    name: "TFgirls",
    company: "李方鑫",
    country: "伍秋燕、付瑶",
    src: "/stories/group11.jpg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group11-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "洪崖洞点灯，如童话入梦。除夕夜，重庆的地标建筑们（洪崖洞，千厮门大桥，解放碑，来福士）迎来了十年一度的化形游乐时光，而当十二点的钟声响起，它们就必须回归本体，继续履行自己作为城市标志守护重庆的使命。",
      },
    ],
  },
  {
    id: 12,
    title: "《地府奇遇》",
    name: "鬼魂主",
    company: "李曼",
    country: "余江兰、甘雨仙",
    src: "/stories/group12.jpeg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group12-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "讲述了社畜林晓意外进入地府被迫成为孟婆，必须完成100万KPL才能回到现实的故事。在这次奇遇中尝尽人生百味，学会享受无法避免的痛苦。",
      },
    ],
  },
  {
    id: 13,
    title: "《再见，绘心》",
    name: "从容应队",
    company: "罗雅俐",
    country: "柴久晨、张钰涵",
    src: "/stories/group13.jpeg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group13-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "才华横溢画家李绘心，无法面对母亲的突然离世，悲伤至极，失去了绘画的能力。在奇幻的梦境中，她与母亲在重庆再次相遇，重温了儿时与母亲在重庆的快乐时光，母女俩走在嘉陵江边，吃了重庆老火锅，温暖了绘心。“再见绘心”这句话也是母亲在梦里给的最后一份礼物，重庆的热情，给予了绘心带来了面对现实的勇气。",
      },
    ],
  },
  {
    id: 14,
    title: "《山城密语》",
    name: "汪汪队",
    company: "孟雨洁",
    country: "邓萌、康哲勋",
    src: "/stories/group14.png",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group14-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "这个故事讲述的是新生代作家唐刻被吸入魔幻山城，与文字小怪兽“堂客”并肩作战，收集方言文字，最终“堂客”牺牲，助唐刻回归现实，领悟文字的力量与友情的意义。",
      },
    ],
  },
  {
    id: 15,
    title: "《雾都英雄：变形的士》",
    name: "被迫上岗",
    company: "杨晨璐",
    country: "刘秦雨、帅岷彤",
    src: "/stories/group15.jpg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group15-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "这个故事讲述了李师傅，一位重庆的出租车司机，如何在日常生活中展现出如变形金刚般的超级英雄精神。",
      },
    ],
  },
  {
    id: 16,
    title: "《龙魂觉醒，时光之旅》",
    name: "智慧火花",
    company: "苏志展",
    country: "梁靖、许燕芬",
    src: "/stories/group16.png",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group16-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "来自未来世界的三位少年穿越到现代，打败“遗忘者”，守护舞龙非遗文化。",
      },
    ],
  },
  {
    id: 17,
    title: "《川韵》",
    name: "奶龙拯救世界",
    company: "陈凯",
    country: "古钧升、文国翰",
    src: "/stories/group17.jpeg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group17-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "一名出生于川剧世家的变脸少年，在传承变脸的过程中，与师爷产生分歧，离开剧院。后因师爷的死亡，回到剧院继承师傅的衣钵教授变脸。",
      },
    ],
  },
  {
    id: 18,
    title: "《巫溪遗梦》",
    name: "基因重组",
    company: "牟钰岭",
    country: "余华丽、胡俊豪",
    src: "/stories/group18.jpeg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group18-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "一个被顶替的巫族神女为了解放女性自由，在白衣少年的启发下与传统祭祀制度对抗的故事。",
      },
    ],
  },
  {
    id: 19,
    title: "《奇妙夜之旅》",
    name: "渝跃龙门",
    company: "黄赵仡伕",
    country: "周留扬、杨航",
    src: "/stories/group19.jpg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group19-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "讲述一个叫庆千里的学生来到重庆游玩，偶然间穿越回古代体验了纤夫的生活，并了解到了火锅的起源。",
      },
    ],
  },
  {
    id: 20,
    title: "《一帘幽梦》",
    name: "灵犀三韵",
    company: "程晓慧",
    country: "陈子渝、董红艳",
    src: "/stories/group20.jpg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group20-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "《一帘幽梦》是一部穿梭于现代与民国的时空传奇。主角叶清，自幼被神秘梦境缠绕，直至在北京非遗展上，一幅竹帘揭开了尘封的记忆。他踏上梁平寻根之旅，揭开前世之谜，发现自己与竹帘非遗技艺的不解之缘。",
      },
    ],
  },
  {
    id: 21,
    title: "《巫溪阴条岭的守望》",
    name: "君子不器",
    company: "郑小羽",
    country: "秦斯琪、冉超灵",
    src: "/stories/group21.jpg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group21-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "一个猎户在误杀拯救小女孩的鹿后内心悔恨，最终和村民建立起一个野生动物自然保护区。",
      },
    ],
  },
  {
    id: 22,
    title: "《神女峰的传说》",
    name: "海底小纵队",
    company: "石璐银",
    country: "龙诗宇、张薇薇",
    src: "/stories/group22.jpeg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group22-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "主要讲述了一个神女为爱与守护牺牲，化作山峰抵挡洪水保护所爱之人，最终成为永恒传说的故事。",
      },
    ],
  },
  {
    id: 23,
    title: "《漆艺之梦》",
    name: "冰畅言队",
    company: "况畅",
    country: "赵彬彬、熊欣妍",
    src: "/stories/group23.jpeg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group23-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "美术专业大四生林韬毕业设计受挫后，偶然于 VR 体验中穿越漆艺世界，归来后将漆艺融入创作，传承非遗，成果斐然。",
      },
    ],
  },
  {
    id: 24,
    title: " 《青春樱歌》",
    name: "畅通无组",
    company: "刘松倩",
    country: "",
    src: "/stories/group24.jpg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group24-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content: "关于一个少年的高中青春生活写照。",
      },
    ],
  },
  {
    id: 25,
    title: "《朝天门下时光门之秘》",
    name: "勇于挑战",
    company: "郝茂希",
    country: "",
    src: "/stories/group25.jpeg",
    video:
      "https://majjajfhoxucebhcbuih.supabase.co/storage/v1/object/public/videos/group25-mobile.mp4",
    content: [
      {
        type: "paragraph",
        content:
          "意外穿越回六十年代，发现金钱板，学习金钱板，回到现实宣传金钱板。",
      },
    ],
  },
];

function Video({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handlePlayPause();
    }
  };

  return (
    <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
      <div
        role="button"
        tabIndex={0}
        onClick={handlePlayPause}
        onKeyDown={handleKeyDown}
        className="w-full h-full"
      >
        <video
          ref={videoRef}
          src={src}
          poster="/hero.png"
          className="w-full h-full object-cover"
          playsInline
        />

        {!isPlaying && (
          <div className="absolute bottom-4 left-4 space-x-4 items-center justify-center z-30 transition-all">
            <Button
              size="icon"
              type="button"
              className="rounded-full size-10 md:size-14 transition ease-in-out hover:scale-110 hover:bg-white bg-white"
              onClick={(e) => {
                e.stopPropagation();
                handlePlayPause();
              }}
              onKeyDown={handleKeyDown}
            >
              <Icons.Play size={24} className="text-black" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SectionStories() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [rowSize, setRowSize] = useState(5);

  // 使用 useEffect 在客户端更新 rowSize
  useEffect(() => {
    const updateRowSize = () => {
      if (window.innerWidth < 640) return setRowSize(1); // 手机端
      if (window.innerWidth < 1024) return setRowSize(3); // 平板
      setRowSize(5); // 桌面端
    };

    // 初始化
    updateRowSize();

    // 监听窗口大小变化
    window.addEventListener("resize", updateRowSize);
    return () => window.removeEventListener("resize", updateRowSize);
  }, []);

  const storyRows = useMemo(() => {
    return stories.reduce((rows: Story[][], story: Story, index: number) => {
      if (index % rowSize === 0) {
        rows.push([story]);
      } else {
        rows[rows.length - 1].push(story);
      }
      return rows;
    }, []);
  }, [rowSize]);

  const handleKeyDown = (event: React.KeyboardEvent, story: Story) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedStory(story);
    }
  };

  return (
    <Dialog>
      <div className="relative mt-10 sm:mt-20 pb-10 sm:pb-20">
        <div className="w-full h-full flex items-center flex-col z-10 relative">
          <h2 className="text-3xl sm:text-[56px] text-center font-medium mt-6 sm:mt-12">
            短片展映
          </h2>
          <div className="flex flex-col gap-6 sm:gap-12 mt-10 sm:mt-20 px-4 sm:px-0">
            {storyRows.map((row) => (
              <div
                key={row[0].id} // 使用行中第一个故事的 ID 作为 key
                className="flex flex-col sm:flex-row gap-4 sm:-space-x-4 justify-center"
              >
                {row.map((story, index) => (
                  <div
                    key={story.id}
                    className={`transform 
                      ${index % 2 === 0 ? "sm:rotate-3" : "sm:-rotate-3"}
                      ${index % 2 === 0 ? "sm:translate-y-3" : "sm:-translate-y-3"}
                      hover:z-10 hover:-translate-y-5 transition-all duration-300
                      w-full sm:w-auto
                    `}
                  >
                    <DialogTrigger asChild>
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedStory(story)}
                        onKeyDown={(e) => handleKeyDown(e, story)}
                      >
                        <StoryCard {...story} />
                      </div>
                    </DialogTrigger>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="dotted-bg w-[calc(100vw+1400px)] h-full absolute top-0 -left-[1200px] z-0" />
      </div>

      <DialogContent className="max-w-[90vw] sm:max-w-[550px] !p-4 sm:!p-6 pt-8 sm:pt-10 max-h-[90vh] sm:max-h-[calc(100vh-200px)] overflow-y-auto">
        <DialogHeader className="sr-only">
          <DialogTitle>{selectedStory?.title}</DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="size-6">
              <AvatarImageNext
                src={selectedStory?.src ?? ""}
                width={24}
                height={24}
                alt={selectedStory?.name ?? ""}
              />
            </Avatar>
            <div>
              <p>{selectedStory?.name}</p>
              <div className="flex items-center gap-2 text-[#878787]">
                <p className="text-sm">{selectedStory?.company}</p>
                {selectedStory?.country && (
                  <>
                    •<p className="text-sm">{selectedStory?.country}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {selectedStory?.video && <Video src={selectedStory?.video} />}

          {selectedStory?.content?.map((item, index) =>
            item.type === "heading" ? (
              <h2 key={index.toString()} className="text-2xl font-medium">
                {item.content}
              </h2>
            ) : (
              <div
                key={index.toString()}
                className={item.type === "question" ? "text-[#878787]" : ""}
              >
                {item.content}
              </div>
            ),
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
