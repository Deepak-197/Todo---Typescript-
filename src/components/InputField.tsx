import React, { useRef } from "react";
import "./styles.scss";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}
			className="input"
		>
			<input
				value={todo}
				ref={inputRef}
				onChange={(e) => setTodo(e.target.value)}
				type="input"
				placeholder="Enter a task"
				className="input_box"
			/>
			<button className="input_submit">Go</button>
		</form>
	);
};

export default InputField;
