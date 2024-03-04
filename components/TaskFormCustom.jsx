"use client";
import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";
//to use useFormState use trycatch block for the submission part with return message type

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "Please wait..." : "create task"}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === "error") {
      toast.error("there was an error");
      return;
    }
    if (state.message) {
      toast.success("task created");
    }
  }, [state]);
  return (
    <form action={formAction}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};
export default TaskForm;

// import { revalidatePath } from "next/cache";
//gets formData parameter by default no need to provide
// const createTask = async (formData) => {
//   "use server";
//   const content = formData.get("content");
//   await prisma.task.create({
//     data: {
//       content,
//     },
//   });
//   revalidatePath('/tasks');
//this will reload the page so that changes made are reflected else it wont show added changes
//shifted to actions.js
// };
