import { NavigationIcon, Icons, Route, IconProps } from "./types";

export const getNavigationIcons = (route: Route): NavigationIcon => {
  return {
    tabBarIcon: ({ color, size }: IconProps) => ({
      iconName: getIconName(route.name),
      color,
      size,
    }),
    headerShown: false,
    tabBarActiveTintColor: "#6200EE",
    tabBarInactiveTintColor: "gray",
  };
};

const getIconName = (routeName: string): Icons => {
  if (routeName === "home") return iconNames.home;
  if (routeName === "settings") return iconNames.settings;
  if (routeName === "auth") return iconNames.user;

  return iconNames.default;
};
