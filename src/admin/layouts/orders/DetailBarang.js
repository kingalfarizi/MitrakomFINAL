import { Button, Card, Grid, TextField } from "@mui/material";
import MDBox from "admin/components/MDBox";
import MDTypography from "admin/components/MDTypography";
import Footer from "admin/examples/Footer";
import DashboardLayout from "admin/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "admin/examples/Navbars/DashboardNavbar";
import React from "react";

const DetailBarang = () => {
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

                <form action="">
                  <label htmlFor="barang">Image</label>
                  <img
                    src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format&dpr=2"
                    alt=""
                    style={{
                      width: 200,
                      height: 200,
                    }}
                  />

                  <label htmlFor="barang">Nama Barang</label>
                  <TextField
                    id="barang"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={"nama"}
                  />

                  <label htmlFor="deskripsi">Deskripsi</label>
                  <TextField
                    id="deskripsi"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    multiline
                    value={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa dolorum, eos odit distinctio asperiores beatae enim, cupiditate voluptatibus temporibus eum sequi dicta repellat necessitatibus voluptas earum iste minus explicabo?"
                    }
                  />

                  <label htmlFor="barang">Harga Barang</label>
                  <TextField
                    id="barang"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={"Rp 100.000"}
                  />

                  <label htmlFor="barang">Kategori Barang</label>
                  <TextField
                    id="barang"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={"kategori"}
                  />

                  <Button variant="contained" style={{ color: "black" }}>
                    Submit
                  </Button>
                </form>
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
