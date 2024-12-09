
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  px: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        borderBottom: '1px solid white',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        '&::-webkit-scrollbar-track': { m: 2 }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="HieuHuynh MERN Stack Board"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
          variant="outlined"
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 36,
              height: 36,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': {
                bgcolor: '#a4b0be'
              }
            }
          }}
        >
          <Tooltip title="HieuHuynh">
            <Avatar alt="HieuHuynh" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/327984179_567677225029960_7905001553622485399_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qbYCL5XnozAQ7kNvgFTVsfY&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AyDUs7NqcAIE3WLNCUAH2dM&oh=00_AYDloAaALjQjeseYgJuBE4Cz_SbjaI2r0VMkLewy1LGSDg&oe=6759ECEC" />
          </Tooltip>
          <Tooltip title="HieuHuynh">
            <Avatar alt="HieuHuynh" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/327984179_567677225029960_7905001553622485399_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qbYCL5XnozAQ7kNvgFTVsfY&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AyDUs7NqcAIE3WLNCUAH2dM&oh=00_AYDloAaALjQjeseYgJuBE4Cz_SbjaI2r0VMkLewy1LGSDg&oe=6759ECEC" />
          </Tooltip>
          <Tooltip title="HieuHuynh">
            <Avatar alt="HieuHuynh" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/327984179_567677225029960_7905001553622485399_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qbYCL5XnozAQ7kNvgFTVsfY&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AyDUs7NqcAIE3WLNCUAH2dM&oh=00_AYDloAaALjQjeseYgJuBE4Cz_SbjaI2r0VMkLewy1LGSDg&oe=6759ECEC" />
          </Tooltip>
          <Tooltip title="HieuHuynh">
            <Avatar alt="HieuHuynh" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/327984179_567677225029960_7905001553622485399_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qbYCL5XnozAQ7kNvgFTVsfY&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AyDUs7NqcAIE3WLNCUAH2dM&oh=00_AYDloAaALjQjeseYgJuBE4Cz_SbjaI2r0VMkLewy1LGSDg&oe=6759ECEC" />
          </Tooltip>
          <Tooltip title="HieuHuynh">
            <Avatar alt="HieuHuynh" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/327984179_567677225029960_7905001553622485399_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qbYCL5XnozAQ7kNvgFTVsfY&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AyDUs7NqcAIE3WLNCUAH2dM&oh=00_AYDloAaALjQjeseYgJuBE4Cz_SbjaI2r0VMkLewy1LGSDg&oe=6759ECEC" />
          </Tooltip>
          <Tooltip title="HieuHuynh">
            <Avatar alt="HieuHuynh" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/327984179_567677225029960_7905001553622485399_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qbYCL5XnozAQ7kNvgFTVsfY&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AyDUs7NqcAIE3WLNCUAH2dM&oh=00_AYDloAaALjQjeseYgJuBE4Cz_SbjaI2r0VMkLewy1LGSDg&oe=6759ECEC" />
          </Tooltip>
          <Tooltip title="HieuHuynh">
            <Avatar alt="HieuHuynh" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/327984179_567677225029960_7905001553622485399_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qbYCL5XnozAQ7kNvgFTVsfY&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AyDUs7NqcAIE3WLNCUAH2dM&oh=00_AYDloAaALjQjeseYgJuBE4Cz_SbjaI2r0VMkLewy1LGSDg&oe=6759ECEC" />
          </Tooltip>
          <Tooltip title="HieuHuynh">
            <Avatar alt="HieuHuynh" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/327984179_567677225029960_7905001553622485399_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qbYCL5XnozAQ7kNvgFTVsfY&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AyDUs7NqcAIE3WLNCUAH2dM&oh=00_AYDloAaALjQjeseYgJuBE4Cz_SbjaI2r0VMkLewy1LGSDg&oe=6759ECEC" />
          </Tooltip>
          <Tooltip title="HieuHuynh">
            <Avatar alt="HieuHuynh" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/327984179_567677225029960_7905001553622485399_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qbYCL5XnozAQ7kNvgFTVsfY&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AyDUs7NqcAIE3WLNCUAH2dM&oh=00_AYDloAaALjQjeseYgJuBE4Cz_SbjaI2r0VMkLewy1LGSDg&oe=6759ECEC" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar