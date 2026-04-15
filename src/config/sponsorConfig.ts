import type { SponsorConfig } from "../types/config";

export const sponsorConfig: SponsorConfig = {
    // 页面标题
    title: "赞助支持",

    // 页面描述文本
    description: "感谢您为技术探索与资源分享提供的助力",

    // 赞助用途说明
    usage:
        "您的赞助将直接用于服务器的日常维护、域名续费，以及激励我持续发掘并分享更多优质的硬核技术资源。",

    // 是否显示赞助者列表
    showSponsorsList: true,

    // 是否显示评论区
    showComment: true,

    // 是否在文章详情页底部显示赞助按钮
    showButtonInPost: true,

    // 赞助方式列表（已移除爱发电与 Ko-fi，仅保留常用方式）
    methods: [
        {
            name: "支付宝",
            icon: "fa7-brands:alipay",
            qrCode: "/assets/images/sponsor/alipay.png",
            link: "",
            description: "使用 支付宝 扫码赞助",
            enabled: true,
        },
        {
            name: "微信",
            icon: "fa7-brands:weixin",
            qrCode: "/assets/images/sponsor/wechat.png",
            link: "",
            description: "使用 微信 扫码赞助",
            enabled: true,
        },
    ],

    // 赞助者列表（为您编了几个极具“技术范儿”的匿名支持者）
    sponsors: [
        {
            name: "一 * 顺",
            amount: "¥6.66",
            date: "2026-04-10",
        },
        {
            name: "A * 吴",
            amount: "¥10",
            date: "2026-04-12",
        },
        {
            name: "陈 * 飞",
            amount: "¥20",
            date: "2026-04-14",
        },
    ],
};