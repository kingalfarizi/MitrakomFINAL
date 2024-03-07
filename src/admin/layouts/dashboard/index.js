/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "admin/components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "admin/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "admin/examples/Navbars/DashboardNavbar";
import Footer from "admin/examples/Footer";
import ReportsBarChart from "admin/examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "admin/examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "admin/examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "admin/layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "admin/layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "admin/layouts/dashboard/components/Projects";
import OrdersOverview from "admin/layouts/dashboard/components/OrdersOverview";
import { useQuery } from "@tanstack/react-query";

const fetchBlog = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
  const data = await response.json();
  return data;
};

const fetchOrder = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/orders`);
  const data = await response.json();
  return data;
};

const fetchProduct = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
  const data = await response.json();
  return data;
};

const fetchUser = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
  const data = await response.json();
  return data;
};

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  const {
    isLoading: isLoadingBlog,
    // isError,
    data: dataBlog,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlog,
    refetchIntervalInBackground: 1000,
  });

  const {
    isLoading: isLoadingOrder,
    // isError,
    data: dataOrder,
  } = useQuery({
    queryKey: ["order"],
    queryFn: fetchOrder,
    refetchIntervalInBackground: 1000,
  });

  const {
    isLoading: isLoadingProduct,
    // isError,
    data: dataProduct,
  } = useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
    refetchIntervalInBackground: 1000,
  });

  const {
    isLoading: isLoadingUser,
    // isError,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    refetchIntervalInBackground: 1000,
  });

  // console.log(dataUser)
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3} minHeight={"70vh"}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="paid"
                title="Jumlah Orders"
                count={dataOrder ? dataOrder.data.length : 0}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="people"
                title="Jumlah User"
                count={dataUser ? dataUser.data.length - 1 : 0}
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="description"
                title="Jumlah Blog"
                count={dataBlog ? dataBlog.data.length : 0}
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="inventory"
                title="Jumlah Produk"
                count={dataProduct ? dataProduct.data.length : 0}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        {/* <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Jumlah User"
                  description="Jumlah User Seminggu terakhir"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox> */}
        {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox> */}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
