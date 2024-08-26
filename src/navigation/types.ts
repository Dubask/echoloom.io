export type Route = {
  name: string;
};

export type IconProps = {
  color: string;
  size: number;
  iconName: string;
};

export type NavigationIcon = {
  headerShown: boolean;
  tabBarIcon: (props: IconProps) => IconProps;
  tabBarActiveTintColor: string;
  tabBarInactiveTintColor: string;
};

export type Icons = (typeof iconNames)[keyof typeof iconNames];
