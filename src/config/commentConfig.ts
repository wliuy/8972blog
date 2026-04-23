import type { CommentConfig } from "../types/config";

export const commentConfig: CommentConfig = {
    // 🌟 已切换为 twikoo 启用评论系统
    type: "twikoo",

    // twikoo评论系统配置
    twikoo: {
        // 🌟 已填入你刚才在 Vercel 部署成功的后端地址
        envId: "https://8972-comment.vercel.app",
        // 设置 Twikoo 评论系统语言
        lang: "zh-CN",
        // 是否启用文章访问量统计功能
        visitorCount: true,
    },

    // waline评论系统配置
    waline: {
        serverURL: "https://waline.vercel.app",
        lang: "zh-CN",
        emoji: [
            "https://unpkg.com/@waline/emojis@1.4.0/weibo",
            "https://unpkg.com/@waline/emojis@1.4.0/bilibili",
            "https://unpkg.com/@waline/emojis@1.4.0/bmoji",
        ],
        login: "enable",
        visitorCount: true,
    },

    // artalk评论系统配置
    artalk: {
        server: "https://artalk.example.com/",
        locale: "zh-CN",
        visitorCount: true,
    },

    // giscus评论系统配置（保留之前的参数作为备份）
    giscus: {
        repo: "wliuy/8972blog", 
        repoId: "R_kgDORqaV6Q", 
        category: "Announcements", 
        categoryId: "DIC_kwDORqaV6c4C7fj0", 
        mapping: "pathname", 
        strict: "0",
        reactionsEnabled: "1",
        emitMetadata: "0",
        inputPosition: "bottom", 
        lang: "zh-CN",
        loading: "lazy",
    },

    // disqus评论系统配置
    disqus: {
        shortname: "firefly",
    },
};