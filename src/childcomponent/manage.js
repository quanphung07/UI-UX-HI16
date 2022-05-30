import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';

export default function ManagerMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%', background: "rgb(0, 20, 0)", color: "white" }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText sx={{textAlign: "left"}}>Duyệt đơn chấm công</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText sx={{textAlign: "left"}}>Duyệt đề xuất</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText sx={{textAlign: "left"}}>Giám sát chấm công</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText sx={{textAlign: "left"}}>Giám sát vị trí chấm công</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}