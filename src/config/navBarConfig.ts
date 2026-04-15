import {
    LinkPreset,
    type NavBarConfig,
    type NavBarLink,
    type NavBarSearchConfig,
    NavBarSearchMethod,
} from "../types/config";
import { siteConfig } from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
    // 基础导航栏链接
    const links: (NavBarLink | LinkPreset)[] = [
        // 主页
        LinkPreset.Home,

        // 归档
        LinkPreset.Archive,
    ];

    // 根据配置决定是否添加友链
    if (siteConfig.pages.friends) {
        links.push(LinkPreset.Friends);
    }

    // 根据配置决定是否添加留言板
    if (siteConfig.pages.guestbook) {
        links.push(LinkPreset.Guestbook);
    }

    // 我的及其子菜单
    links.push({
        name: "我的",
        url: "/my/",
        icon: "material-symbols:person",
        children: [
            ...(siteConfig.pages.gallery ? [LinkPreset.Gallery] : []),
            ...(siteConfig.pages.bangumi ? [LinkPreset.Bangumi] : []),
        ],
    });

    // 关于及其子菜单
    links.push({
        name: "关于",
        url: "/content/",
        icon: "material-symbols:info",
        children: [
            ...(siteConfig.pages.sponsor ? [LinkPreset.Sponsor] : []),
            LinkPreset.About,
        ],
    });

    // 自定义导航栏链接 - 寂静如雪 资源矩阵
    links.push({
        name: "链接",
        url: "/links/",
        icon: "material-symbols:link",

        // 子菜单配置
        children: [
            {
                name: "8972资源站",
                url: "https://89729981.xyz/",
                external: true,
                icon: "material-symbols:folder-zip-outline",
            },
            {
                name: "8972导航",
                url: "https://dh.89729981.xyz/",
                external: true,
                icon: "material-symbols:explore-outline",
            },
            {
                name: "小红书",
                url: "https://xhslink.com/m/8NjnfXOIqve",
                external: true,
                icon: "simple-icons:xiaohongshu",
            },
        ],
    });

    return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
    method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();