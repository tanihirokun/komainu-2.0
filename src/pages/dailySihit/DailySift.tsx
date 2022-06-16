import {
  Button,
  Paper,
  Stack,
  Typography,
  Container,
  Link,
  Box
} from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ErrorIcon from '@mui/icons-material/Error';

export const DailySift = () => {
  return (
    <Container sx={{padding: 5, backgroundColor: "#EAF3FF"}}>
      <Stack spacing={2} sx={{textAlign: 'center'}}>
        <Paper sx={{height: 200, borderRadius: "20px"}}>
          <Typography sx={{margin: "40px 0 5px", fontWeight: "bold"}}>デイリーシフト</Typography>
          <Typography sx={{marginBottom: 3}}>こんにちは管制さん、KOMAINUへようこそ</Typography>
          <Button variant="contained" startIcon={<DirectionsRunIcon />} size="large" color="primary" sx={{paddingY: 2}}>サインアウト</Button>
        </Paper>
        <Paper sx={{height: 150, borderRadius: "20px"}}>
          <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'center', margin: "30px 0 10px"}}>
            <ErrorIcon fontSize="small" sx={{color: "grey.500", marginRight: 1}}/>
            <Typography sx={{fontWeight: "bold", }}>KOMAINUからのご案内</Typography>
          </Box>
          <Link >2022/06/06 新機能追加のお知らせ</Link>
        </Paper>
      </Stack>
    </Container>
  )
}

