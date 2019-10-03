import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
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
  checkout: {
    marginTop: theme.spacing(),
    width: '100%',
  },
}))

const moods = ['shocked', 'happy', 'excited', 'blissful', 'lovestruck']

function App (props) {
  const classes = useStyles(props)
  const [moodIndex, setMoodIndex] = React.useState(0)
  const [name, setName] = React.useState('')
  const [cardNumber, setCardNumber] = React.useState('')
  const [expiryMonth, setExpiryMonth] = React.useState('')
  const [expiryYear, setExpiryYear] = React.useState('')
  const [cvs, setCvs] = React.useState('')

  React.useEffect(() => {
    const count = (name ? 1 : 0) + (cardNumber ? 1 : 0) + (expiryMonth && expiryYear ? 1 : 0) + (cvs ? 1 : 0)
    setMoodIndex(count)
  }, [cardNumber, cvs, expiryMonth, expiryYear, name])

  return (
    <Container className={classes.container} maxWidth='sm'>
      <CssBaseline />
      <CreditCard mood={moods[moodIndex]} />
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
              setCvs(event.target.value)
            }}
          />
        </div>
        <Button
          className={classes.checkout}
          variant='outlined'
          color='primary'
          onClick={() => { }}
        >
          {'Checkout'}
        </Button>
      </Card>
    </Container>
  )
}

export default App
