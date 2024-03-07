// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "admin/components/MDBox";
import MDTypography from "admin/components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "admin/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "admin/examples/Navbars/DashboardNavbar";
import Footer from "admin/examples/Footer";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, CircularProgress, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const postData = async (data) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const hasil = response.json();
  return hasil;
};

function TambahPost() {
  const [value, setValue] = useState("<p>...</p>");
  const [text, setText] = useState("");

  const [data, setData] = useState({
    judul: "",
    penulis: "",
    body: "",
    image: "",
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: postData,
  });

  const handleImgUpload = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = (event) => {
      const img = document.getElementById("preview-img");
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const newImages = reader.result;
      setData({ ...data, image: newImages });
      //   console.log({ newImages });
    };
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // console.log(data);

    // cek jika ada salah satu di data yang kosong
    for (const key in data) {
      if (data[key] === "") {
        alert("Tolong lengkapi semua data");
        return;
      }
    }

    mutate(data, {
      onSuccess: async () => {
        alert("Data berhasil disimpan");
        navigate("/admin/post");
      },
      onError: (error) => {
        alert("terdapat error: " + error);
      },
    });
  };

  // console.log(process.env.REACT_APP_TINYMCE);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Tambah posts
                </MDTypography>
              </MDBox>
              <MDBox pt={3} style={{ padding: 15 }}>
                <label htmlFor="barang">Image</label>
                <img
                  src=""
                  id="preview-img"
                  alt="preview"
                  style={{ width: "15rem" }}
                />
                <TextField
                  required
                  id="barang"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type="file"
                  onChange={handleImgUpload}
                />

                <label htmlFor="barang">Judul Post</label>

                <TextField
                  id="judul"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="judul"
                  onChange={handleOnChange}
                />
                <label htmlFor="barang">Penulis Post</label>

                <TextField
                  id="penulis"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="penulis"
                  onChange={handleOnChange}
                />

                <label htmlFor="barang">Isi Post</label>

                <Editor
                  apiKey={process.env.REACT_APP_TINYMCE}
                  value={value}
                  onInit={(evt, editor) => {
                    setText(editor.getContent({ format: "text" }));
                  }}
                  onEditorChange={(newValue, editor) => {
                    setValue(newValue);
                    // setText(editor.getContent({ format: "html" }));
                    setData({
                      ...data,
                      body: editor.getContent({ format: "html" }),
                    });
                  }}
                  init={{
                    height: 400,
                    menubar: false,
                    plugins:
                      "mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
                    toolbar:
                      "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
                {/* <pre>{text}</pre> */}
                <Button
                  variant="contained"
                  style={{ color: "white" }}
                  color="primary"
                  onClick={handleSubmit}
                  disabled={isPending}
                >
                  Simpan
                </Button>

                {/* {isSuccess && alert("Data berhasil disimpan")} */}
                {isPending && <CircularProgress />}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default TambahPost;
