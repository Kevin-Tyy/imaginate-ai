export const sidebarLinks: SidebarCategoryType[] = [
  {
    categoryName: null,
    alternateCategoryName: null,
    links: [{ icon: "/icons/category.svg", alternateIcon: "/icons/category-alternate.svg", link: "/app", title: "Home" }],
  },
  {
    categoryName: "Text to Videos",
    alternateCategoryName: "Videos",
    links: [
      { icon: "/icons/video.svg", alternateIcon: "/icons/video-alternate.svg", link: "/app/videos", title: "Videos" },
      { icon: "/icons/trash.svg", alternateIcon: "/icons/trash-alternate.svg", link: "/app/videos/trash", title: "Trash" },
    ],
  },
  {
    categoryName: "Assets",
    alternateCategoryName: "Assets",
    links: [
      { icon: "/icons/book.svg", alternateIcon: "/icons/book-alternate.svg", link: "/app/assets/library", title: "Library" },
      { icon: "/icons/user-circle.svg", alternateIcon: "/icons/user-circle-alternate.svg", link: "/app/assets/avatars", title: "Avatars" },
    ],
  },
  {
    categoryName: "Ai Product Images",
    alternateCategoryName: "Images",
    links: [
      { icon: "/icons/photo.svg", alternateIcon: "/icons/photo-alternate.svg", link: "/app/images", title: "AI Images" },
      { icon: "/icons/trash-x.svg", alternateIcon: "/icons/trash-x-alternate.svg", link: "/app/images/trash", title: "AI Images Trash" },
    ],
  },
  {
    categoryName: null,
    alternateCategoryName: null,
    links: [{ icon: "/icons/settings.svg", alternateIcon: "/icons/settings-alternate.svg", link: "/app/settings", title: "Settings" }],
  },
];
