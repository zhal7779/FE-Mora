declare module '*.json' {
  const value: any;
  export default value;
}

declare const optionsData: {
  StartYearOptions: { value: string; label: string }[];
  StartMonthOptions: { value: string; label: string }[];
  EndYearOptions: { value: string; label: string }[];
  EndMonthOptions: { value: string; label: string }[];
};

export default optionsData;
