import React, { Children } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Footer from 'components/Footer';
import Header from 'components/Header';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();

  const [title, titleChange] = React.useState('');

  const setTitle = title => {
    titleChange(title);
  };

  return (
    <div className={classes.root}>
      <Header title={title} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {Children.map(props.children, child =>
            React.cloneElement(child, { setTitle }),
          )}

          <Footer />
        </Container>
      </main>
    </div>
  );
}
