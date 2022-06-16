import { FC, memo, useEffect } from "react";
import ErrorIcon from '@mui/icons-material/Error';

import {
  Button,
  Paper,
  Stack,
  Typography,
  Container,
  Link,
  Box
} from "@mui/material";
import { styled } from '@mui/system';
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";




const FlexPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const Top: FC = memo(() => {

  useEffect(() => {
    console.log('topページ')
  }, [])

  return (
    <Container sx={{padding: 5, backgroundColor: "#EAF3FF"}}>
      <Stack spacing={2} sx={{textAlign: 'center'}}>
        <FlexPaper sx={{height: 200, borderRadius: "20px"}}>
          <Typography variant="h5" component="h2" sx={{fontWeight: "bold", marginBottom: "10px"}}>トップページ</Typography>
          <Typography sx={{marginBottom: 3}}>こんにちは管制さん、KOMAINUへようこそ！</Typography>
          <Button variant="contained" startIcon={<DirectionsRunIcon />} size="large" color="primary" sx={{paddingY: 2}}>サインアウト</Button>
        </FlexPaper>
        <FlexPaper sx={{height: 150, borderRadius: "20px"}}>
          <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'center', marginBottom: "10px"}}>
            <ErrorIcon fontSize="small" sx={{color: "grey.500", marginRight: 1}}/>
            <Typography sx={{fontWeight: "bold", }}>KOMAINUからのご案内</Typography>
          </Box>
          <Link >2022/06/06 新機能追加のお知らせ</Link>
        </FlexPaper>
      </Stack>
    </Container>
  );
});
