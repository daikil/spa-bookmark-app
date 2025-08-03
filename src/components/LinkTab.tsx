import Tab from "@mui/material/Tab";

type Props = {
  label: string;
  href: string;
  selected?: boolean;
  onClick: () => void;
};

export const LinkTab = (props: Props) => {
  return (
    <Tab component="p" aria-current={props.selected && "page"} {...props} />
  );
};
