import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model";
import { SingleTodo } from "./SingleTodo";
import "./styles.scss";

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	completedTodos: Todo[];
	setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({
	todos,
	setTodos,
	completedTodos,
	setCompletedTodos,
}) => {
	return (
		<div className="container">
			<Droppable droppableId={"TodosList"}>
				{(provided, snapshot) => {
					return (
						<div
							className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							<span className="todos__heading">Active Tasks</span>
							{todos.map((todo, index) => {
								return (
									<SingleTodo
										index={index}
										todos={todos}
										todo={todo}
										key={todo.id}
										setTodos={setTodos}
									/>
								);
							})}
							{provided.placeholder}
						</div>
					);
				}}
			</Droppable>

			<Droppable droppableId={"TodosRemove"}>
				{(provided, snapshot) => {
					return (
						<div
							className={`todos remove ${
								snapshot.isDraggingOver ? "dragcomplete" : ""
							} `}
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							<span className="todos__heading">Completed Tasks</span>
							{completedTodos.map((todo, index) => {
								return (
									<SingleTodo
										index={index}
										todos={completedTodos}
										todo={todo}
										key={todo.id}
										setTodos={setCompletedTodos}
									/>
								);
							})}
							{provided.placeholder}
						</div>
					);
				}}
			</Droppable>

			<Droppable droppableId={"TodosDelete"}>
				{(provided) => {
					return (
						<div
							className="delTodo"
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							<img src="assets/delete.png" alt="" />
							{/* {provided.placeholder} */}
						</div>
					);
				}}
			</Droppable>
		</div>
	);
};
