import PropTypes from 'prop-types';
import { cloneElement, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    useScrollTrigger
} from '@mui/material';

// assets
import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons-react';
import MenuIcon from '@mui/icons-material/Menu';

// elevation scroll
function ElevationScroll({ children, window }) {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });

    return cloneElement(children, {
        elevation: trigger ? 1 : 0,
        style: {
            backgroundColor: theme.palette.mode === 'dark' && trigger ? theme.palette.dark[800] : theme.palette.background.default,
            color: theme.palette.text.dark
        }
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.node,
    window: PropTypes.object
};

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
    const [drawerToggle, setDrawerToggle] = useState(false);

    const drawerToggler = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };

    return (
        <ElevationScroll {...others}>
            <MuiAppBar>
                <Container>
                    <Toolbar sx={{ py: 2.5, px: `0 !important` }}>
                        <Box sx={{ flexGrow: 1 }} />
                        <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={{ xs: 1.5, md: 2.5 }}>
                            <Button color="inherit" component={RouterLink} to="/login" target="_blank">
                                Home
                            </Button>
                            <Button
                                component={Link}
                                href="https://monkstraining.com/"
                                disableElevation
                                variant="contained"
                                color="secondary"
                            >
                                Monks Training Services Ltd. Website
                            </Button>
                        </Stack>
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                {drawerToggle && (
                                    <Box
                                        sx={{ width: 'auto' }}
                                        role="presentation"
                                        onClick={drawerToggler(false)}
                                        onKeyDown={drawerToggler(false)}
                                    >
                                        <List>
                                            <Link style={{ textDecoration: 'none' }} href="#" target="_blank">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconHome2 />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Home" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="/login" target="_blank">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconDashboard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Dashboard" />
                                                </ListItemButton>
                                            </Link>
                                            <Link
                                                style={{ textDecoration: 'none' }}
                                                href="https://codedthemes.gitbook.io/berry"
                                                target="_blank"
                                            >
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconBook />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Documentation" />
                                                </ListItemButton>
                                            </Link>
                                            <Link
                                                style={{ textDecoration: 'none' }}
                                                href="https://links.codedthemes.com/hsqll"
                                                target="_blank"
                                            >
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconCreditCard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Purchase Now" />
                                                </ListItemButton>
                                            </Link>
                                        </List>
                                    </Box>
                                )}
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;