import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { SyntheticEvent } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import CircularProgress from "@mui/material/CircularProgress";

const PEER_CODES = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const REPETITION_CODES = [111, 222, 333, 444, 555, 666, 777, 888, 999];

interface IProps {
  value: string;
  result?: string;
  isLoading: boolean;
  onPeerCodeChange: (code: number) => () => void;
  onRepatriationCode: (code: number) => () => void;
  onChange: (event: SyntheticEvent, value: string) => void;
}

export default function Tabs({
  result,
  onPeerCodeChange,
  onRepatriationCode,
  onChange,
  isLoading,
  value,
}: IProps) {
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={onChange} aria-label="lab API tabs example">
            <Tab
              label={
                <Typography component={"h2"} variant="body1">
                  تفسیر عدد
                </Typography>
              }
              value="1"
            />
            <Tab label="اعداد تکرار شونده" value="3" />
            <Tab label="اعداد جفت" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Stack
            sx={{
              backgroundColor: "#eaeaea",
              p: 5,
              minHeight: 200,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              m: -3,
            }}
          >
            {result ? (
              <Typography fontWeight={200} fontSize={18} textAlign={"justify"}>
                {result}
              </Typography>
            ) : (
              <Stack
                direction={"row"}
                sx={{
                  color: "#888",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isLoading ? (
                  <>
                    <CircularProgress
                      sx={{
                        mr: 2,
                        height: "20px!important",
                        width: "20px!important",
                        svg: { height: 20, width: 20, color: '#6ececb' },
                      }}
                    />
                    <Typography fontWeight={200} fontSize={20}>
                      فرشتگان در حال یافتن معنی عدد شما هستند.
                    </Typography>
                  </>
                ) : (
                  <>
                    <DoneRoundedIcon sx={{ fontSize: 30, mr: 1 }} />
                    <Typography fontWeight={200} fontSize={20}>
                      برای نمایش تفسیر، عددی را جستجو نمایید.
                    </Typography>
                  </>
                )}
              </Stack>
            )}
          </Stack>
        </TabPanel>
        <TabPanel value="2">
          <Stack
            sx={{
              backgroundColor: "#eaeaea",
              // p: 5,
              height: 200,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              m: -3,
              overflow: "auto",
            }}
          >
            <List
              sx={{
                height: "inherit",
                width: "100%",
                li: {
                  textIndent: 20,
                  borderBottom: "1px solid #aaa",
                },
              }}
            >
              {PEER_CODES.map((code) => (
                <ListItem disablePadding key={code}>
                  <ListItemButton
                    onClick={onPeerCodeChange(code)}
                    sx={{
                      justifyContent: "space-between",
                      color: "primary.main",
                    }}
                    disableGutters
                  >
                    <Typography>{code}</Typography>
                    <ArrowBackIosRoundedIcon />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Stack>
        </TabPanel>
        <TabPanel value="3">
          <Stack
            sx={{
              backgroundColor: "#eaeaea",
              // p: 5,
              height: 200,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              m: -3,
              overflow: "auto",
            }}
          >
            <List
              sx={{
                height: "inherit",
                width: "100%",
                li: {
                  textIndent: 20,
                  borderBottom: "1px solid #aaa",
                },
              }}
            >
              {REPETITION_CODES.map((code) => (
                <ListItem disablePadding key={code}>
                  <ListItemButton
                    onClick={onRepatriationCode(code)}
                    sx={{
                      justifyContent: "space-between",
                      color: "primary.main",
                    }}
                    disableGutters
                  >
                    <Typography>{code}</Typography>
                    <ArrowBackIosRoundedIcon />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
