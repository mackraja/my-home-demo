import React from 'react';
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles';

import { Topbar, Footer } from './components';

interface MainProps {
  children: any
}

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    height: '100%'
  }
}));

const Main = (props: MainProps) => {
  const { children } = props;
  const classes = useStyles();
  
  return (
    <>
      <Topbar/>
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Main;
