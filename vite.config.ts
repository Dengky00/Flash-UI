// @ts-nocheck
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import fs from "fs";
import { baseParse } from "@vue/compiler-core";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// import libCss from "vite-plugin-libcss";

const vueCustomBlockTransformsPlugin = {
  name: "vue-custom-block",
  transform(code, path) {
    if (!/vue&type=demo/.test(path)) {
      return;
    }
    const filePath = path.split("?")[0];
    //异步读取文件内容，并转为string类型
    const file = fs.readFileSync(filePath).toString();
    //将读取到的文件中的自定义快渲染为AST
    const parsed = baseParse(file).children.find((n) => n.tag === "demo");
    //读取自定义模块中的文本内容
    const title = parsed.children[0].content;
    //将读取文件中的自定义块切分，并转为字符串类型
    const main = file.split(parsed.loc.source).join("").trim();
    //以JSON数据类型返回
    return `export default Comp => {
			Comp.__sourceCode = ${JSON.stringify(main)}
			Comp.__sourceCodeTitle = ${JSON.stringify(title)}
		}`;
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  //用于部署在github直接访问
  base: "/Flash-UI/dist/",
  plugins: [
    vue(),
    // libCss(),
    vueCustomBlockTransformsPlugin,
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  //配置库模式
  // build: {
  //   cssCodeSplit: true,
  //   lib: {
  //     entry: path.resolve(__dirname, "src/lib/index.ts"),
  //     name: "FlashUI",
  //     // 构建好的文件名（不包括文件后缀）
  //     fileName: "flash-ui",
  //   },
  //   rollupOptions: {
  //     // 确保外部化处理那些你不想打包进库的依赖
  //     external: ["vue"],
  //     output: {
  //       // 在 UMD 构建模式下,全局模式下为这些外部化的依赖提供一个全局变量
  //       globals: {
  //         FlashUI: "FlashUI",
  //       },
  //     },
  //   },
  // },
});
