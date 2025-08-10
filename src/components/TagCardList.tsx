import type { Tag } from '@/type';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from '@mui/material';

type Props = {
  tags: Tag[];
  handleClickTagCard: (tagName: string) => void;
};
export const TagCardList = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'left', maxWidth: 800, margin: '0 auto' }}
      >
        {props.tags.map((tag, key) => {
          return (
            <Grid size={{ xs: 4, sm: 3 }} key={key}>
              <Card className="mx-auto w-[96%]">
                <CardActionArea
                  onClick={() => props.handleClickTagCard(tag.name)}
                >
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
