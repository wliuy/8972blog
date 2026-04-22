import type { GalleryConfig } from "@/types/config";

// 相册配置
export const galleryConfig: GalleryConfig = {
    albums: [
        {
            id: "daily-wallpapers", 
            name: "寂静壁纸 / Daily Wallpapers",
            description: "分享每日收集的优质壁纸。",
            location: "数字世界",
            date: "2026-04-15",
            tags: ["壁纸", "风景"],
        },
        // 新增这一段来“激活”你的文件夹
        {
            id: "firefly-2026", 
            name: "流萤 / Firefly 2026",
            description: "流萤相关壁纸收藏。",
            location: "格拉默",
            date: "2026-04-22",
            tags: ["流萤", "星穹铁道", "壁纸"],
        },
    ],
    columnWidth: 320,
};