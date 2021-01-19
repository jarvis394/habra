import * as React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import {
  ButtonBase,
  fade,
  Grid,
  Divider,
  SwipeableDrawer,
} from '@material-ui/core'
import DeviceHubRoundedIcon from '@material-ui/icons/DeviceHubRounded'
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded'
import CodeRoundedIcon from '@material-ui/icons/CodeRounded'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded'
import BrushRoundedIcon from '@material-ui/icons/BrushRounded'
import StorageRoundedIcon from '@material-ui/icons/StorageRounded'
import LiveTvRoundedIcon from '@material-ui/icons/LiveTvRounded'
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded'

const useStyles = makeStyles((theme) => ({
  paper: {
    background: theme.palette.background.paper,
    maxWidth: '72%',
    boxShadow: '9px 0px 24px 0px rgb(0 0 0 / 2%)',
  },
  root: {
    height: '100%',
    marginTop: theme.spacing(2),
  },
  flowsTitle: {
    fontFamily: 'Google Sans',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '14px',
    margin: theme.spacing(1, 2.5),
    textTransform: 'uppercase',
    color: theme.palette.primary.light,
  },
  backdrop: {
    background: fade(theme.palette.background.default, 0.7),
  },
  flowsGrid: {
    width: '100%',
    margin: 0,
  },
  flowCard: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2, 2.5),
    flexDirection: 'column',
    alignItems: 'baseline',
  },
  flowCardTitle: {
    fontFamily: 'Google Sans',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '16px',
    color: theme.palette.text.primary,
  },
}))

const flows = [
  { title: 'Все потоки', icon: <DeviceHubRoundedIcon /> },
  { title: 'Моя лента', icon: <SubscriptionsRoundedIcon /> },
  { title: 'Разработка', icon: <CodeRoundedIcon /> },
  { title: 'Администрирование', icon: <StorageRoundedIcon /> },
  { title: 'Дизайн', icon: <BrushRoundedIcon /> },
  { title: 'Менеджмент', icon: <SupervisorAccountRoundedIcon /> },
  { title: 'Маркетинг', icon: <LiveTvRoundedIcon /> },
  { title: 'Научпоп', icon: <MenuBookRoundedIcon /> },
]

const FlowItem = ({ title, icon }) => {
  const classes = useStyles()
  return (
    <ButtonBase className={classes.flowCard}>
      <Typography className={classes.flowCardTitle}>{title}</Typography>
    </ButtonBase>
  )
}

const Drawer = ({ isOpen, setOpen }) => {
  const classes = useStyles()
  return (
    <SwipeableDrawer
      anchor={'left'}
      open={isOpen}
      BackdropProps={{
        classes: { root: classes.backdrop },
      }}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      disableDiscovery
      disableSwipeToOpen
      disableBackdropTransition
      classes={{
        paper: classes.paper,
      }}
    >
      <div className={classes.root}>
        <Typography className={classes.flowsTitle}>Потоки</Typography>
        <Grid container className={classes.flowsGrid}>
          {flows.map((e, i) => (
            <Grid item key={i} xs={12} sm={12} md={3}>
              <FlowItem title={e.title} icon={e.icon} />
            </Grid>
          ))}
        </Grid>
      </div>
    </SwipeableDrawer>
  )
}
export default React.memo(Drawer)
