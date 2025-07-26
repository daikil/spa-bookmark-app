import Tab from "@mui/material/Tab";

export const samePageLinkNavigation = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
};

type Props = {
  label: string;
  href: string;
  selected?: boolean;
};

export const LinkTab = (props: Props) => {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && "page"}
      {...props}
    />
  );
};
