import * as React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { MIN_WIDTH as maxWidth, RATING_MODES } from '../../config/constants'
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import { useHistory } from 'react-router-dom'
import WifiOffRoundedIcon from '@material-ui/icons/WifiOffRounded'
import { Offline } from 'react-detect-offline'
import { useScrollTrigger, Slide, fade } from '@material-ui/core'
import { useSelector } from 'src/hooks'
import { FetchingState } from 'src/interfaces'
import { useDispatch } from 'react-redux'
import { getMe } from 'src/store/actions/user'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    position: 'sticky',
    height: 48,
    flexGrow: 1,
    top: 0,
    borderBottom: '1px solid ' + theme.palette.divider,
  },
  container: { maxWidth, padding: 0 },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontWeight: 800,
    height: '100%',
    alignItems: 'center',
    display: 'flex',
  },
  offline: {
    color: theme.palette.text.disabled,
    marginLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  linkTypography: {
    flexGrow: 1,
    display: 'flex',
    height: '100%',
    alignItems: 'center',
  },
  avatar: {
    height: theme.spacing(3),
    width: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
  },
  updateNotification: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.text.primary,
    position: 'relative',
    height: 48,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateNotificationText: {
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateNotificationLink: {
    textDecoration: 'none !important',
    '-webkit-tap-highlight-color': fade(theme.palette.divider, 0.12) + ' !important'
  },
  updateNotificationIcon: {
    marginLeft: theme.spacing(1),
    marginTop: -1
  }
}))

interface HideOnScrollProps {
  children: React.ReactElement
}

const HideOnScroll = (props: HideOnScrollProps) => {
  const { children } = props
  const trigger = useScrollTrigger({ target: window })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'

const Component = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const modeName = useSelector((state) => state.home.mode)
  const userState = useSelector((state) => state.user.profile.state)
  const userData = useSelector((state) => state.user.profile.data)
  const token = useSelector((state) => state.user.token)
  const mode = RATING_MODES.find((e) => e.mode === modeName)
  const shouldFetchUser = !!token
  const shouldShowUser = userState === FetchingState.Fetched

  React.useEffect(() => {
    if (shouldFetchUser) dispatch(getMe(token))
  }, [shouldFetchUser, dispatch, token])

  return (
    <>
      <a
        className={classes.updateNotificationLink}
        href={'https://habra.vercel.app/top/daily/p/1'}
      >
        <AppBar className={classes.updateNotification} elevation={0}>
          <Typography className={classes.updateNotificationText}>
            Перейти на новую версию приложения
            <ArrowForwardRoundedIcon className={classes.updateNotificationIcon} />
          </Typography>
        </AppBar>
      </a>
      <HideOnScroll>
        <AppBar className={classes.root} elevation={0}>
          <Container className={classes.container}>
            <Toolbar style={{ minHeight: 'unset', height: 48 }}>
              <Typography variant="h6" className={classes.linkTypography}>
                <Link
                  to={mode ? `${mode.to}/p/1` : '/'}
                  onClick={() => window.scrollTo(0, 0)}
                  className={classes.link}
                >
                  habra.
                  <Offline
                    polling={{
                      url: 'https://ipv4.icanhazip.com',
                    }}
                  >
                    <WifiOffRoundedIcon className={classes.offline} />
                  </Offline>
                </Link>
              </Typography>
              <IconButton onClick={() => history.push('/search')}>
                <SearchRoundedIcon />
              </IconButton>
              <IconButton onClick={() => history.push('/settings')}>
                <SettingsOutlinedIcon />
              </IconButton>
              {!shouldShowUser && (
                <IconButton onClick={() => history.push('/auth')}>
                  <PermIdentityRoundedIcon />
                </IconButton>
              )}
              {shouldShowUser && (
                <IconButton
                  onClick={() => history.push('/user/' + userData.login)}
                >
                  <Avatar className={classes.avatar} src={userData.avatar} />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  )
}

export default React.memo(Component)
