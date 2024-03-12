interface SidebarCategoryType {
  categoryName: string | null;
  alternateCategoryName : string | null;
  links: Array<SidebarLinkItem>;
}
interface SidebarLinkItem {
  icon: string;
  alternateIcon: string;
  link: string;
  title: string;
}

