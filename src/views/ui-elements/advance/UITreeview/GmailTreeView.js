import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { TreeItem, TreeView } from '@mui/lab';

// assets
import Label from '@mui/icons-material/Label';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowRight';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { ArrowRightIcon } from '@mui/x-date-pickers';

const PREFIX = 'MuiTreeItem';

const classes = {
    root: `${PREFIX}-root`,
    content: `${PREFIX}-content`,
    group: `${PREFIX}-group`,
    expanded: `${PREFIX}-expanded`,
    selected: `${PREFIX}-selected`,
    focused: `${PREFIX}-focused`,
    disabled: `${PREFIX}-disabled`,
    iconContainer: `${PREFIX}-iconContainer`,
    label: `${PREFIX}-label`
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${classes.content}`]: {
        color: theme.palette.text.secondary,
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
            color: 'var(--tree-view-color)'
        },
        [`& .${classes.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit'
        }
    },
    [`& .${classes.group}`]: {
        marginLeft: 0,
        [`& .${classes.content}`]: {
            paddingLeft: theme.spacing(2)
        }
    }
}));

function StyledTreeItem({ bgColor, color, labelIcon: LabelIcon, labelInfo, labelText, ...other }) {
    return (
        <StyledTreeItemRoot
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                    <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>
                </Box>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor
            }}
            classes={classes}
            {...other}
        />
    );
}

StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired
};

// ==============================|| UI TREEVIEW - GMAIL TREE ||============================== //

export default function GmailTreeView() {
    return (
        <TreeView
            aria-label="gmail"
            defaultExpanded={['3']}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
            sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
            <StyledTreeItem nodeId="1" labelText="All Mail" labelIcon={MailIcon} />
            <StyledTreeItem nodeId="2" labelText="Trash" labelIcon={DeleteIcon} />
            <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
                <StyledTreeItem
                    nodeId="5"
                    labelText="Social"
                    labelIcon={SupervisorAccountIcon}
                    labelInfo="90"
                    color="#1a73e8"
                    bgColor="#e8f0fe"
                />
                <StyledTreeItem nodeId="6" labelText="Updates" labelIcon={InfoIcon} labelInfo="2,294" color="#e3742f" bgColor="#fcefe3" />
                <StyledTreeItem nodeId="7" labelText="Forums" labelIcon={ForumIcon} labelInfo="3,566" color="#a250f5" bgColor="#f3e8fd" />
                <StyledTreeItem
                    nodeId="8"
                    labelText="Promotions"
                    labelIcon={LocalOfferIcon}
                    labelInfo="733"
                    color="#3c8039"
                    bgColor="#e6f4ea"
                />
            </StyledTreeItem>
            <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />
        </TreeView>
    );
}
