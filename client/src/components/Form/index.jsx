import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { createPost, editPost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(editPost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
  };
  
  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  return (
    <Paper className={styles.paper}>
      <form
        className={`${styles.root} ${styles.form}`}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Criando uma nova memória</Typography>
        <TextField
          name="Criador"
          variant="outlined"
          label="Criador"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="Título"
          variant="outlined"
          label="Título"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="Mensagem"
          variant="outlined"
          label="Mensagem"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={styles.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={styles.button}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Enviar
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Limpar
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
