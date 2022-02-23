import React,{useState} from 'react'
import {Box, Grid, Button, Avatar} from '@mui/material';
import Drawer from '@mui/material/Drawer';
 import { Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import Logo from "../../images/ANNI-Logo1 1.png"
import NewsImage from "../../images/Vectorlanding.png"
import { AccountBalanceWalletRounded, DashboardRounded, Logout, ArrowBack,
  LogoutRounded, Person, PeopleRounded, ChatBubble, Info, MenuBook, Photo, Settings, Notifications } from '@mui/icons-material';
import Newscard from '../NewsCard';
import EventCard from '../EventCard';
import GreenButton from '../Buttonn';
import Home from './Home';
import MyAccount from './MyAccount';
import MemberDirectory from './MemberDirectory';
import Events from './Events';
import Chat from './Chat';



const drawerWidth = 180;
const darkGreen ='//#region 436937'

// const style = {
//   paper: {
//     background: "blue"
//   }
// }
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  

export default function AppDrawer () {
    // const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = useState(0)
    console.log(selected)
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} style={{backgroundColor:'white', boxShadow:'none'}} className={styles.appbar}>
          <Toolbar>
            <IconButton
             
              color="primary"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton>
              <ArrowBack />
            </IconButton>
            <Typography variant="body2" fontWeight='bolder' className='text' noWrap component="div">
              General Dashboard
            </Typography>
            
            
                <Avatar className='' />
              
                <Settings className='text ' alignItems='right' />
                <IconButton edge='end'>
                <Notifications className='text '/>
                </IconButton>
              
          </Toolbar>
        </AppBar>
        <Drawer
           PaperProps={{
            sx: {
              backgroundColor: "#365C2A",
              color: "white",
              margin:"7px",
              borderRadius:"8px"
            }
          }}
          // classes={{ paper: classes.paper }}
          className={styles.drawer}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <Image src={Logo}/>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          
          {/* <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider /> */}
          <br/>
          <br/>
          <br/>
          <List>
            {['Home', 'My Account', 'Member Directory', 'Events', 'Chat', 'News & Updates','Insight & Publications',  'Photo Gallery', 'Logout' ].map((text, index) => (
              <ListItem onClick={()=>setSelected(index)} className={index==selected? 'selectedNav':''}   key={text}>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon className='drawerIcon'  /> 
                  : <MailIcon className='drawerIcon'/>} */}
                  {[<DashboardRounded className={index==selected? 'selectedNav':'drawerIcon'}  />, 
                  <AccountBalanceWalletRounded className={index==selected? 'selectedNav':'drawerIcon'}  />,
                  <Person className={index==selected? 'selectedNav':'drawerIcon'}  />, 
                  <PeopleRounded className={index==selected? 'selectedNav':'drawerIcon'}  />,
                  <ChatBubble className={index==selected? 'selectedNav':'drawerIcon'}  />,
                  <Info className={index==selected? 'selectedNav':'drawerIcon'}  />,
                  <MenuBook className={index==selected? 'selectedNav':'drawerIcon'} />,
                  <Photo className={index==selected? 'selectedNav':'drawerIcon'}/>,
                  <LogoutRounded className={index==selected? 'selectedNav':'drawerIcon'}/>][index]}
                </ListItemIcon>
                <ListItemText className='iconsText'  primary={text}  />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />

          {
            selected == 0 
            ? <Home/>:(
              selected==1 
              ? <MyAccount/>
              :
              (selected ==2 ? <MemberDirectory/>:
              (selected ==3 ? <Events/>:
              (selected ==4 ? <Chat/>: <div>Nothing Here Yet</div>))
              )
              )
          }
          
          {/* <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
            Convallis convallis tellus id interdum velit laoreet id donec ultrices.
            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
            nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
            sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography> */}
        </Main>
      </Box>
    );
}