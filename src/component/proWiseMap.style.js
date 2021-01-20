export default theme => ({
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    root: {
      flexGrow: 1,
    },
    paperContent: {
      // padding: '15px',
      width: 'auto',
    },
    getButton: {
      padding: '5px 40px',
      marginTop: '20px',
    },
    paginationPaper: {
      padding: theme.spacing(1),
      paddingTop: '0px',
      paddingBottom: '0px',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    active: {
      height: '15px',
      width: '15px',
      backgroundColor: '#00FF07',
      borderRadius: '50%',
      display: 'inline-block',
    },
    inactive: {
      height: '15px',
      width: '15px',
      backgroundColor: 'red',
      borderRadius: '50%',
      display: 'inline-block',
    },
  });
  