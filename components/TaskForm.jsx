import { createTask } from "@/utils/actions";


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

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        {/* adding required add a small level of security is no data is present */}
        <button type="submit" className="btn btn-primary join-item">
          Create task
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
