import type { GalleryConfig } from "@/types/config";

// 相册配置
export const galleryConfig: GalleryConfig = {
    // 相册列表
    albums: [
        // 支持jpg/png/webp/avif/gif格式
        {
            // id 对应 public/gallery/daily-wallpapers/ 目录
            id: "daily-wallpapers", 
            name: "寂静壁纸 / Daily Wallpapers",
            description: "分享每日收集的优质壁纸，记录视觉点滴。",
            location: "数字世界",
            date: "2026-04-15", // 设置为开启这个相册的日期
            tags: ["壁纸", "风景", "极简", "Daily"],
        },
    ],

    // 瀑布流最小列宽(px)。默认 240。
    // 壁纸通常较大，建议适当调大列宽（如 320 或 360），让预览图更清晰。
    columnWidth: 320,
};