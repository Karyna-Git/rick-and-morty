import { Slide, useScrollTrigger } from "@mui/material";

interface HideOnScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

export const HideOnScroll: React.FC<HideOnScrollProps> = ({
  window,
  children,
}) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
