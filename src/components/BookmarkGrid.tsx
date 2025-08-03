import type { BookmarkList } from "@/type";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

type Props = {
  bookmarkList: BookmarkList | null;
};
export const BookmarkGrid = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "center", maxWidth: 1024, margin: "0 auto" }}
      >
        {props.bookmarkList &&
          props.bookmarkList.map((bookmark, key) => {
            return (
              <Grid size={{ xs: 12, sm: 6 }} key={key}>
                <Card className="mx-auto w-[96%]">
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="body1" component="div">
                        {bookmark.url}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {bookmark.summary}
                      </Typography>
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
