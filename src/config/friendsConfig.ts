// src/config/friendsConfig.ts
import type { FriendLink, FriendsPageConfig } from "../types/config";

// 友链页面基础配置
export const friendsPageConfig: FriendsPageConfig = {
	title: "我的朋友们",
	description: "记录一些有趣的站点与好朋友。",
	// 🌟 关键修改：设为 false，彻底去掉底部的“友链申请说明”等内容
	showCustomContent: false, 
	showComment: false,       // 同时关闭评论区，让页面更纯净
	randomizeSort: false,    
};

// 具体的友链列表
export const friendsConfig: FriendLink[] = [
	{
		title: "冬瓜TV",
		imgurl: "https://tc.yang.pp.ua/file/logo/dgtv.png",
		desc: "清爽无弹幕的影视平台，内置多线路优质片源。",
		siteurl: "https://dg.ayang.nyc.mn",
		tags: ["影音"], // 归类为影音
		weight: 10,
		enabled: true,
	},
	{
		title: "MoonTV",
		imgurl: "https://tc.yang.pp.ua/file/logo/MoonTV.png",
		desc: "一个很强大的空壳站点，可以自定义源。",
		siteurl: "https://moon.89729981.xyz",
		tags: ["影音"],
		weight: 8,
		enabled: true,
	},
	{
		title: "播剧网",
		imgurl: "https://tc.yang.pp.ua/file/logo/bojuwang.png",
		desc: "最新电影高清电视剧、美剧韩剧动漫资源大全。",
		siteurl: "https://www.ysxq.cc/",
		tags: ["影音"],
		weight: 7,
		enabled: true,
	},
	{
		title: "无损音乐下载",
		imgurl: "data:image/svg+xml;utf8,<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='256' height='256'><path d='M1024 512c0-282.8-229.2-512-512-512C229.2 0 0 229.2 0 512c0 282.8 229.2 512 512 512C794.8 1024 1024 794.8 1024 512z' fill='%23ed5970'></path><path d='M428.9 672.6c0 12.5-3.5 30.1-7.5 39.1-11.5 25.1-48.2 46.6-77.7 46.6-18.1 0-32.1-5-40.6-14.5-6.5-8-11-19.5-11-30.1 0-22.6 17-43.1 44.6-54.2 11-4.5 21.1-6.5 30.6-6.5 15.5 0 29.6 2.5 39.6 7l-22.1-304.9 291.5-70.7 0 317c0 25.1-8.5 45.1-25.1 60.7-18.1 16.1-40.6 25.6-62.2 25.6-18.1 0-31.6-5-40.1-14.5-6.5-8-11-19.5-11-30.1 0-19.5 13-38.1 34.6-49.7 11.5-6 29.6-11.5 39.1-11.5 15.5 0 30.6 2.5 42.6 7.5l-32.7-272.3-247.3 61.7v244.3z' fill='white'></path></svg>",
		desc: "专注于高品质音频，提供多格式音乐资源下载。",
		siteurl: "https://flac.music.hi.cn/",
		tags: ["影音"],
		weight: 6,
		enabled: true,
	},
	{
		title: "music - dl",
		imgurl: "https://tc.yang.pp.ua/file/logo/music_dl.png",
		desc: "音乐聚合搜索与解析。",
		siteurl: "https://music.zkkp.nyc.mn/",
		tags: ["影音"],
		weight: 5,
		enabled: true,
	},
	{
		title: "GD音乐台",
		imgurl: "data:image/svg+xml;utf8,<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='256' height='256'><path d='M1024 512c0-282.8-229.2-512-512-512C229.2 0 0 229.2 0 512c0 282.8 229.2 512 512 512C794.8 1024 1024 794.8 1024 512z' fill='%23777777'></path><path d='M428.9 672.6c0 12.5-3.5 30.1-7.5 39.1-11.5 25.1-48.2 46.6-77.7 46.6-18.1 0-32.1-5-40.6-14.5-6.5-8-11-19.5-11-30.1 0-22.6 17-43.1 44.6-54.2 11-4.5 21.1-6.5 30.6-6.5 15.5 0 29.6 2.5 39.6 7l-22.1-304.9 291.5-70.7 0 317c0 25.1-8.5 45.1-25.1 60.7-18.1 16.1-40.6 25.6-62.2 25.6-18.1 0-31.6-5-40.1-14.5-6.5-8-11-19.5-11-30.1 0-19.5 13-38.1 34.6-49.7 11.5-6 29.6-11.5 39.1-11.5 15.5 0 30.6 2.5 42.6 7.5l-32.7-272.3-247.3 61.7v244.3z' fill='white'></path></svg>",
		desc: "优质音乐聚合电台，在线聆听最新流行乐。",
		siteurl: "https://music.gdstudio.org/",
		tags: ["影音"],
		weight: 4,
		enabled: true,
	},
];

export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);
	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}
	return friends.sort((a, b) => b.weight - a.weight);
};