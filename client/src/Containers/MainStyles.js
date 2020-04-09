/*
 * Created on Mon Aug 05 2019
 *
 * Copyright (c) 2019 Orange Business Services
 */

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: 'none'
    },
    header: {
        backgroundColor: theme.palette.common.black,
        width: '100%'
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)'
      // gridGap: `${theme.spacing.unit * 3}px`,
    },
    divider: {
      margin: theme.spacing(2),
    },
  });
export default styles;