import type { GalleryConfig } from "@/types/config";

// 相册配置
export const galleryConfig: GalleryConfig = {
    albums: [
        {
            id: "my-life", // ⚠️ 重要：这必须对应 public/gallery/ 下的文件夹名称
            name: "寂静生活 / My Life", // 页面显示的相册标题
            description: "记录生活点滴，分享那些不经意间的美好瞬间。", // 相册描述
            location: "数字世界", // 拍摄地点或空间标签
            date: "2026-04-23", // 日期
            tags: ["生活", "摄影", "记录"], // 标签
        },
        // 如果想再加一个相册，直接把上面这一段复制一遍，改一下 id 和名称即可
    ],
    // 瀑布流列宽
    columnWidth: 320,
};