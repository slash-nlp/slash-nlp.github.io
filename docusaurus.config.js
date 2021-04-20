/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "/nlp",
  tagline:
    "A free and open-source repository for NLP studies and research resources",
  url: "https://slash-nlp.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "slash-nlp", // Usually your GitHub org/user name.
  projectName: "slash-nlp", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "/nlp logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "contributing/getting-started/installation",
          position: "left",
          label: "Contributing",
        },
        {
          type: "doc",
          docId: "fundamentals/tokenization",
          position: "left",
          label: "Fundamentals",
        },
        {
          position: "left",
          label: "Help",
          to: "mailto:slash.nlp.x@gmail.com?subject=Support: ",
        },
        //{ to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/slash-nlp/slash-nlp",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Contributing",
              to: "/docs/contributing/getting-started/installation",
            },
            {
              label: "Fundamentals",
              to: "/docs/fundamentals/tokenization",
            },
          ],
        },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/slash-nlp/slash-nlp",
            },
          ],
        },
      ],
      copyright: `<h2 style="margin-top:60px;margin-bottom:-20px"><b>/nlp</b></h2><br/> Copyright © ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/slash-nlp/slash-nlp",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/slash-nlp/slash-nlp",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
