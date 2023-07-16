interface ProfileItem {
  title: string;
  content: string;
  url: string;
}

declare module '*.json' {
  const value: ProfileItem[];
  export default value;
}
