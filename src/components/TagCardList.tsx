import type { Tag } from "@/type";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

type Props = {
  tags: Tag[];
};
export const TagCardList = (props: Props) => {
  const handleClickTagCard = () => {};
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "left", maxWidth: 800, margin: "0 auto" }}
      >
        {props.tags.map((tag, key) => {
          return (
            <Grid size={{ xs: 4, sm: 3 }} key={key}>
              <Card className="mx-auto w-[96%]">
                <CardActionArea onClick={handleClickTagCard}>
                  <CardContent className="text-center">
                    <Typography variant="body2">{tag.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
