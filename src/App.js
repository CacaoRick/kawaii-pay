import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import { CreditCard } from 'react-kawaii'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(),
    marginTop: theme.spacing(),
  },
  input: {
    margin: theme.spacing(),
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  expir: {
    width: 120,
  },
  slash: {
    margin: theme.spacing(),
  },
  cvs: {
    width: 60,
  },
  buttonWrapper: {
    marginTop: theme.spacing(),
    width: '100%',
    position: 'relative',
  },
  checkout: {
    width: '100%',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}))

const moods = ['shocked', 'happy', 'excited', 'blissful', 'lovestruck']

function App (props) {
  const classes = useStyles(props)
  const [moodIndex, setMoodIndex] = React.useState(1)
  const [name, setName] = React.useState('')
  const [cardNumber, setCardNumber] = React.useState('')
  const [expiryMonth, setExpiryMonth] = React.useState('')
  const [expiryYear, setExpiryYear] = React.useState('')
  const [cvs, setCvs] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    const count = (name ? 1 : 0) + (cardNumber.length === 19 ? 1 : 0) + (expiryMonth.length === 2 && expiryYear.length === 4 && cvs.length === 3 ? 1 : 0) + (isLoading ? 1 : 0)
    setMoodIndex(count)
  }, [cardNumber, cvs, expiryMonth, expiryYear, isLoading, name])

  return (
    <Container className={classes.container} maxWidth='sm'>
      <CssBaseline />
      <CreditCard mood={isError ? 'ko' : moods[moodIndex]} />
      <Card className={classes.card}>
        <TextField
          className={classes.input}
          fullWidth
          variant='outlined'
          margin='dense'
          InputLabelProps={{ shrink: true }}
          label='Name'
          value={name}
          onChange={(event) => {
            setIsError(false)
            setName(event.target.value)
          }}
        />
        <TextField
          className={classes.input}
          fullWidth
          variant='outlined'
          margin='dense'
          inputProps={{ maxLength: 19 }}
          InputLabelProps={{ shrink: true }}
          label='Card Number'
          value={cardNumber}
          onChange={(event) => {
            let inputText = event.target.value.split('-').join('')
            if (inputText.length > 0) {
              inputText = inputText.match(new RegExp('.{1,4}', 'g')).join('-')
            }
            setIsError(false)
            setCardNumber(inputText)
          }}
        />
        <div className={classes.row}>
          <div className={classes.row}>
            <TextField
              className={classes.expir}
              variant='outlined'
              margin='dense'
              inputProps={{ maxLength: 2 }}
              InputLabelProps={{ shrink: true }}
              label='Expiry Month'
              placeholder='MM'
              value={expiryMonth}
              onChange={(event) => {
                setIsError(false)
                setExpiryMonth(event.target.value)
              }}
            />
            <Typography className={classes.slash}>/</Typography>
            <TextField
              className={classes.expir}
              variant='outlined'
              margin='dense'
              inputProps={{ maxLength: 4 }}
              InputLabelProps={{ shrink: true }}
              label='Expiry Year'
              placeholder='YYYY'
              value={expiryYear}
              onChange={(event) => {
                setIsError(false)
                setExpiryYear(event.target.value)
              }}
            />
          </div>
          <TextField
            className={classes.expir}
            variant='outlined'
            margin='dense'
            inputProps={{ maxLength: 3 }}
            InputLabelProps={{ shrink: true }}
            label='CVS'
            value={cvs}
            onChange={(event) => {
              setIsError(false)
              setCvs(event.target.value)
            }}
          />
        </div>
        <div className={classes.buttonWrapper}>
          <Button
            className={classes.checkout}
            variant='outlined'
            color='primary'
            disabled={isLoading}
            onClick={() => {
              setIsLoading(true)
              setTimeout(() => {
                if (moodIndex !== 3) {
                  setIsError(true)
                }
                setIsLoading(false)
              }, 2000)
            }}
          >
            {'Checkout'}
          </Button>
          {isLoading && <CircularProgress size={24} className={classes.buttonProgress} color='secondary' />}
        </div>
      </Card>
    </Container>
  )
}

export default App
