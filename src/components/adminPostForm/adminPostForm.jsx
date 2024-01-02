"use client";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { addPost } from "@/lib/action";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="Slug" />
      <input type="text" name="img" placeholder="Image Url" />
      <textarea type="text" name="desc" placeholder="Description" />
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
