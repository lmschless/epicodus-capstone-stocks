import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingBottom: '1em'
	}
}));

export default function AlertText() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Alert severity="error">Stock Ticker Already Exists</Alert>
		</div>
	);
}
