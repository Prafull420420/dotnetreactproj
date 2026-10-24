// FIX 1: Removed unused/duplicate imports (Menu, MenuIcon, IconButton)
import { AppBar, Box, Toolbar, Typography, Button, Container, MenuItem, MenuList } from "@mui/material";
import { Group } from "@mui/icons-material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* FIX 2: Changed `backgroundColor` to `backgroundImage` because `linear-gradient(...)` is a CSS image, not a color */}
      <AppBar
        position="static"
        sx={{
          backgroundImage: 'linear-gradient(135deg, #182873 0%, #218aae 69%, #20a7ac 89%)'
        }}
      >
        <Container maxWidth="xl">
          {/* FIX 3: Added `component={MenuList}` on Toolbar so `<Box>` + `<MenuItem>` works in MUI v9 without throwing "MenuListContext is missing" */}
          <Toolbar component={MenuList} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem sx={{ display: 'flex', gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant="h4" fontWeight="bold">
                  Reactivities
                </Typography>
              </MenuItem>
            </Box>

            <Box sx={{ display: 'flex' }}>
              <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                Activities
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                About
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                Contact
              </MenuItem>
            </Box>

            {/* FIX 4: Changed invalid `variant="container"` to `variant="contained"` */}
            <Button size="large" variant="contained" color="warning">
              Create Activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}