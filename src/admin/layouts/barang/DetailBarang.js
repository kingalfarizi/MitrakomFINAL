import { Button, Card, CircularProgress, Grid, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import MDBox from "admin/components/MDBox";
import MDTypography from "admin/components/MDTypography";
import Footer from "admin/examples/Footer";
import DashboardLayout from "admin/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "admin/examples/Navbars/DashboardNavbar";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const fetchdata = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/products/${id}`
  );
  const data = await response.json();
  return data;
};

const DetailBarang = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchdata(id),
    refetchIntervalInBackground: 1000,
  });

  const [barang, setBarang] = React.useState({
    ItemName: "",
    ItemDesc: "",
    ItemPrice: "",
    Category: "",
    ItemImg: "",
  });

  const handleOnChange = (e) => {
    setBarang({ ...barang, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (!isLoading) {
      setBarang(data.data[0]);
    }
  }, [data]);

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
      setBarang({ ...barang, ItemImg: newImages });
      //   console.log({ newImages });
    };
  };

  const handleSubmit = async () => {
    // console.log(barang);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(barang),
        }
      );

      const data = await response.json();
      if (data) {
        alert("Data berhasil diubah");
        navigate("/admin/barang");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                  Detail Barang
                </MDTypography>
              </MDBox>
              <MDBox pt={3} style={{ padding: 15 }}>
                {/* <FormControl> */}

                {isLoading ? (
                  <CircularProgress color="inherit" />
                ) : (
                  <form action="" encType="multipart/form-data">
                    <label htmlFor="barang">Image</label>
                    <img
                      src={barang.ItemImg}
                      alt=""
                      style={{
                        width: 200,
                        height: 200,
                      }}
                      id="preview-img"
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

                    <label htmlFor="barang">Nama Barang</label>
                    <TextField
                      id="barang"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      value={barang.ItemName}
                      name="ItemName"
                      onChange={handleOnChange}
                    />

                    <label htmlFor="deskripsi">Deskripsi</label>
                    <TextField
                      id="deskripsi"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      multiline
                      value={barang.ItemDesc}
                      name="ItemDesc"
                      onChange={handleOnChange}
                    />

                    <label htmlFor="barang">Harga Barang</label>
                    <TextField
                      id="barang"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      value={barang.ItemPrice}
                      name="ItemPrice"
                      onChange={handleOnChange}
                    />

                    <label htmlFor="barang">Kategori Barang</label>
                    <TextField
                      id="barang"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      value={barang.Category}
                      name="Category"
                      onChange={handleOnChange}
                    />

                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      style={{ color: "black" }}
                    >
                      Submit
                    </Button>
                  </form>
                )}

                {/* </FormControl> */}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};

export default DetailBarang;
