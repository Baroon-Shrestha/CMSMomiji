import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";

CMS.registerMediaLibrary(uploadcare);

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    media_folder: "public/uploads",
    public_folder: "/uploads",
    media_library: {
      name: "uploadcare",
      config: {
        publicKey: "demopublickey", // Replace with your actual Uploadcare key
      },
    },
    collections: [
      {
        name: "home",
        label: "Home Page Content",
        files: [
          {
            label: "Home Content (English)",
            name: "home_en",
            file: "src/content/home.en.md",
            fields: [
              { label: "Hero Opening", name: "hero_opening", widget: "string" },
              { label: "Hero Title", name: "hero_title", widget: "string" },
              {
                label: "Hero Button Text",
                name: "hero_button",
                widget: "string",
              },
              {
                label: "Intro Heading 1",
                name: "intro_heading1",
                widget: "string",
              },
              {
                label: "Intro Heading 2",
                name: "intro_heading2",
                widget: "string",
              },
              {
                label: "Intro Subheading",
                name: "intro_subheading",
                widget: "string",
              },
              {
                label: "Intro Paragraph 1",
                name: "intro_paragraph1",
                widget: "text",
              },
              {
                label: "Intro Paragraph 2",
                name: "intro_paragraph2",
                widget: "text",
              },
              {
                label: "Intro Ending 1",
                name: "intro_ending1",
                widget: "string",
              },
              {
                label: "Intro Ending 2",
                name: "intro_ending2",
                widget: "string",
              },
            ],
          },
          {
            label: "Home Content (Japanese)",
            name: "home_ja",
            file: "src/content/home.ja.md",
            fields: [
              {
                label: "ヒーローオープニング",
                name: "hero_opening",
                widget: "string",
              },
              {
                label: "ヒーロータイトル",
                name: "hero_title",
                widget: "string",
              },
              {
                label: "ヒーローボタンテキスト",
                name: "hero_button",
                widget: "string",
              },
              {
                label: "イントロ見出し1",
                name: "intro_heading1",
                widget: "string",
              },
              {
                label: "イントロ見出し2",
                name: "intro_heading2",
                widget: "string",
              },
              {
                label: "イントロサブタイトル",
                name: "intro_subheading",
                widget: "string",
              },
              {
                label: "イントロ段落1",
                name: "intro_paragraph1",
                widget: "text",
              },
              {
                label: "イントロ段落2",
                name: "intro_paragraph2",
                widget: "text",
              },
              { label: "締めくくり1", name: "intro_ending1", widget: "string" },
              { label: "締めくくり2", name: "intro_ending2", widget: "string" },
            ],
          },
        ],
      },
    ],
  },
});
