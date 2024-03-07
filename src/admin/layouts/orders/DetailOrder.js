/* eslint-disable no-unused-vars */
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
import { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import rupiah from "helpers/rupiah";

const fetchdata = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/orders/${id}`);
  const data = await response.json();
  return data;
};

const updatePost = async (data, id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/orders/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const hasil = response.json();
  return hasil;
};

function DetailOrder() {
  let { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["order", id],
    queryFn: () => fetchdata(id),
    refetchIntervalInBackground: 1000,
  });

  const [order, setOrder] = useState({
    fullname: "",
    userAddress: "",
    metodePengiriman: "",
    metodePembayaran: "",
    idCard: null,
    promoCode: null,
    subTotal: "",
    statusOrder: "",
    idBarang: "",
    kuantitas: 1,
    ItemName: "",
    ItemImg: "",
    totalHarga: "",
  });

  useEffect(() => {
    if (!isLoading) {
      setOrder(data.data);
    }
  }, [data, isLoading]);

  // console.log(process.env.REACT_APP_TINYMCE);

  const handleOnChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

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
      setOrder({ ...order, image: newImages });
      //   console.log({ newImages });
    };
  };

  const { mutate, isPending } = useMutation({
    mutationKey: "updatePost",
    mutationFn: () => updatePost(order, id),
  });

  const handleSubmit = async () => {
    // console.log(barang);
    mutate(order, {
      onSuccess: async () => {
        alert("Data berhasil diubah");
        navigate("/admin/order");
      },
      onError: (error) => {
        alert("terdapat error: " + error);
      },
    });
  };

  console.log(data);
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
                  Edit Order
                </MDTypography>
              </MDBox>

              {isLoading ? (
                <CircularProgress color="inherit" />
              ) : (
                <MDBox pt={3} style={{ padding: 15 }}>
                  <label htmlFor="barang">Image</label>
                  <img
                    src={order.ItemImg}
                    id="preview-img"
                    alt="preview"
                    style={{ width: "15rem" }}
                  />
                  {/* <TextField
                    required
                    id="barang"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    type="file"
                    onChange={handleImgUpload}
                  /> */}

                  <label htmlFor="barang">Nama Barang</label>

                  <TextField
                    id="judul"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="ItemName"
                    value={order.ItemName}
                    // onChange={handleOnChange}
                  />

                  <label htmlFor="barang">Nama Pemesan</label>
                  <TextField
                    id="judul"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="fullname"
                    value={order.fullname}
                    // onChange={handleOnChange}
                  />

                  <label htmlFor="barang">Alamat Pemesan</label>
                  <TextField
                    id="alamat"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="userAddress"
                    value={order.userAddress}
                    // onChange={handleOnChange}
                  />

                  <label htmlFor="barang">Jumlah Barang</label>
                  <TextField
                    id="penulis"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="kuantitas"
                    value={order.kuantitas}
                    // onChange={handleOnChange}
                  />

                  <label htmlFor="barang">Metode Pengiriman</label>
                  <TextField
                    id="penulis"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="metodePengiriman"
                    value={order.metodePengiriman}
                    // onChange={handleOnChange}
                  />

                  <label htmlFor="barang">Promo Code</label>
                  <TextField
                    id="penulis"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="promoCode"
                    value={order.promoCode || "tidak ada"}
                    disabled
                    // onChange={handleOnChange}
                  />

                  <label htmlFor="barang">Metode Pembayaran</label>
                  <TextField
                    id="penulis"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="penulis"
                    value={order.metodePembayaran}
                    // onChange={handleOnChange}
                  />
                  {/* subtotal */}
                  <label htmlFor="barang">Subtotal</label>
                  <TextField
                    id="penulis"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="penulis"
                    value={rupiah(order.subTotal)}
                    // onChange={handleOnChange}
                  />

                  {/* <label htmlFor="statusOrder">Status Order</label> */}

                  <FormControl
                    fullWidth
                    sx={{
                      mt: 3,
                    }}
                  >
                    {/* <label htmlFor="barang">Status Order</label> */}

                    <InputLabel id="statusOrder">Status Order</InputLabel>
                    <Select
                      labelId="statusOrder"
                      id="statusOrder"
                      value={order.statusOrder}
                      label="status order"
                      name="statusOrder"
                      onChange={handleOnChange}
                      sx={{
                        p: 2,
                        mb: 3,
                      }}
                      // style={{ marginBottom: 20, padding: 10 }}
                    >
                      <MenuItem value={"pending"}>Pending</MenuItem>
                      <MenuItem value={"delivered"}>Dikirim</MenuItem>
                      <MenuItem value={"finish"}>Selesai</MenuItem>
                      <MenuItem value={"canceled"}>Dibatalkan</MenuItem>
                    </Select>
                  </FormControl>

                  <Button
                    variant="contained"
                    style={{ color: "white" }}
                    color="primary"
                    onClick={handleSubmit}
                    disabled={isPending}
                  >
                    Simpan
                  </Button>

                  {isPending && <CircularProgress color="inherit" />}
                </MDBox>
              )}
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DetailOrder;
