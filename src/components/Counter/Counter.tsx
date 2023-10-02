import React, { useState } from "react";
import "./Counter.scss"
import styles from './Counter.module.scss';
export const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<div className={styles.wow}>{count}</div>
			<button onClick={()=>setCount(count + 1)}>BUTOM</button>
		</>
	);
};
